import { Outlet, useLocation} from "react-router-dom"
import { useEffect, useState } from "react"
import { screenWidth } from "../Components/app/App"


// routes import
const ScrollTop = () => {
    const {pathname} = useLocation()
    useEffect(() => {
     const target = document.getElementById("core-wrap")
     target.scrollTo(0,0)
    },[]) 
    return null
}

const Corelayout = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.onresize = () => {
      setInnerWidth(window.innerWidth)
    }
  })
  
  return (
    <screenWidth.Provider value={innerWidth}>
      <div id="core-wrap">
        <ScrollTop />
        <Outlet />
      </div>
    </screenWidth.Provider>
  )
}

export default Corelayout