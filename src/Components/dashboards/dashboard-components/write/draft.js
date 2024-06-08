import React, { useState } from "react"

export const Drafts = ()=>{
    const [openDraft, setOpenDraft] = useState('')
    return(
        <div className='draft-content'>
            <div className="draft">
                <div className="title">Unconventional Travel Hacks</div>
                <p className="draft-date">{`${23} ${'Mar'}, ${2024}`}</p>
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

