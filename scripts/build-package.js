const { copyFileSync, writeFileSync } = require('fs');

copyFileSync('package.json', 'build/package.json');

writeFileSync('build/cjs/package.json', JSON.stringify({ type: 'commonjs' }, null, 2));
writeFileSync('build/esm/package.json', JSON.stringify({ type: 'module' }, null, 2));
