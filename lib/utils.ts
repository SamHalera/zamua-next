import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTitle = (text: string) => {
  const REGEX_TITLE = /\*\*(.*?)\*\*/g;

  return text.replace(REGEX_TITLE, (_, p1) => {
    return `<strong class='text-primary font-bold'>${p1}</strong>`;
  });
};
