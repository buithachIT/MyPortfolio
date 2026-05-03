export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    // Node.js v25 adds a built-in `localStorage` global but without a valid
    // --localstorage-file path, its methods are not real functions.
    // This breaks SSR because libraries like next-themes check
    // `typeof localStorage !== 'undefined'` and assume they're in a browser.
    // Patch it with a proper in-memory implementation for the server context.
    if (
      typeof localStorage !== "undefined" &&
      typeof (localStorage as Storage).getItem !== "function"
    ) {
      const store = new Map<string, string>();
      (global as unknown as Record<string, unknown>).localStorage = {
        getItem: (key: string) => store.get(key) ?? null,
        setItem: (key: string, value: string) => store.set(key, value),
        removeItem: (key: string) => store.delete(key),
        clear: () => store.clear(),
        get length() {
          return store.size;
        },
        key: (index: number) => Array.from(store.keys())[index] ?? null,
      };
    }
  }
}
