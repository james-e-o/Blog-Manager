import { Outlet, ScrollRestoration} from "react-router-dom"
import { useEffect, useState, createContext } from "react"
import { screenWidth } from "../Components/app/App"

// export const popUp = createContext("")
// export const popUpContent = createContext("")

const Corelayout = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  // const [popState, setPopState] = useState(false)
  // const [popContent, setPopContent] = useState("")
  useEffect(() => {
    window.onresize = () => {
      setInnerWidth(window.innerWidth)
    }
  })
  
  return (
    <screenWidth.Provider value={innerWidth}>
      {/* <popUp.Provider value={[popState, setPopState]}> */}
        {/* <popUpContent.Provider value={[popContent, setPopContent]}> */}
          <ScrollRestoration />
          <Outlet />
        {/* </popUpContent.Provider> */}
       {/* </popUp.Provider> */}
    </screenWidth.Provider>
  )
}

export default Corelayout