"use client";

import {ReactElement} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";

type SidebarLinkProps = {
  path: string
  icon: ReactElement | null;
  label?: Array<string> | string;
}

export const SidebarLink = ({ path, icon, label }: SidebarLinkProps): ReactElement => {
  const currentPath = usePathname();
  const isActiveRoute = currentPath === path;

  return (
    <Link
      href={path}
      className={`
        flex flex-col justify-center items-center 
        hover:text-black dark:hover:text-white 
        border-l-2
        w-28 h-28 duration-150
        ${
          isActiveRoute 
            ? "border-black dark:border-gray-200 text-black dark:text-white"
            : "border-transparent text-gray-600 dark:text-gray-400"
        }
      `}
    >
      { icon }
      {
        label &&
          <span className="mt-2 text-sm text-center">
            {
              typeof label === "string"
                ? label
                : label.map((word, index) => {
                    return (
                      <>
                        {word}
                        { index + 1 !== label.length && <br key={index} />}
                      </>
                    );
                  }
                )
            }
          </span>
      }
    </Link>
  );
}