import { builder } from '@builder.io/react'
import builderConfig from '../config/builder'
import '../assets/index.css'
import { ContextMenu } from '@builder.io/personalization-context-menu'
// only needed for context menu styling
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import '@builder.io/widgets'

builder.init(builderConfig.apiKey)

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ContextMenu />
    </>
  )
}
