import React from 'react'
import './Header.css'
const Header=()=>{
    return (<div>
        <div className='headContainer'>
        

            <div className='imageContainer'><img className='imageLogo' src='./Assets/logo.svg'/></div>
            <div className='unOrderListContainer'>
                <ul className='unOrderList'>
                    <li className='listItem'>
                        <a className='_link' href='#'>Home</a>
                    </li>
                    <li className='listItem'>
                        <a className='_link' href='#'>Products</a>
                    </li>
                    <li className='listItem'>
                        <a className='_link' href='#'>About</a>
                    </li >
                    <li className='listItem'>
                        <a className='_link' href='#'>Contact</a>
                    </li>
                    <li className='listItem'>
                        <a className='_link' href='#'>Export Items</a>
                    </li>
                    <li className='listItem'>
                        <a className='_link' href='#'>Contributor Enquiry</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
        
    );
}
export default Header