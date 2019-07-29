export function mergeDedupe(...arr: any[]) {
    const setAr = new Set([].concat(...arr));
    return Array.from(setAr);
}