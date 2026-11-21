import { chmodSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE: string =
  'I told my AI coding agent /login didn\'t match the spec, so its diff added HTTP 500 under "expected responses."';

function main(): void {
  const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outputDir, { recursive: true, mode: 0o755 });

  const entryPath: string = join(outputDir, 'entry.txt');
  writeFileSync(entryPath, JOKE, { encoding: 'utf8', mode: 0o644 });
  chmodSync(entryPath, 0o644);
}

main();
