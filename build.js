require('esbuild').build({
  entryPoints: ['src/index.js'],
  format: 'esm',
  platform: 'node',
  bundle: true,
  outfile: 'dist/index.mjs',
}).catch(() => process.exit(1))