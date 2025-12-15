# Routing in next

our data load on children component on page.js

we can directly add routing in next js without any external libraray

like if i want to add about page routing then

1. create a about folder inside app folder.
2. create a page.js. (the name should be page.js by default any other name like about.js or anything will throgh error.)
3. write code inside page.js.
4. simply search localhost:3000/about
5. it will load that.

code ex:

```js
import React from "react";

export default function About() {
  return (
    <div>
      <h1>This is About page</h1>
    </div>
  );
}
```

### Navigation

for navigation we can use next link tag

ex:

app
page.js

```js
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <h1>
      Hey there! Welcome to Next.js! click the links above to navigate to
      different pages.
      <h2>
        <Link href="/about">About</Link>
      </h2>
      <Link href="/services">services</Link>
    </h1>
  );
}
```

````md
app
about
page.js

```js
import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1>This is About page</h1>
      <Link href="/">Go back to home</Link>
    </div>
  );
}
```
````

````md
app
service
page.js

```js
import Link from "next/link";

function services() {
  return (
    <div>
      <h2>This is services page.</h2>
      <Link href="/">Go back to home</Link>
    </div>
  );
}

export default services;
```
````

### Nested routing

nested routing means routing under another routing

ex:

home
services
app services

to create nested we can simply create multiple folders with pages.
ex:

on services page

```js
<div>
  <h1>Technical agency</h1>
  <h2>
    <Link href="/about">About</Link>
  </h2>
  <Link href="/services">services</Link>
  <p>
    <Link href="/services/web-dev">All services</Link>
  </p>
  <p>
    <Link href="/services/Seo">Seo</Link>
  </p>
</div>
```

also the folder name is case sensitive in this type of routing.

# Dynamic routing :

dynamic routes mean multiple blogs page inside main blog

to do so we create a folder inside the blog folder but that name should start with [anyName]

ex:

      blogs folder name
        [blog] folder name => anything written inside [] is called slug
          page.js file name

          ```js
              import React from "react";

              async function page1({ params }) {
                console.log(await params);
                return <div>This is child blog1</div>;
              }

              export default page1;

          ```
-  yhan url me agr hm ye type kren to ye child page pe le jaaega or vhan parama ki value

-      http://localhost:3000/blogs/sim

     {blog: 'sim'}
     [folder] name : jo url me dala

whenever we make components then in every components we receive props

```js
import Link from "next/link";

export default function Home(props) {
  console.log(props);
  return (
    <>
      <h1>Technical Agency</h1>
      <p>
        <Link href="/blogs">Blogs</Link>
      </p> <p>
        <Link href="/about">About</Link>
      </p> <p>
        <Link href="/services">Services</Link>
      </p>
    </>
  );
}
```

```js
export default function Home(props) {
  console.log(props);
}
```

### props

- it have bydefault 2 values params and search params.
- both are promises.

to acess the searchparams we can use .then() or async await
