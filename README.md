# remark-preset-lint-retext-english

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

Copyright 2019 [Kepler Sticka-Jones](https://keplersj.com). Licensed MIT.
