import { Context } from "effect"
import type { InstanceContext } from "@/project/instance"
import type { WorkspaceID } from "@/control-plane/schema"

export const InstanceRef = Context.Reference<InstanceContext | undefined>("~papecode/InstanceRef", {
  defaultValue: () => undefined,
})

export const WorkspaceRef = Context.Reference<WorkspaceID | undefined>("~papecode/WorkspaceRef", {
  defaultValue: () => undefined,
})
