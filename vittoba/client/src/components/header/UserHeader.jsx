import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

// icons
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { IoCallOutline } from "react-icons/io5"
import { RxHamburgerMenu } from 'react-icons/rx'

import facebook from "../../images/logos/facebook.png"
import linkedln from "../../images/logos/linkedin.png"
import whatsapp from "../../images/logos/whatsapp.png"
import instagram from "../../images/logos/instagram.png"
import twitter from "../../images/logos/twitter.png"

import vlogo from "../../images/vittologo.png"
import { Button, Drawer } from 'antd';
import { GiHamburgerMenu } from "react-icons/gi"


const UserHeader = () => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <header className='   items-center'>
                <div className={`top-head lg:h-9 text-black  pt-4 pb-4 lg:flex hidden`}>
                    <div className='flex w-3/12 justify-start items-center pl-8'>
                        <ul className='flex items-center'>
                            <li className=' flex items-center'><a href="https://www.facebook.com/vittoballc/" target="_blank" rel="noopener noreferrer"><img src={facebook}  color="darkblue" className='mx-2 w-[24px]'/></a></li>
                            <li className=' flex items-center'><a href="https://www.instagram.com/vittoballc/" target="_blank" rel="noopener noreferrer"><img src={instagram} color="darkblue" className='mx-2 w-[24px]'/></a></li>
                            <li className='flex items-center'><img src={linkedln} color="darkblue" className='mx-2 w-[24px]'/></li>
                            <li className=' flex items-center'><a href="https://twitter.com/VITTOBALLC" target="_blank" rel="noopener noreferrer"><img src={twitter}  color="darkblue" className='mx-2 w-[24px]'/></a></li>
                        </ul> 
                    </div>
                    <div className='w-9/12 flex justify-end items-center pr-8'>
                        <ul className='flex items-center'>
                            <li className='flex items-center mr-4'>{<AiOutlineClockCircle className='text-[20px] text-[#262161]' />} <p className='font-semibold font-[Josefin_Sans, sans-serif] text-[13px] pl-1 mt-[-1px]'>Open Hours : </p> <p className='text-[13px]'>Mon-Sat: 9am - 9pm</p></li>
                            <li className='flex items-center mr-4'>{<HiOutlineMail className='text-[20px] text-[#262161]' />} <p className='font-semibold font-[Josefin_Sans, sans-serif] text-[13px] pl-1 mt-[-1px]'>Email : </p> <p className='text-[13px]'> sales@vittoballc.com</p></li>
                            <li className='flex items-center mr-4'>{<IoCallOutline className='text-[20px] text-[#262161]' />} <p className='font-semibold font-[Josefin_Sans, sans-serif] text-[13px] pl-1 mt-[-1px]'>Call Now : </p> <p className='text-[13px]'> +971 50 454 0704 </p></li>
                            <li className='mr-1 flex items-center'> <a href='https://wa.me/+971504540704' target="_blank" rel="noopener noreferrer"><img src={whatsapp} color="darkblue" className='mx-2 w-[26px]'/></a></li>
                        </ul>   
                    </div>
                </div>
                <hr />
                <div className='lg:h-16 flex justify-between items-center pt-2 pb-2 w-full h-[50px] md:h-[65px] lg:h-auto'>
                    <div className='md:w-3/12 ml-2 sm:ml-4 lg:ml-12 w-60'>
                    <Link to ="/" >
                        <img className='lg:w-72 vitto-logo-head ' src={vlogo} alt='Vitto Logo' />
                        </Link>
                    </div>
                    <div className='mx-4  '>

                    <Button onClick={showDrawer} className='block lg:hidden  order-3'><GiHamburgerMenu /></Button>
                <Drawer className='' title="Menu" placement="right" onClose={onClose} open={open}>
                    <div className=''>
                        <div className=' ' >
                            {
                                    [{name:"Home",route:"/"},{name:"About",route:"/about"},{name:"Product",route:"/product"},{name:"Location",route:"/location"},{name:"Blog",route:"/blog"}]?.map((single, index) => {
                                    return (
                                        <div key={index} className=' mb-4 border-b pb-1 '>
                                            <button onClick={() =>setOpen(false)} className=''><Link to={`${single.route}`}><h1 className='  text-[20px]  font-normal'>{single.name}</h1></Link></button>
                                        </div>

                                    )
                                })
                            }
                        </div>
                        
                    </div>
                </Drawer>
                          
                    <div className={`lg:items-center  absolute top-[50px] md:top-[65px] w-full lg:relative lg:top-0 lg:w-9/12 justify-center hidden lg:flex `}>

                        <ul className={`bg-black text-lg lg:justify-end lg:bg-white lg:text-black w-full text-white flex lg:flex-row absolute flex-col items-center  z-50 `}>
                            <li className='mr-2 p-4 hover:font-medium' ><Link to="/" >Home</Link></li>
                            <li className='mr-2 p-4 hover:font-medium' ><Link to="/about" >About</Link></li>
                            <li className='mr-2 p-4 hover:font-medium' ><Link to="/product" >Product</Link></li>
                            <li className='mr-2 p-4 hover:font-medium' ><Link to="/location" >Location</Link></li>
                            <li className='mr-2 p-4 hover:font-medium' ><Link to="/blog" >Blog</Link></li>
                        </ul>
                    </div>
                    </div>

                </div>
            </header>
        </>
    );
}

export default UserHeader