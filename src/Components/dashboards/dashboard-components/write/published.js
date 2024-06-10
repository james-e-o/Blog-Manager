import React from "react"

 const Published = ()=>{
    return(
        <div className='published-content'>
            <div className="published">
                <div className="title">Unconventional Travel Hacks</div>
                <p className="published-date">{`${23} ${'Mar'}, ${2024}`}</p>
            </div>
            <div className="published">
                <div className="title">The Future of Work</div>
                <p className="published-date">{`${1} ${'May'}, ${2024}`}</p>
            </div>
            <div className="published">
                <div className="title">The Unexpected History of Everyday Objects</div>
                <p className="published-date">{`${16} ${'Nov'}, ${2023}`}</p>
            </div>
            <div className="published">
                <div className="title">The Power of Personal Branding</div>
                <p className="published-date">{`${21} ${'Apr'}, ${2023}`}</p>
            </div>
            <div className="published">
                <div className="title"> Data Detox: Regaining Control of Your Digital Life</div>
                <p className="published-date">{`${16} ${'Nov'}, ${2023}`}</p>
            </div>
            <div className="published">
                <div className="title">The Metaverse Explained: Understanding the Next Frontier of the Internet</div>
                <p className="published-date">{`${1} ${'Dec'}, ${2023}`}</p>
            </div>
        </div>
    )
}

export default Published