import React from 'react'
import Content_img4 from "../../feed/Content_img4.jpeg"

const Publications = () => {
  return (
    <div className='publications-wrapper'>
    <div className="publications">
        <div className="publications-image"><img src={Content_img4}/></div>
        <div className='publications-content'>
          <div className="title">The Future of Work</div>
          <p className="publications-date">{`${1} ${'May'}, ${2024}`}</p>
        </div>
    </div>
    <div className="publications">
        <div className="title">The Unexpected History of Everyday Objects</div>
        <p className="publications-date">{`${16} ${'Nov'}, ${2023}`}</p>
    </div>
    <div className="publications">
        <div className="title">The Power of Personal Branding</div>
        <p className="publications-date">{`${21} ${'Apr'}, ${2023}`}</p>
    </div>
    <div className="publications">
        <div className="title"> Data Detox: Regaining Control of Your Digital Life</div>
        <p className="publications-date">{`${16} ${'Nov'}, ${2023}`}</p>
    </div>
    <div className="publications">
        <div className="title">The Metaverse Explained: Understanding the Next Frontier of the Internet</div>
        <p className="publications-date">{`${1} ${'Dec'}, ${2023}`}</p>
    </div>
</div>
  )
}

export default Publications