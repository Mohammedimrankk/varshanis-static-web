import React from 'react'
import './Footer.css'
import { IoLocationSharp } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import { FaRegCopyright } from "react-icons/fa6";
//import { FaHome, FaHeart } from 'react-icons/fa';

const Footer=()=>{
    return (
        <div>
            <hr/>
            <div className='footerBody'>
            <div className='phoneContainer'><BsTelephoneFill id="phoneIcon"/> +91-7972080620</div>        
            <div className='emailContainer'><BsEnvelope id="emailIcon"/> Mohammedimrankk@gmail.com</div>
            <div className='locationContainer'><IoLocationSharp id="locationIcon" /> Plot No. 4578,  Nanded, phase 2, Sector 12, Maharashtra, India.</div>
            <div className='copyrightContainer'><p>Copyright <FaRegCopyright /> 2000-2024 Vashanis Sms Namkeen</p></div>
            </div>
        </div>
    );
}
export default Footer