import { getAttributes } from '@builder.io/personalization-context-menu'

if (!process.env.BUILDER_PRIVATE_KEY) {
  throw new Error('No BUILDER_PRIVATE_KEY defined')
}

/**
 * API to get the custom targeting attributes from Builder, only needed for the context menu to show a configurator and allow toggling of attributes
 */
export default async (req, res) => {
  const attributes = await getAttributes(process.env.BUILDER_PRIVATE_KEY)
  res.send(attributes)
}
