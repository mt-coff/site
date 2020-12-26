import { h, Fragment } from "preact";
import { Introduction } from "./components/Introduction";
import { Links } from "./components/Links";

export function App() {
  return (
    <>
      <Introduction />
      <Links />
    </>
  );
}
