<hr>
<div align="center">
  <h1 align="center">
    &lt;Button&gt;
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=@accessible/button">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@accessible/button?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@accessible/button">
    <img alt="Types" src="https://img.shields.io/npm/types/@accessible/button?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Code coverage report" href="https://codecov.io/gh/accessible-ui/button">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/accessible-ui/button?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Build status" href="https://travis-ci.org/accessible-ui/button">
    <img alt="Build status" src="https://img.shields.io/travis/accessible-ui/button?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@accessible/button">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@accessible/button?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@accessible/button?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i @accessible/button</pre>
<hr>

An accessible button component for React that provides interop between real `<button>` elements and fake ones, e.g. `<div role='button'>`.
To do so, this component attaches the `onClick` handler from its child component to the keyboard
events for `space` and `enter`. It also adds `role='button'` and `tabIndex={0}` properties, though
this behavior can be overridden by providing those props to the child component e.g. `<Button><div tabIndex={-1}></Button>`.

## Why does this exist?

In designing accessible libraries, we just don't know if our users are going to do the right thing
i.e. using a `<button>` for buttons, rather than a `<div>`, `<span>`, or `<a>`. This component
provides interoperability between `<button>` elements and those faux button elements.

## Quick Start

[Check out the example on CodeSandbox](https://codesandbox.io/s/accessiblebutton-example-spjh2)

```jsx harmony
import Button from '@accessible/button'

const ComponentA = () => (
  // Adds `space` and `enter` keydown handlers to the div,
  // also adds role='button' and tabIndex='0', both
  // of which can be overridden by providing those
  // props on your <div>
  <Button>
    <div onClick={console.log} />
  </Button>
  // <div role='button' tabindex='0'/>
)

const ComponentB = () => (
  // Won't break real buttons
  <Button>
    <button onClick={console.log} />
  </Button>
)

const MyButton = styled.button``

const ComponentC = () => (
  // Won't break real buttons, period.
  <Button>
    <MyButton onClick={console.log} />
  </Button>
)
```

## API

### Props

| Prop     | Type                 | Default     | Required? | Description                                                                                          |
| -------- | -------------------- | ----------- | --------- | ---------------------------------------------------------------------------------------------------- |
| children | `React.ReactElement` | `undefined` | Yes       | The component you want to turn into a button that handles focus and `space`, `enter` keydown events. |

## LICENSE

MIT
