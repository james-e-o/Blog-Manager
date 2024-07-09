import React, { useState } from "react"

export const Drafts = ()=>{
    const [openDraft, setOpenDraft] = useState(false)
    return(
        <div className='draft-wrap'>
            <div className="draft" onClick={()=>setOpenDraft(!openDraft)}>
                <div className="title">Unconventional Travel Hacks</div>
                <p className="draft-date"><span>Last modified: </span>{`${23} ${'Mar'}, ${2024}`}</p>
                <p className="draft-type">Publication</p>

                {
                    openDraft?
                    <div className="draft-content">
                        <p className="drop-list">
                            <span className="key">Words: </span>
                            <span className="value">{34}</span>
                        </p>
                        <p className="drop-list">
                            <span className="key">Sentences: </span>
                            <span className="value">{14}</span>
                        </p>
                        <p className="drop-list">
                            <span className="key">Contributors: </span>
                            <span className="value">{2}</span>
                        </p>
                        <p className="share-draft">
                           Share
                        </p>
                        <p className="controls">
                            <button className="edit">Edit</button>
                            <button className="duplicate">Duplicate</button>
                            <button className="delete">Delete</button>
                        </p>
                    </div>
                    :
                    ""
                }
            </div>
            <div className="draft">
                <div className="title">The Future of Work</div>
                <p className="draft-date">{`${1} ${'May'}, ${2024}`}</p>
            </div>
            <div className="draft">
                <div className="title">The Power of Personal Branding</div>
                <p className="draft-date">{`${16} ${'Nov'}, ${2023}`}</p>
            </div>
        </div>
    )
}

export default Drafts

