# remark-preset-lint-retext-english

[![npm](https://img.shields.io/npm/v/remark-preset-lint-retext-english)](https://www.npmjs.com/package/remark-preset-lint-retext-english)
[![npm](https://img.shields.io/npm/dw/remark-preset-lint-retext-english)](https://www.npmjs.com/package/remark-preset-lint-retext-english)
[![Codecov](https://img.shields.io/codecov/c/github/keplersj/remark-preset-lint-retext-english)](https://app.codecov.io/gh/keplersj/remark-preset-lint-retext-english)
[![Bundle Size](https://img.shields.io/bundlephobia/min/remark-preset-lint-retext-english)](https://bundlephobia.com/package/remark-preset-lint-retext-english)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://www.conventionalcommits.org/)

[`remark-lint`](https://github.com/remarkjs/remark-lint) preset for automated proofreading of English text using [`retext`](https://github.com/remarkjs/remark-lint).

# Installation

```bash
$ npm install --save-dev remark-preset-lint-retext-english
```

## Usage

Set the following in your package.json:

```json
{
  "remarkConfig": {
    "plugins": ["remark-preset-lint-retext-english"]
  }
}
```

Run remark. Either [`remark-cli`](https://github.com/remarkjs/remark/tree/master/packages/remark-cli) or [`jest-runner-remark`](https://github.com/keplersj/jest-runner-remark) is recommended for this.

## License

Copyright 2019-2022 [Kepler Sticka-Jones](https://keplersj.com). Licensed MIT.
