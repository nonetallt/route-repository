import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: 'src/index.ts',
        output: {
            file: 'lib/route-repository.esm.js',
            format: 'esm',
        },
        plugins: [typescript()],
    },
    {
        input: 'src/index.ts',
        output: {
            file: 'lib/route-repository.js',
            format: 'cjs',
        },
        plugins: [typescript()],
    },
    {
        input: 'src/index.ts',
        output: {
            name: 'route_repository',
            file: 'dist/route-repository.js',
            format: 'iife',
        },
        plugins: [typescript({tsconfigOverride: {compilerOptions: {declaration: false}}}), commonjs(), nodeResolve()],
    },
    {
        input: 'src/index.ts',
        output: {
            name: 'route_repository',
            file: 'dist/route-repository.min.js',
            format: 'iife',
        },
        plugins: [typescript({tsconfigOverride: {compilerOptions: {declaration: false}}}), commonjs(), nodeResolve(), terser()],
    }
]
