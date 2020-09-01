import { useEffect, useState } from 'react'
import throttle from 'lodash.throttle'

const useViewport = () => {


  const isBrowser = typeof window !== 'undefined'
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0)

  useEffect(() => {
    if (!isBrowser) return false

    const handleResize = throttle(function() { setWidth(window.innerWidth)
    }, 200);

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { width }
}

export default useViewport
