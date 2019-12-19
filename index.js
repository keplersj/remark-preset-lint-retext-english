module.exports = {
  plugins: [
    [
      require("remark-retext"),
      require("unified")()
        .use(require("retext-english"))
        .use(require("retext-syntax-mentions"))
        .use(require("retext-syntax-urls"))
        // .use(require("retext-spell"))
        // .use(require("retext-assuming"))
        // .use(require("retext-cliches"))
        .use(require("retext-contractions"))
        .use(require("retext-diacritics"))
        .use(require("retext-equality"))
        .use(require("retext-indefinite-article"))
        // .use(require("retext-intensify"))
        // .use(require("retext-overuse"))
        .use(require("retext-passive"))
        .use(require("retext-profanities"))
        .use(require("retext-readability"))
        .use(require("retext-redundant-acronyms"))
        .use(require("retext-repeated-words"))
        .use(require("retext-sentence-spacing"))
        .use(require("retext-simplify"))
    ]
  ]
};
