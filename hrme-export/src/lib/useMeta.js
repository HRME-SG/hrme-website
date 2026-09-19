import { useEffect } from "react";

/**
 * Sets the document title and meta description for the current page.
 * Lightweight alternative to react-helmet — no extra dependency needed.
 */
export default function useMeta(title, description) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    const prevDescription = meta ? meta.getAttribute("content") : null;
    if (meta) meta.setAttribute("content", description);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    const prevOgTitle = ogTitle ? ogTitle.getAttribute("content") : null;
    if (ogTitle) ogTitle.setAttribute("content", title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    const prevOgDesc = ogDesc ? ogDesc.getAttribute("content") : null;
    if (ogDesc) ogDesc.setAttribute("content", description);

    return () => {
      document.title = prevTitle;
      if (meta && prevDescription !== null) meta.setAttribute("content", prevDescription);
      if (ogTitle && prevOgTitle !== null) ogTitle.setAttribute("content", prevOgTitle);
      if (ogDesc && prevOgDesc !== null) ogDesc.setAttribute("content", prevOgDesc);
    };
  }, [title, description]);
}
