"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { PropsWithChildren } from "react";

type NavLinkProps = {
  href: string;
};

export const NavLink = ({
  href,
  children,
}: PropsWithChildren<NavLinkProps>) => {
  const segment = useSelectedLayoutSegment();
  const slug = href === "/" ? null : href.slice(1);
  const isActive = slug === segment;

  return (
    <Link href={href} className={clsx("nav-link", { active: isActive })}>
      {children}
    </Link>
  );
};
