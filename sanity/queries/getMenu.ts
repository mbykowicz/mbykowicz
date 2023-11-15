import { Lang, MenuItem } from '@/types'
import { client } from '../lib/client'
import { groq } from 'next-sanity'

export async function getMenuItems(): Promise<MenuItem[]> {
  const lang: Lang = 'en-US'
  return client.fetch(
    groq`*[_type=="menu" && language=="${lang}"][0].items[] {
        label,
        path,
        _key
     }`,
  )
}
