/**
 * DO NOT EDIT THIS FILE DIRECTLY.
 * This file is generated following the conversion of
 *
 * @see [./src/temp-dir.browser.js]{@link ./src/temp-dir.browser.js}
 *
 **/
import { nanoid } from 'nanoid'

/**
 * Temporary folder
 *
 * @param {(uuid: string) => string} transform - Transform function to add prefixes or sufixes to the unique id
 * @returns {string} - Full real path to a temporary folder
 */
const tempdir = (transform = d => d) => {
  return transform(nanoid())
}

export default tempdir
