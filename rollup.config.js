import buble from 'rollup-plugin-buble';

export default
{
    entry: 'src/LaravelRoutes.js',
    format: 'cjs',
    dest: 'dist/LaravelRoutes.js',
    plugins: [buble()]
}
