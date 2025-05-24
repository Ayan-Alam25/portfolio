export const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

export const twMerge = (...classes: string[]) => cn(...classes);