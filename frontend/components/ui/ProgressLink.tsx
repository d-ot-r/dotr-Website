"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import NProgress from "nprogress";
import { useTransition } from "react";

type Props = LinkProps & {
  children: React.ReactNode;
  className?: string;
};

export default function ProgressLink({ children, className, ...props }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    NProgress.start();

    startTransition(() => {
      router.push(props.href.toString());
    });
  };

  return (
    <a onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
