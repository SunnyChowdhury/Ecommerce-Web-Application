import React from 'react'
import { AiFillFacebook, AiOutlineInstagram, AiFillYoutube, AiFillTwitterCircle, BsTiktok} from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p> Copyright © 2023 Orange Computers Inc. All rights reserverd.</p>
      <p className='icons'>
        <AiFillFacebook />
        <AiOutlineInstagram />
        <AiFillYoutube />
        <AiFillTwitterCircle />
        <FaTiktok size={28}/>
      </p>
    </div>
  )
}

export default Footer