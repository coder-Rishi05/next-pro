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
```md
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

```md

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