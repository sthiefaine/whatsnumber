import { useState, useEffect, useLayoutEffect } from "react";

/**
 * Return the window size value
 * 
 * @returns object {
    width: number;
    height: number;
}
 * 
 */
export default function useWindowSize() {
  /*
    to use : 
    import useWindowSize from ""
    const { width, height } = useWindowSize(); 
  */

  const isSSR =
    typeof window === "undefined" ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);

  // https://fb.me/react-uselayouteffect-ssr
  const useIsomorphicLayoutEffect = isSSR ? useEffect : useLayoutEffect;

  const [windowSize, setWindowSize] = useState({
    width: 0 || undefined,
    height: 0 || undefined,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useIsomorphicLayoutEffect(() => {
    changeWindowSize();
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}
