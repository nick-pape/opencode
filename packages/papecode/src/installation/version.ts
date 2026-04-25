declare global {
  const PAPECODE_VERSION: string
  const PAPECODE_CHANNEL: string
}

export const InstallationVersion = typeof PAPECODE_VERSION === "string" ? PAPECODE_VERSION : "local"
export const InstallationChannel = typeof PAPECODE_CHANNEL === "string" ? PAPECODE_CHANNEL : "local"
export const InstallationLocal = InstallationChannel === "local"
