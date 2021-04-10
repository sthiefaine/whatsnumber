import {useState, useEffect, useLayoutEffect} from "react";

/**
 * Return the window size value
 * 
 * @returns number
 * 
 */
export default function useWindowSize() {
  /*
    to use : 
    import useWindowSize from ""
    const { width } = useWindowSize(); 
  */

  const isSSR = 
  typeof window === 'undefined' 
  || !window.navigator 
  || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)

  // https://fb.me/react-uselayouteffect-ssr
  const useIsomorphicLayoutEffect = isSSR ? useEffect : useLayoutEffect;

  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}