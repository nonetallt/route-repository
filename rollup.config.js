import buble from 'rollup-plugin-buble';

export default
{
    entry: 'src/LaravelRoutes.js',
    dest: 'dist/LaravelRoutes.js',
    format: 'iife',
    moduleName: 'LaravelJsRoutes',
    plugins: [buble()]
}
