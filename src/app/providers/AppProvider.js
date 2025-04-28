"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loading from "../../components/Loading";

export default function AppProvider({ children }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    // Initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname, prevPathname]);

  return (
    <>
      {isLoading && <Loading />}
      {children}
    </>
  );
}
