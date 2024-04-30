export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const load = weakMap.get(endpoint);
    if (load >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, load + 1);
  } else {
    weakMap.set(endpoint, 1);
  }
}
