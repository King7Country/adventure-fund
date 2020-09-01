import { useEffect, useState } from 'react'


const useViewport = () => {

  // const [width, setWidth] = useState(window.innerWidth)
  //
  // useEffect(() => {
  //
  //
  //
  //
  //
  //
  //   const handleWindowResize = () => setWidth({
  //     windowWidth: window.innerWidth
  //   });
  //
  //   window.addEventListener('resize', handleWindowResize);
  //   return () => window.removeEventListener('resize', handleWindowResize);
  //   }, []);
  //
  //   // Return the width so we can use it in our components
  //   return { width };

  const isBrowser = typeof window !== 'undefined'
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0)

  useEffect(() => {
    if (!isBrowser) return false

    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return { width }
}

export default useViewport
