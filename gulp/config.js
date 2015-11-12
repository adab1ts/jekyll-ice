var globs = {
  pre_scripts: '/**/*.coffee',
  pre_styles:  '/**/*.styl',
  scripts:     '/**/*.js',
  styles:      '/**/*.css',
  fonts:       '/**/*.{eot,svg,ttf,woff}',
  images:      '/**/*.{gif,jpg,jpeg,png,svg}',
  pages:       '/**/*.html',
  jekyll:      '/**/*.{html,xml,txt,md,markdown,csv,json,yml}',
  text:        '/**/*.{html,xml,txt,md,markdown,csv,json,yml,css,js}',
  favicon:     '*.ico'
};

var paths = {
  src:         './src',
  build:       './build',
  site:        './site',
  assets:      '/assets',
  fonts:       '/assets/fonts',
  images:      '/assets/images',
  scripts:     '/assets/scripts',
  styles :     '/assets/styles'
};

var resources = {
  src: {
    fonts:   paths.src + paths.fonts   + globs.fonts,
    images:  paths.src + paths.images  + globs.images,
    scripts: paths.src + paths.scripts + globs.pre_scripts,
    styles:  paths.src + paths.styles  + globs.pre_styles,
    pages:   paths.src + globs.pages,
    favicon: paths.src + globs.favicon
  },
  build: {
    fonts:   paths.build + paths.fonts   + globs.fonts,
    images:  paths.build + paths.images  + globs.images,
    scripts: paths.build + paths.scripts + globs.scripts,
    styles:  paths.build + paths.styles  + globs.styles,
    pages:   paths.build + globs.pages,
    favicon: paths.build + globs.favicon
  },
  site: {
    fonts:   paths.site + paths.fonts   + globs.fonts,
    images:  paths.site + paths.images  + globs.images,
    scripts: paths.site + paths.scripts + globs.scripts,
    styles:  paths.site + paths.styles  + globs.styles,
    pages:   paths.site + globs.pages,
    favicon: paths.site + globs.favicon
  },
};

var assets = {
  scripts: [
    { entry: 'head.coffee', out: 'head.js' },
    { entry: 'main.coffee', out: 'main.js' }
  ],
  styles: [
    { entry: 'main.styl', out: 'main.css' }
  ]
};

var server = {
  build: {
    port: 4000,
    host: 'localhost',
    base_url: ''
  },
  site: {
    port: 5000,
    host: 'localhost',
    base_url: ''
  }
};

module.exports = {
  globs: globs,
  paths: paths,
  resources: resources,
  assets: assets,
  server: server
};
