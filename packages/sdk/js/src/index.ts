export * from "./client.js"
export * from "./server.js"

import { createPapecodeClient } from "./client.js"
import { createPapecodeServer } from "./server.js"
import type { ServerOptions } from "./server.js"

export async function createPapecode(options?: ServerOptions) {
  const server = await createPapecodeServer({
    ...options,
  })

  const client = createPapecodeClient({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
