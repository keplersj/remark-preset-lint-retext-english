import remarkRetext from "remark-retext";
import { unified } from "unified";
import retextEnglish from "retext-english";
import retextSyntaxMentions from "retext-syntax-mentions";
import retextSyntaxUrls from "retext-syntax-urls";
import retextSpell from "retext-spell";
import dictionary from "dictionary-en";
import retextContractions from "retext-contractions";
import retextDiacritics from "retext-diacritics";
import retextEquality from "retext-equality";
import retextIndefiniteArticle from "retext-indefinite-article";
import retextIntensify from "retext-intensify";
import retextPassive from "retext-passive";
import retextProfanities from "retext-profanities";
import retextReadability from "retext-readability";
import retextRedundantAcronyms from "retext-redundant-acronyms";
import retextRepeatedWords from "retext-repeated-words";
import retextSentenceSpacing from "retext-sentence-spacing";
import retextSimplify from "retext-simplify";

export default {
  plugins: [
    [
      remarkRetext,
      unified()
        .use(retextEnglish)
        .use(retextSyntaxMentions)
        .use(retextSyntaxUrls)
        .use(retextSpell, dictionary)
        .use(retextContractions)
        .use(retextDiacritics)
        .use(retextEquality)
        .use(retextIndefiniteArticle)
        .use(retextIntensify)
        .use(retextPassive)
        .use(retextProfanities)
        .use(retextReadability)
        .use(retextRedundantAcronyms)
        .use(retextRepeatedWords)
        .use(retextSentenceSpacing)
        .use(retextSimplify),
    ],
  ],
};
