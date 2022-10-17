import React from 'react'
import {BsGithub} from 'react-icons/bs'
import {TbBrandGmail} from 'react-icons/tb'
import {FaFacebookF} from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a href='https://github.com/HoangHa1201'>
                <BsGithub />
                
            </a >

            <a href='https://www.facebook.com/profile.php?id=100029802365576'>
                <FaFacebookF />
            </a >
            
            <a href='nha0949857534@gmai.com'>
                <TbBrandGmail />
            </a >
            
        </div>
    )
}

export default SocialMedia