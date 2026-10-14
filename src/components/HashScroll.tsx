import { useEffect } from 'react'

export default function HashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash
      if (!hash) return

      const id = decodeURIComponent(hash.substring(1))

      let attempts = 0

      const scroll = () => {
        const element = document.getElementById(id)

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        } else if (attempts++ < 20) {
          setTimeout(scroll, 100)
        }
      }

      scroll()
    }

    scrollToHash()

    window.addEventListener('hashchange', scrollToHash)

    return () => {
      window.removeEventListener('hashchange', scrollToHash)
    }
  }, [])

  return null
}