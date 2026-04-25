const stage = process.env.SST_STAGE || "dev"

export default {
  url: stage === "production" ? "https://papecode.ai" : `https://${stage}.papecode.ai`,
  console: stage === "production" ? "https://papecode.ai/auth" : `https://${stage}.papecode.ai/auth`,
  email: "contact@anoma.ly",
  socialCard: "https://social-cards.sst.dev",
  github: "https://github.com/anomalyco/papecode",
  discord: "https://papecode.ai/discord",
  headerLinks: [
    { name: "app.header.home", url: "/" },
    { name: "app.header.docs", url: "/docs/" },
  ],
}
