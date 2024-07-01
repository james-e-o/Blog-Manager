import React, { useContext, useState } from 'react'
import "./my-profile.css"
import UserImg from "../feed/gemini-profile.jpeg"
import { screenWidth } from '../../app/App'

const MyProfile = () => {
    const [editProfile, setEditProfile] = useState(false)
    const screen = useContext(screenWidth)
  return (
    <> 
{
        //  MOBILE
        screen<480?(
          <div className='m-my-profile'>
             {!editProfile?
                <div className='non-edit'>
                    <div className="profile-image-wrap">
                        <figure>
                            <img src={UserImg} width={'100%'} height={'100%'} />
                        </figure>
                    </div>
                    <p className="my-name">Jason Statham</p>
                    <p className="profile-options">
                        <button className="edit-profile">Edit profile</button>
                        <button className="subscriptions">View following</button>
                    </p>
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
            
          </div>
          )
          // TABLET
          :screen<720?(
          <div className='t-my-profile'>
            
          </div>
          ):
          //DESKTOP 
          (
          <div className='d-my-profile'>
           
          </div>
           
          )}
   
    </>
    
  )
}

export default MyProfile

