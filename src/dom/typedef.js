/**
 * @template {keyof HTMLElementEventMap} K
 * @template {Element} [T = HTMLElement]
 * @typedef {HTMLElementEventMap[K] & { currentTarget: T }} Evt
 */

/**
 * @template {keyof HTMLElementEventMap} K
 * @template {Element} [T = HTMLElement]
 * @callback EvtListener
 * @param {T} this
 * @param {Evt<K, T>} event
 */

/**
 * All the WAI-ARIA 1.1 role attribute values from https://www.w3.org/TR/wai-aria-1.1/#role_definitions
 * @typedef { 'alert'
 * | 'alertdialog'
 * | 'application'
 * | 'article'
 * | 'banner'
 * | 'button'
 * | 'cell'
 * | 'checkbox'
 * | 'columnheader'
 * | 'combobox'
 * | 'complementary'
 * | 'contentinfo'
 * | 'definition'
 * | 'dialog'
 * | 'directory'
 * | 'document'
 * | 'feed'
 * | 'figure'
 * | 'form'
 * | 'grid'
 * | 'gridcell'
 * | 'group'
 * | 'heading'
 * | 'img'
 * | 'link'
 * | 'list'
 * | 'listbox'
 * | 'listitem'
 * | 'log'
 * | 'main'
 * | 'marquee'
 * | 'math'
 * | 'menu'
 * | 'menubar'
 * | 'menuitem'
 * | 'menuitemcheckbox'
 * | 'menuitemradio'
 * | 'navigation'
 * | 'none'
 * | 'note'
 * | 'option'
 * | 'presentation'
 * | 'progressbar'
 * | 'radio'
 * | 'radiogroup'
 * | 'region'
 * | 'row'
 * | 'rowgroup'
 * | 'rowheader'
 * | 'scrollbar'
 * | 'search'
 * | 'searchbox'
 * | 'separator'
 * | 'slider'
 * | 'spinbutton'
 * | 'status'
 * | 'switch'
 * | 'tab'
 * | 'table'
 * | 'tablist'
 * | 'tabpanel'
 * | 'term'
 * | 'textbox'
 * | 'timer'
 * | 'toolbar'
 * | 'tooltip'
 * | 'tree'
 * | 'treegrid'
 * | 'treeitem'
 * | (string & {})} AriaRole
 */

export {};
