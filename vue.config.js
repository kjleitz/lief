module.exports = {
  css: {
    extract: false,
    // loaderOptions: {
    //   sass: {
    //     // For posterity: Tried this so that I might be able to use some of
    //     // the shorter syntax of Sass. Most of the syntax works just fine,
    //     // but stuff like `=my-mixin` instead of `@mixin my-mixin`, leaving
    //     // quotes off of `@import` paths, etc., doesn't. Unfortunately, this
    //     // option prevents you from being able to use _non-indented_ syntax
    //     // even with a `<style lang="scss">` tag in Vue SFCs. I'd rather
    //     // allow a mix than to strictly adhere to one type, so I'm leaving it
    //     // this way. TODO: Maybe this rule can be nested in the vue-loader
    //     // options in some other way, so that it is applied specifically to
    //     // `<style lang="sass">` blocks. Check out the docs. Might be able to
    //     // do it through the "configureWebpack" option.
    //     indentedSyntax: true,
    //   },
    // },
  },
  // This crap is necessary in order to emit declaration files.
  // See https://github.com/vuejs/vue-cli/issues/1081
  // TODO: remove when possible
  parallel: false,
  chainWebpack(config) {
    config.module.rule("ts").uses.delete("cache-loader");
    config.module.rule("tsx").uses.delete("cache-loader");
    config.module
      .rule('ts')
      .use('ts-loader')
      .loader('ts-loader')
      .tap((opts) => {
        /* eslint-disable no-param-reassign */
        opts.transpileOnly = false;
        opts.happyPackMode = false;
        return opts;
      });
  },
};
