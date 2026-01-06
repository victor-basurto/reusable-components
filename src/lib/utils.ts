/**
 * A vanilla version of clsx
 * Filters out falsy values and joins strings
 * */
export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join("");
}
