const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const {minifyHtml} = require('./src/_transforms/minify-html');

const isProd = process.env.NODE_ENV === 'prod';

module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addLayoutAlias('default', 'layouts/default.njk');
  eleventyConfig.addPassthroughCopy({'src/assets': 'assets'});
  eleventyConfig.addPassthroughCopy({'node_modules/simpledotcss/simple.min.css': 'assets/css/simple.css'});

  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: 'after',
      symbol: '#',
      level: [1, 2, 3, 4],
    }),
    slugify: eleventyConfig.getFilter('slug'),
  });
  eleventyConfig.setLibrary('md', markdownLibrary);

  if (isProd) {
    eleventyConfig.addTransform('minifyHtml', minifyHtml);
  }

  return {
    templateFormats: ['md', 'njk'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src/site/',
      includes: '../_includes',
      data: '../_data',
      output: 'dist/',
    },
  };
};
