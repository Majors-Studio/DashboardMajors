"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavigationInline: React.FC = () => {
  const [trilha, setTrilha] = useState<
    {
      title: string;
      url?: string;
    }[]
  >([]);

  const path = usePathname();

  const createTrilha = (asPath: string) => {
    const trilha = asPath.split("/").filter((item) => item !== "");

    if(trilha.length === 0) return [{ title: "Home" }];

    return trilha.map((item, index) => {
      if (index === 0) {
        return { title: item, url: `/${item}` };
      }
      return { title: item };
    });
  };

  useEffect(() => {
    setTrilha(createTrilha(path));
  }, [path]);

  return (
    <div
      className="
        flex flex-row items-center gap-2
        text-sm text-gray-500
    "
    >
      {trilha.map((etapa, index) => (
        <div
          key={index}
          className="
            flex flex-row items-center gap-2
        "
        >
          {etapa.url ? (
            <Link
              href={etapa.url}
              className="
            font-bold
            hover:text-blue-500
            transition-colors
            duration-200
            ease-in-out
            cursor-pointer

            "
            >
              <span>{etapa.title}</span>
            </Link>
          ) : (
            <span
              className="
            font-bold
            text-white
                      "
            >
              {etapa.title}
            </span>
          )}
          {index < trilha.length - 1 && " / "}
        </div>
      ))}
    </div>
  );
};

export default NavigationInline;
