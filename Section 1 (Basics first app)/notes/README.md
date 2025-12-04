# Introduction to next js.

## What is Next.js?

- **React-based Open-Source Full-Stack Framework**: For building fast, production-ready web.
- **Hybrid Rendering**: SSR, SSG, ISR, CSR support.
- **Developer-friendly**: Simplified routing, built-in optimizations.
- **Developed By**: Vercel

---

## Key Features

- **File-based Routing**: Routes match file structure.
- **Image Optimization**: Lazy loading, resizing, WebP support.
- **API Routes**: Backend capabilities within the app.
- **SSR**: Server-rendered pages for SEO and speed.
- **SSG**: Static content at build time.
- **ISR**: Update static pages without full rebuilds.
- **CSR**: UI interaction
- **CSS/Sass Support**: Global styles, CSS modules.
- **TypeScript**: Built-in support.
- **Middleware**: Pre-render logic.
- **Edge/Serverless Deployment**: Scalable, fast.

---

## Benefits

- **SEO Optimized**: Pre-rendered pages for better indexing.
- **Fast Performance**: Faster TTFB, lazy loading.
- **Better UX**: Seamless navigation, Fast Refresh.
- **Scalable**: Hybrid rendering, serverless-ready.
- **Developer Productivity**: Easy setup, rich ecosystem.
- **Flexibility**: Custom configs, headless CMS support.
- **Rich Ecosystem**: Large community, React compatibility.

---

## Use Cases

- **E-commerce**: SEO, fast loading boosts conversions.
- **Content Sites**: Blogs, docs with SSG/ISR.
- **Enterprise Apps**: Scalable with APIs and hybrid rendering.
- **Real-time Apps**: SSR + CSR for interactivity.

---

## Conclusion

Next.js = Fast, flexible, production-ready React framework. Ideal for SEO, performance, and scalable web apps.

---

### Creating first app

to install next js - npx create-next-app@latest

to run - npm run dev

- hydration error : when we have any extention which modify dom and when we work on dev mode in next it give this error.

---

# diffrence b/w react and next

- Next js

1. Next js is server side rendered.
2. all the content come from servrer and rendered.
3. page.js is main file.
4. in next js when code converted to js then it is converted to plain html and this code send as html to the browser.
5. if i want to run my code then i must use

```js
"use client";
```

6. now it is client code and also will run on both server and client.
7. if i dont use then i cant add event listners on it and it will throgh error.
8. this is dynamic server it execute react code on server.
9. it improve seo as in react we sent empty html and the content is appended through js whereas next js first convert code to js then to html pages.
10. faster loadtime : when it serve the html it directly serve not append
11. the browser load is reduced as browser dont creat the tags.

ex:

```js

    <h4 onClick={() => console.log("say hi")}>Click me</h4>

s: Invalid source map. Only conformant source maps can be used to find the original code. Cause: Error: sourceMapURL could not be parsed
 ⨯ Error: Event handlers cannot be passed to Client Component props.
  <h4 onClick={function onClick} children=...>
              ^^^^^^^^^^^^^^^^^^

```

- react js

1. react app is cliet side rendered.
2. data is appended by js.
3. the react using vite is just static server.
4. it is serving the html css and js.
5. all react code got converted into js by Babel and then rendred on pages.
6. it is static server just serve the pages
7. slow load time : as data is appended by js.
