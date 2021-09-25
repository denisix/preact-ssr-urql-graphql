# preact-ssr-urql-graphql

Boilerplate template for SPA projects with enabled Server Side Rendering support

### Features
- Preact based (minimal version of React)
- minimal Apollo GraphQL server with Express routing
- minimal server with SSR rendering
- dynamic data prefetch using GraphQL API via URQL framework
- Rollup packaging

### Structure
- /api - GraphQL server here
- /build - static files will be here (created by preact: `npm run build`)
- /dist - builded backend web server (`node dist/server.js` to run)
- /src - preact website src files here
- /src/server.js - backend web server that will handle requests to dynamic routes only