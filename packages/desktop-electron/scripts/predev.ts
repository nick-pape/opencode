import { $ } from "bun"

await $`bun ./scripts/copy-icons.ts ${process.env.PAPECODE_CHANNEL ?? "dev"}`

await $`cd ../papecode && bun script/build-node.ts`
