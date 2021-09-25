import { h } from 'preact'
import { useQuery } from '@urql/preact'

const Home = () => {
  const [{ data, fetching, error } = {}, refetch] = useQuery({ query: `{ items { id title } }`, /*requestPolicy: 'network-only'*/ })
  console.log('- Home result ->', data, fetching, error)

  return (
    <div id="app">
      <h2>Home</h2>

      <p><button onClick={refetch}>Reload</button></p>

      <small>Query: {fetching ? 'loading...' : 'loaded'}</small>
      <ul key="u1">
        {data?.items?.map(i => (
          <li key={i.id}>{i.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home