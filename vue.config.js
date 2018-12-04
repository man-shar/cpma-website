module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/styles/palette.scss";
          @import "@/styles/variables.scss";
        `
      }
    }
  }
};