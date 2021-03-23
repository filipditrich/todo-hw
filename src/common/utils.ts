/**
 * Fake promise with optional value to be resolved with
 * @param {number} delay
 * @param {T} value
 * @return {Promise<T>}
 */
export const fakePromise = <T = any>(delay: number, value?: T) => new Promise<T>((resolve) => setTimeout(resolve, delay, value));
