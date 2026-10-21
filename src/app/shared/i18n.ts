/**
 * Returns the translated value, or the fallback (English text in data.ts)
 * when the translation is missing — ngx-translate returns the key itself in that case.
 * For list fallbacks (e.g. achievements) a non-array translation also falls back.
 */
export function tr<T>(value: unknown, key: string, fallback: T): T {
    if (value === undefined || value === null || value === '' || value === key) {
        return fallback;
    }
    if (Array.isArray(fallback) && !Array.isArray(value)) {
        return fallback;
    }
    return value as T;
}
