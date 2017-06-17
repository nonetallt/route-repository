import buble from 'rollup-plugin-buble';

export default
{
    entry: 'src/LaravelHelpers.js',
    format: 'cjs',
    dest: 'dist/laravel-helpers.js',
    plugins: [buble()]
}
