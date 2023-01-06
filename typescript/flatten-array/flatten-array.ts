export function flatten(items: any[]): number[] {
  return items.flat(Infinity).filter(item => item !== undefined);
}
