# Next.js 12 Edge Middleware Demo with Builder.io

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/BuilderIO/netlify-next-edge-middleware"><img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify"></a>

Try the demo live here: https://builder-edge-personalized.netlify.app/

## Introduction

This is a demo of building personalized landing pages with Builder and Next.js middleware running on Netlify Edge Functions.
All pages are generated with SSG/ISR with a middleware function that rewrites the generic URL to a personalized one.

<p align="center">
  <img src="https://user-images.githubusercontent.com/844291/168449314-8ec6f1b0-0ddd-4491-8edb-5fbb96774a69.gif" alt="Editor example" />
</p>


## Prerequisites

Before using this example, make sure you have the following:

* A [Builder.io](builder.io) account. Check out the [plans](https://www.builder.io/m/pricing), which range from our free tier to custom.
* Save private key / public key from your space [settings page](https://builder.io/account/space) and create copy both keys to `.env.development` and `.env.production` for the next step.


## Quick Start

```shell
git clone git@github.com:BuilderIO/netlify-next-edge-middleware.git
cd netlify-next-edge-middleware
```
Then update env files with the keys from last step
```
yarn
yarn dev
```


## Why Builder.io?
<br />
<p align="center">
  <img alt="BUILDER" src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fdcd545fcda9c4be796889bf072cf72e9" width="240" />
</p>
<h3 align="center">
  Drag and drop page builder and CMS for React, Vue, Angular, and more
</h3>
<p align="center">
  Integrate with any site or app. Drag and drop with the components already in your codebase. High speed, full control, no compromises
</p>
<br />


Hardcoding layouts for frequently changing content bottlenecks your team and makes releases messy

Using an API-driven UI allows you to:

- Decouple page updates from deploys
- Schedule, a/b test, and personalize via APIs
- Reduce code + increase composability

<br />
<img src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F73868572aeff49bdbf00a32fea8c1126" />

## Why edge middleware for landing pages?
Edge middlewares allow us to factor in many details about the request than just the URLs which is usually a limitation of statically generating pages, you'll see in this example we're using cookies, and geolocation information to fetch the correct content and render it statically.

<br />


Additional framework support:

- [Gatsby](https://github.com/BuilderIO/builder/tree/master/examples/gatsby)
- [Next.js](https://github.com/BuilderIO/builder/tree/master/examples/next-js)
- [Angular](https://github.com/BuilderIO/builder/tree/master/packages/angular)
- [HTML API (for any framework)](https://builder.io/c/docs/html-api)

As well as some handy power features like:

- [Symbols](https://builder.io/c/docs/guides/symbols)
- [Dynamic data fetching and binding](https://builder.io/c/docs/guides/advanced-data)
- [State handling](https://builder.io/c/docs/guides/state-and-actions)
- [Content API](https://builder.io/c/docs/query-api)
- [GraphQL API](https://builder.io/c/docs/graphql-api)
- [Webhooks](https://builder.io/c/docs/webhooks)
- [Targeting and scheduling content](https://builder.io/c/docs/guides/targeting-and-scheduling)
- [Extending Builder.io with plugins](https://github.com/BuilderIO/builder/tree/master/plugins)

## Join the community!

Questions? Requests? Feedback? Chat with us in our [official forum](https://forum.builder.io)!
