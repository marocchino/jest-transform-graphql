# @marocchino/jest-transform-graphql

## Why?

I am using `@graphql-tools/webpack-loader`, but there is no matched jest
transformer for that. So, I made it.

## Usage

write transform rule in `jest.config.js` like this:

```js
module.exports = {
  // ...
  transform: {
    "\\.(gql|graphql)$": "@marocchino/jest-transform-graphql",
  },
}
```

## Any problem?

Feel free to report issues. 😃
