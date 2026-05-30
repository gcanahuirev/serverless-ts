/**
 * @typedef {import('esbuild').BuildOptions} BuildOptions
 */

/**
 * @param {unknown} _serverless
 * @returns {BuildOptions}
 */
export default (_serverless) => {
  return {
    bundle: true,
    minify: true,       // Remove whitespace, shorten variables
    treeShaking: true,  // Eliminate dead code (default when bundling)
    sourcemap: true,    // Enable for app code debugging (disable for shared libraries)
    target: 'node24',
    platform: 'node',
    format: 'esm',
    external: ['@aws-sdk/*'],
  }
}
