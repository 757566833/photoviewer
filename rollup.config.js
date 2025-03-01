import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const banner = String.raw`/*!
 *     ____  __  ______  __________ _    _____________       ____________ 
 *    / __ \/ / / / __ \/_  __/ __ \ |  / /  _/ ____/ |     / / ____/ __ \
 *   / /_/ / /_/ / / / / / / / / / / | / // // __/  | | /| / / __/ / /_/ /
 *  / ____/ __  / /_/ / / / / /_/ /| |/ // // /___  | |/ |/ / /___/ _, _/
 * /_/   /_/ /_/\____/ /_/  \____/ |___/___/_____/  |__/|__/_____/_/ |_|                                                            
 *
 * ${pkg.name} - v${pkg.version}
 * ${pkg.description}
 * ${pkg.homepage}
 *
 * Copyright (c) 2018 ${pkg.author}
 * Released under ${pkg.license} License
 */
`;

export default [
  {
    input: 'src/js/core.js',
    output: [
      {
        name: 'Imagepdfviewer',
        banner,
        file: 'dist/imagepdfviewer.js',
        format: 'umd'
      },
      {
        file: 'dist/imagepdfviewer.common.js',
        banner,
        format: 'cjs'
      },
      {
        file: 'dist/imagepdfviewer.esm.js',
        banner,
        format: 'es'
      }
    ],
    plugins: [babel({ exclude: 'node_modules/**' }), resolve(), commonjs()]
  }
];
