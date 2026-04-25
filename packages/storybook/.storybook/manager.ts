import { addons, types } from "storybook/manager-api"
import { ThemeTool } from "./theme-tool"

addons.register("papecode/theme-toggle", () => {
  addons.add("papecode/theme-toggle/tool", {
    type: types.TOOL,
    title: "Theme",
    match: ({ viewMode }) => viewMode === "story" || viewMode === "docs",
    render: ThemeTool,
  })
})
