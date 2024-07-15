import React,{useState, useEffect} from 'react'
import Content_img4 from "../../feed/Content_img4.jpeg"

const Publications = () => {
  const [pubControl, setPubControl] = useState(false)
  useEffect(()=>{
    const controlRoll = document.querySelector("div.control-options")
    document.onpointerdown = (e) => {
      if(!e.target.closest("div.pub-controls") && controlRoll.classList.contains("roll-down")){
        setPubControl(false)
        controlRoll.classList.replace("roll-down","roll-up")
      }
    }
  },[pubControl])

  return (
    <div className='publications-wrapper'>
    <div className="publication">
      <div className="sub-publication" >
        <div className="sub-pub-split">
          <div className="publications-image"><img src={Content_img4}/></div>
          <div className='publications-content'>
            <div className="title">The Future of Work</div>
            <p className="pub-author"><span style={{color:'#333333'}}>from </span>  {'CATEGORY PIRATES'}</p>
          </div>
        </div>

        <div className="pub-controls">
          <p onClick={()=>setPubControl(!pubControl)} className="cont-button">...</p>
          <div className={!pubControl?"control-options      roll-up":"control-options roll-down"}>
            <p className="remove">remove</p>
            <p className="share">share</p>
          </div>
        </div>
      </div>
        <p className="publications-date"><span className="key">date bookmarked:</span>  <span className="value"> {'  5 days ago'}</span></p>
    </div>
</div>
  )
}

export default Publications
// {`${1} ${'May'}, ${2024}`} 