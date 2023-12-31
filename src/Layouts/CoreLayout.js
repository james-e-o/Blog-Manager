import { Outlet, ScrollRestoration} from "react-router-dom"
import { useEffect, useState } from "react"
import { screenWidth } from "../Components/app/App"

const Corelayout = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.onresize = () => {
      setInnerWidth(window.innerWidth)
    }
  })
  
  return (
    <screenWidth.Provider value={innerWidth}>
      <ScrollRestoration />
      <Outlet />
    </screenWidth.Provider>
  )
}

export default Corelayout