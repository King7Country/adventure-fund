import { useEffect } from 'react'

const useDarkBackground = () => {
  useEffect(() => {
    document.querySelector('Header').style.backgroundColor = 'rgba(0, 0, 0, .5)'

    return () => {
      document.querySelector('Header').style.backgroundColor = 'rgba(0, 0, 0, 0)'
    }
  })
}

export default useDarkBackground
