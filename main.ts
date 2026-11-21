import { chmodSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const JOKE: string =
  'I told my AI coding agent to write more human comments, so above auth it wrote: // please don\'t fire me.';

function main(): void {
  const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outputDir, { recursive: true, mode: 0o755 });

  const entryPath: string = join(outputDir, 'entry.txt');
  writeFileSync(entryPath, JOKE, { encoding: 'utf8', mode: 0o644 });
  chmodSync(entryPath, 0o644);
}

main();
