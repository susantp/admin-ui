import React, {ReactNode, useMemo} from "react";
import {usePathname} from "next/navigation";
import {HomeIcon} from "lucide-react";
import Link from "next/link";

export default function Breadcrumb(): ReactNode[] {
  const pathName: string = usePathname();
  const pathnameArray = useMemo(() => pathName.split('/'), [pathName]);

  const breadcrumb = pathnameArray.map((value, index) => {
    if (index === 0) {
      return (
        <Link key={`home-${Math.random()}`}
              href="/">
          <HomeIcon/>
        </Link>
      );
    }
    if (index === 1) {
      return (
        <>
          <span key={`divider-${Math.random()}`}>/</span>
          <Link
            key={`link-${Math.random()}`}
            href={`/${value}`}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
        </>
      );
    }
    if (index === 2 && value !== 'create') {
      return (
        <>
          <span key={`divider-${Math.random()}`}>/</span>
          <Link
            key={`edit-${Math.random()}`}
            href={`/${pathnameArray[1]}/${value}`}>Edit</Link>
        </>
      );
    }
    return (
      <>
        <span key={`divider-${Math.random()}`}>/</span>
        <span
          key={`text-${Math.random()}`}>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
      </>
    );
  });

  return breadcrumb.filter(Boolean);
}
