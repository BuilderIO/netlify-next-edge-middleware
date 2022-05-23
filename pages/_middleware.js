import { NextResponse } from 'next/server'
import {
  PersonalizedURL,
  getUserAttributes
} from '@builder.io/personalization-utils'

const personalizedPrefix = '/builder'
const excludededPrefixes = ['/favicon', '/api', '/sw.js', personalizedPrefix]

export default function middleware(request) {
  const url = request.nextUrl
  let response = NextResponse.next()
  const usePath = url.pathname
  if (!excludededPrefixes.find(path => usePath.startsWith(path))) {
    const query = Object.fromEntries(url.searchParams)
    const personlizedURL = new PersonalizedURL({
      pathname: usePath,
      attributes: {
        ...getUserAttributes({ ...request.cookies, ...query }),
        domain: request.headers.get('Host') || '',
        city: request.geo?.city || '',
        country: request.geo?.country || '',
        searchBot: String(request.ua?.isBot)
      }
    })
    url.pathname = personlizedURL.rewritePath()
    return NextResponse.rewrite(url)
  }
  return response
}
