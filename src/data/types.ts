/**
 * Tabs displayed in Post details
 */
export type ActiveTab = 'tags' | 'comments' | 'metadata'

/**
 * All routes of the app.
 */
export enum RouteName {
  SEARCH = '/',
  SETTINGS = '/settings',
  ABOUT = '/about',
  PRIVACY = '/privacy',
  TERMS = '/terms',
}

/**
 * All modals the app can display.
 */
export enum ModalId {
  CREATE_SUPERTAG,
}

/**
 * One-time definition of an empty function. Reusing this improves React's performance as it does not break memoization.
 */
export const NO_OP = () => {}

export type InViewHookResponse<T extends Element> = {
  ref: (node?: T | null) => void
  inView: boolean
  entry?: IntersectionObserverEntry
}

export type SuggestionsError = { message: string; results: number }
