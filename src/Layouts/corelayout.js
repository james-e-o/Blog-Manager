import { Outlet} from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { screenWidth } from "../Components/app/App"


// routes import

const Corelayout = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.onresize = () => {
      setInnerWidth(window.innerWidth)
    }
  })
  
  return (
    <screenWidth.Provider value={innerWidth}>
      <div>
       <Outlet />
      </div>
    </screenWidth.Provider>
  )
}

export default Corelayout