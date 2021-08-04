import { AnyTag, Supertag, TagType } from 'r34-types'
import { AnyBiasedTag, BiasedTag, Tag, TagModifier } from 'r34-types'

export function getUrlParameter(src: string) {
  return new URL(src).searchParams.get('url') || ''
}

/**
 * Converts a list of objects into a map.
 * @param list The original list
 * @param keyProp The keyProp parameter defines which property of the objects will be used as the index for the map
 */
export const listToMap = <T>(list: T[], keyProp: string): Record<string, T> => {
  return list.reduce((result: Record<string, T>, current: any) => {
    result[current[keyProp]] = current
    return result
  }, {})
}

/**
 * Joins tags together for analytics event
 */
export function tagsToString(tags: Record<string, AnyBiasedTag>) {
  return Object.values(tags)
    .map((tag) => (isSupertag(tag) ? `*${tag.name}` : `${tag.modifier}${tag.name}`))
    .sort()
}

/**
 * Returns a URL object when the value is a hyperlink. Else undefined
 */
export function parseUrl(value: string) {
  try {
    return new URL(value)
  } catch (err) {
    return undefined
  }
}

/**
 * converts a version like "1.2.7" into 127
 */
export function versionToNumber(majorMinorPatch: string) {
  return Number(majorMinorPatch.split('.').join(''))
}

/**
 * Hacky ass way to download images cross origin. Could solve this by hosting both the app and the api on the same domain.
 */
export function download(url: string) {
  const filename = url.split('/').pop() || ''

  fetch(url, {
    headers: new Headers({
      Origin: window.location.origin,
    }),
    mode: 'cors',
  })
    .then((response) => response.blob())
    .then((blob) => {
      var a = document.createElement('a')
      a.download = filename
      a.href = window.URL.createObjectURL(blob)
      document.body.appendChild(a)
      a.click()
      a.remove()
    })
    .catch((e) => console.error(e))
}

/**
 * Returns the current version of the project
 */
export function getVersion() {
  // Some browsers fail to get environment variables. In that case return unknown.
  if (process?.env?.REACT_APP_VERSION) {
    return process.env.REACT_APP_VERSION
  }

  return 'unknown'
}

/**
 * Render ready version.
 */
export function getVersionString() {
  const version = getVersion()

  return version === 'unknown' ? 'Latest Release' : `Version ${version}`
}

/**
 * Returns the correct source based on preferences
 */
export function getCorrectSource(loadOriginal: boolean, big_src: string, small_src: string) {
  const source = loadOriginal ? big_src : small_src
  return source
}

export function boolToNumber(value: boolean) {
  return value ? 1 : 0
}

export function bias(tag: Tag, modifier: TagModifier): BiasedTag {
  return { ...tag, modifier }
}

export function isBiased(tag: Tag | BiasedTag): tag is BiasedTag {
  return (tag as BiasedTag).modifier !== undefined
}

export function isSupertag(tag: AnyTag | AnyBiasedTag): tag is Supertag {
  return (tag as Supertag).tags !== undefined
}

export function getInterestingType(types: TagType[]) {
  return types.find((t) => !t.match(/^[general|ambiguous]$/))
}
