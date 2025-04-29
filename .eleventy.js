module.exports = function(eleventyConfig) {
    return {
      dir: {
        input: '.',         // source files
        includes: '_includes',
        data: '_data',
        output: 'docs'       // GitHub Pages will publish this folder
      },
      // Optional: set pathPrefix if serving from a subpath (replace with your repo name)
      pathPrefix: '/portfolio-website/'
    };
  };