import { useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import { applyMeta, resolveMeta } from "@/lib/seo";

export function DocumentMeta() {
  const { pathname } = useLocation();
  const meta = useMemo(() => resolveMeta(pathname), [pathname]);

  useEffect(() => {
    applyMeta(meta);
  }, [meta]);

  return null;
}
