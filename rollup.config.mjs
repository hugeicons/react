import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const input = 'src/index.ts';
const external = id => /^react($|\/)/.test(id);
const globals = {
  'react': 'React',
  'react/jsx-runtime': 'jsxRuntime'
};

// Shared TypeScript configuration
const typescriptConfig = {
  tsconfig: './tsconfig.json',
  declaration: false,
  sourceMap: true,
  inlineSources: true,
  noEmit: false,
  exclude: ['**/__tests__/**']
};

// Shared plugins for all builds
const basePlugins = [
  nodeResolve(),
  commonjs(),
  typescript(typescriptConfig)
];

// Production optimization plugins
const prodPlugins = [
  terser({
    output: { comments: false },
    compress: {
      drop_console: true,
      drop_debugger: true,
      pure_getters: true
    }
  })
];

export default defineConfig([
  // ESM build
  {
    input,
    output: {
      dir: 'dist/esm',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
    external,
    plugins: basePlugins
  },

  // CJS build
  {
    input,
    output: {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      exports: 'named'
    },
    external,
    plugins: basePlugins
  },

  // UMD build (minified)
  {
    input,
    output: {
      file: 'dist/umd/index.js',
      format: 'umd',
      name: 'HugeiconsReact',
      globals,
      sourcemap: true
    },
    external,
    plugins: [...basePlugins, ...prodPlugins]
  },

  // Types
  {
    input,
    output: {
      dir: 'dist/types',
      preserveModules: true,
      preserveModulesRoot: 'src'
    },
    external,
    plugins: [dts()]
  }
]);
