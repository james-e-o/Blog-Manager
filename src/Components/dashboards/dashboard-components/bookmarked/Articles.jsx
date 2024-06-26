import React, { useState } from "react"
import Content_img from "../../../contents/images/category-pirates.png"

export const Articles = ()=>{
    const [openArticle, setOpenArticle] = useState('')
    return(
        <div className='article-wrapper'>
            <div className="article">
              <div className="article-image"><img src={Content_img}/></div>
              <div className='article-content'>
                <div className="title">Unconventional Travel Hacks</div>
                <p className="article-date">{`${23} ${'Mar'}, ${2024}`}</p>
              </div>
            </div>
            <div className="article">
                <div className="title">The Future of Work</div>
                <p className="article-date">{`${1} ${'May'}, ${2024}`}</p>
            </div>
            <div className="article">
                <div className="title">The Power of Personal Branding</div>
                <p className="article-date">{`${16} ${'Nov'}, ${2023}`}</p>
            </div>
        </div>
    )
}

export default Articles

