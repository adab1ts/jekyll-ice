//** Paths definitions **//
var paths = {
  src:         './src',
  dest:        './site',
  assets:      '/assets',
  fonts:       '/assets/fonts',
  images:      '/assets/images',
  scripts:     '/assets/scripts',
  styles :     '/assets/styles'
};

var resources = {
  main_script: paths.src + paths.scripts + '/main.coffee',
  main_style:  paths.src + paths.styles + '/main.styl',
  src_fonts:   paths.src + paths.fonts + '/**/*.{eot,svg,ttf,woff}',
  src_images:  paths.src + paths.images + '/**/*.{jpg,jpeg,png,svg,webp}',
  src_scripts: paths.src + paths.scripts + '/**/*.coffee',
  src_styles:  paths.src + paths.styles + '/**/*.styl',
  src_pages:   paths.src + '/**/*.html',
  favicon:     paths.dest + '*.ico',
  fonts:       paths.dest + paths.fonts + '/**/*.{eot,svg,ttf,woff}',
  images:      paths.dest + paths.images + '/**/*.{jpg,jpeg,png,svg,webp}',
  scripts:     paths.dest + paths.scripts + '/**/*.js',
  styles:      paths.dest + paths.styles + '/**/*.css',
  pages:       paths.dest + '/**/*.html'
};

var server = {
  port: 4000,
  host: 'localhost',
  base_url: ''
};

module.exports = {
  paths: paths,
  resources: resources,
  server: server
};
