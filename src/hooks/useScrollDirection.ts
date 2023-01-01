const SCROLL_UP = 'up'
const SCROLL_DOWN = 'down'

import { useEffect, useState } from 'preact/compat'

export default function (initialDirection: string) {
  const [scrollDir, setScrollDir] = useState(initialDirection)

  useEffect(() => {
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset
      const threshold = 70

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // We haven't exceeded the threshold
        ticking = false
        return
      }

      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP)
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      // console.log('added event listener')
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      // console.log('removed')
      window.removeEventListener('scroll', onScroll)
    }
  }, [scrollDir])

  return scrollDir
}
