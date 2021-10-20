const mix = require('laravel-mix');

mix.webpackConfig({
    output: {
        library: {
            name: 'jsonp',
            target: 'umd',
            export: 'default'
        }
        globalObject: 'window'
    }
});

// Compile package into dist
if(mix.inProduction()) {
    mix.js('index.js', 'dist/route-repository.min.js');
}
else {
    mix.js('index.js', 'dist/route-repository.js').sourceMaps();
}
