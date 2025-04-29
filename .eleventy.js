module.exports = function(eleventyConfig) {
    return {
      dir: {
        input: '.',         // source files
        includes: '_includes',
        data: '_data',
        output: 'docs'       // GitHub Pages will publish this folder
      }
    };
  };