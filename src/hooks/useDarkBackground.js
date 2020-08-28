import { useEffect } from 'react'

const useDarkBackground = () => {
  useEffect(() => {
    document.querySelector('Header').style.backgroundColor = '#baccdd'

    return () => {
      document.querySelector('Header').style.color = 'rgba(0, 0, 0, 0)'
    }
  })
}

export default useDarkBackground
