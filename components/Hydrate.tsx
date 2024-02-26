'use client'

import { ReactElement, useEffect, useState } from "react"

const Hydrate = ({ children }: { children: ReactElement}) => {
  const [isHydrated, setIsHydrated] = useState(false)
  useEffect(() => {
    setIsHydrated(true)
  }, [])
  if (isHydrated) {
    return children
  }
  return (
    <div>Loading</div>
  )
}

export default Hydrate