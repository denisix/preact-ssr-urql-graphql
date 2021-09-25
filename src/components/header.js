import { h } from 'preact'
// import { Link } from 'preact-router/match'

const Header = () => (
  <header class="header">
    <h1>Preact App</h1>
    <nav>
      <a activeClassName="active" href="/">Home</a>
      <a activeClassName="active" href="/profile">Me</a>
      <a activeClassName="active" href="/profile/john">John</a>
    </nav>
  </header>
)

export default Header