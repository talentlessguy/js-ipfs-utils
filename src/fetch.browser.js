
/**
 * @typedef {globalThis.Headers} Headers
 * @typedef {globalThis.Request} Request
 * @typedef {globalThis.Response} Response
 */

import fetch from 'native-fetch'

// use window.fetch if it is available, fall back to node-fetch if not
export default fetch
