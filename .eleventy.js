module.exports = function(eleventyConfig) {
    return {
      dir: {
        input: '.',
        includes: '_includes',
        data: '_data',
        output: 'docs'
      },
      pathPrefix: '/portfolio-website/'
    };
  };