import buble from 'rollup-plugin-buble';

export default
{
    entry: 'src/LaravelRoutes.js',
    dest: 'dist/laravel-js-routes.js',
    format: 'iife',
    moduleName: 'LaravelJsRoutes',
    plugins: [buble()],
    exports: 'default'
}
