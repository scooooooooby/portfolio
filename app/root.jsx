import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  json,
} from "remix";
import Header, { links as headerLinks } from "./components/Header/Header";

// Intelligent resets
import normalizeStyles from "normalize.css/normalize.css";

// core styles shared by all of react-notion-x
// import reactNotionXStyles from "react-notion-x/src/styles.css";

// used for code syntax highlighting
import prismjsStyles from "prismjs/themes/prism-tomorrow.css";

// used for collection views
import dropdownStyles from "rc-dropdown/assets/index.css";

import styles from "./app.css";

export const links = () => [
  ...headerLinks(),
  { rel: "stylesheet", href: normalizeStyles },
  // { rel: "stylesheet", href: reactNotionXStyles },
  { rel: "stylesheet", href: prismjsStyles },
  { rel: "stylesheet", href: dropdownStyles },
  { rel: "stylesheet", href: styles },
];

export function meta() {
  return { title: "Helen V. Holmes" };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
