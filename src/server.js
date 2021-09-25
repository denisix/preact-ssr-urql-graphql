import fs from 'fs'
import path from 'path'
import render from 'preact-render-to-string'
import App from './app'

const polka = require('polka')
const fetch = require('isomorphic-unfetch')
if (!global.fetch) global.fetch = fetch

import { h } from "preact"
import prepass from 'preact-ssr-prepass'
import { createClient, dedupExchange, cacheExchange, fetchExchange, ssrExchange, Provider } from '@urql/preact'

const RGX = /<div id="app"[^>]*>.*?(?=<script)/i
const index = fs.readFileSync(path.join(__dirname, '/index.html'), 'utf8')

polka()
  .get('*', async (req, res) => {
    console.log('- req', req.url)
    const t0 = Date.now()

    const ssr = ssrExchange({ isClient: false })

    const client = createClient({
      url: 'http://localhost:3031/graphql',
      suspense: true, // activate urql's Suspense mode on the server-side
      exchanges: [dedupExchange, cacheExchange, ssr, fetchExchange],
      fetch,
    })

    const Main = (
      <Provider value={client}>
        <App url={req.url} value={client} />
      </Provider>
    )

    // Using `react-ssr-prepass` this prefetches all data
    await prepass(Main)
    const content = render(h(() => Main, { url: req.url }));
    const state = JSON.stringify(ssr.extractData()) //.replace(/</g, '\\u003c')

    // Extract the data after prepass and rendering
    const html = index.replace(RGX, `${content}<script type="text/urql">${state}</script>`)
    console.log('- req', `[${Date.now() - t0} ms]`, html.length, req.path)

    res.writeHead(200, { 'Content-Type': 'text/html' }).end(html)
  })

  // .use(compress, build)

  .listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000/')
  })