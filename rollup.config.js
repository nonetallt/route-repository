import buble from 'rollup-plugin-buble';

export default
{
  entry: 'src/LaravelRoutes.js',
  dest: 'dist/laravel-js-routes.js',
  format: 'cjs',
  plugins: [buble()],
  exports: 'default',
  output: {
    extend: true
  }
}
