import './style.css'
import { h } from 'preact'
import { createClient, ssrExchange, dedupExchange, cacheExchange, fetchExchange } from '@urql/core'
import { Provider } from '@urql/preact'
import App from './app'

const isServerSide = typeof window === 'undefined'

let initialState
if (!isServerSide) {
  try {
    const s = document.querySelector('script[type="text/urql"]')
    if (s) {
      initialState = JSON.parse(s.innerText)
      console.log('URQL initialized ->', initialState)
    }
  } catch (e) {
    console.log('URQL load initialState failed ->', e && e.toString())
  }
}

// The `ssrExchange` must be initialized with `isClient` and `initialState`
const ssr = ssrExchange({
  isClient: !isServerSide,
  initialState,
})

const client = createClient({
  url: 'http://localhost:3031/graphql',
  exchanges: [
    dedupExchange,
    cacheExchange,
    ssr, // Add `ssr` in front of the `fetchExchange`
    fetchExchange,
  ],
})

const Main = ({ url, value }) => (
  <Provider value={value ? value : client}>
    <App url={url} />
  </Provider>
)

export default Main