import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

interface InterfaceGetHelpers {
  joinClasses: (...classes: string[]) => string;
  formatDate: (input: string | number) => string;
  cn: (...inputs: ClassValue[]) => string;
}

const getHelpers = (): InterfaceGetHelpers => {
  const cn = (...inputs: ClassValue[]): string => {
    return twMerge(clsx(inputs))
  }
  const joinClasses = (...classes: string[]): string => {
    return classes.filter(Boolean).join(" ");
  }
  const formatDate = (input: string | number): string => {
    const date: Date = new Date(input)
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }
  return {joinClasses, formatDate, cn}
}
export default getHelpers
