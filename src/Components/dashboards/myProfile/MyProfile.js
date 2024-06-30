import React, { useState } from 'react'
import "./my-profile.css"

const MyProfile = () => {
    const [editProfile, setEditProfile] = useState(false)
  return (
    <>
        {!editProfile?
            <div>
                <figure>
                    <img src="" alt="" />
                </figure>
                <p className="my-name">Jason Statham</p>
                <p className="edit-profile">Edit profile</p>
            </div>
            :
            <div>
                <figure>
                    <img src="" alt="" />
                </figure>
                <p className="my-name">Jason Statham</p>
                <p className="edit-profile">Edit profile</p>
            </div>
        }
    </>
    
  )
}

export default MyProfile