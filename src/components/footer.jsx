import React, { useState, useEffect } from 'react'
import { TfiLocationPin } from "react-icons/tfi"
import { BsTelephone } from "react-icons/bs"
import { FaSquareFacebook } from "react-icons/fa6"
import { FaSquareTwitter } from "react-icons/fa6"
import { FaSquareInstagram } from "react-icons/fa6"
import { FaSquareYoutube } from "react-icons/fa6"
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RiArrowDropUpLine } from 'react-icons/ri';

const Footer = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isOpen, setOpen] = useState(false);
    const [section, setSection] = useState();
    const items = [
        {
            title: 'Geely Models',
            content: ['The new Coolray', 'Tugella', 'Okavango', 'Azkarra', 'Emgrand', 'Monjaro'],
        },

        {
            title: 'The new Coolray',
            content: ['Request a Quote', 'Apply for Financing', 'Special Offers', 'Research & Development', 'Road Side Assistance', 'Corporate Social Responsibility','Customer Care'],
        },
        {
            title: 'About Geely',
            content: ['About Geely', 'Contact U', 'About Wallan', 'Company Vision', 'Design Philosophy', 'Geely Events','Our History'],
        },
      
    ];
    useEffect(() => {
        // Function to update the state with the current screen width
        const updateScreenWidth = () => {
            setScreenWidth(window.screen.width);
        };

        // Add event listener to track screen width changes
        window.addEventListener('resize', updateScreenWidth);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', updateScreenWidth);
        };
    }, []);
    const handleFAQ = (e) => {
        setSection(e);
        setOpen(!isOpen);
    };
    let expandIcon;
    if (Array.isArray(items) && items.length) {
        expandIcon = !isOpen ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />;
    }
    console.log('>>>>>>>>>>>', screenWidth)
    return (
        <div className='w-full '>
            <div className='w-full  py-5 px-2.5 lg:h-[80px] xl:h-[80px] h-[150px]' style={{ backgroundColor: '#DFDFDF' }}>
                <div className='flex lg:flex-row xl:flex-row flex-col justify-center'>
                    <div className='flex justify-center items-center'>
                        <p className='flex justify-center lg:flex-row xl:flex-row flex-col lg:pb-0 xl:pb-0 pb-5 '>
                        Now you can buy your car online  <a className='flex justify-center underline ml-2' href=''> buy.geelyksa.com</a>
                        </p>
                    </div>
                    <div className='pl-10 flex justify-center'>
                        <button className='border px-[34px] py-[8px] rounded-[4px] hover:bg-black hover:text-white'
                            style={{ borderColor: 'black', fontSize: '16px', fontWeight: 400 }}>BUY NOW</button>
                    </div>
                </div>
            </div>
            {screenWidth>1023 &&
            <div className='w-full flex h-[101px] py-5 px-4 border-b-4' style={{ backgroundColor: '#EAE9E8', borderColor: '#DFDFDF' }}>
                <div className='w-1/2 flex '>
                    <div className='flex justify-center items-center pr-5'>
                        <TfiLocationPin size={25} fontSize={"bold"} color='#333366' />
                    </div>
                    <div className='flex justify-center items-center'>
                        Khurais Road, Al Rawdah, Riyadh 13211
                    </div>
                </div>
                <div className='w-1/2 flex justify-end'>
                    <div className='flex justify-center items-center'>
                        <div className='pr-5'>
                            <div className='flex justify-center items-center pr-5' style={{ border: '2px solid #b3b1b1', padding: '5px', borderRadius: '50%' }}><BsTelephone size={25} fontSize={"bold"} color='#333366' /></div>

                        </div>
                        <div>
                            (+966) 531500525
                        </div>
                    </div>
                    <div className='flex justify-center items-center ml-12'>
                        <button className='bg-black py-3 px-6 rounded-[4px] text-white cursor-pointer'>Request a Call</button>
                    </div>
                </div>
            </div>}
            <div className='flex px-5 py-8' style={{ backgroundColor: '#EAE9E8' }}>
                <div style={{ width: screenWidth > 1023 ? '40%' : "100%" }}>
                    <div className='flex '>
                        <div className='border-r-4 flex  items-center' style={{ borderColor: '#DFDFDF', width: '48%' }}>
                            <img className=' h-[32px]' src="https://www.geelyksa.com/wp-content/uploads/2023/04/cropped-new-logo-black.png" alt="" />
                        </div>
                        <div className=' flex justify-end items-center' style={{ width: '48%' }}>
                            <img className=' h-[45px]' src="https://www.geelyksa.com/wp-content/uploads/2021/12/footer_wallan.png" alt="" />
                        </div>
                    </div>
                    {screenWidth > 1023 &&
                        <div className='flex py-8 '>
                            <p>
                                Geely Auto Group is a leading automobile manufacturer based in Hangzhou, China and was founded in 1997 as a subsidiary of Zhejiang Geely Holding Group.
                                The group manages several leading brands including Geely Auto, Lynk & Co, Proton Cars, and Geometry.
                            </p>
                        </div>}
                        {screenWidth<1024 &&
                    <div>
                        {items.map((item, index) => (
                            <>
                                <div className="my-2 ">
                                    <button
                                        className="flex w-full items-center rounded-t border-b-4 p-2 text-base outline-none text-start  focus:ring-0"
                                        onClick={() => {
                                            handleFAQ(index);
                                        }}
                                        style={{borderColor:'#DFDFDF'}}
                                    >
                                        <p className="flex-1 ">
                                            {item.title}
                                        </p>
                                        <span className="">{expandIcon}</span>
                                    </button>

                                    {isOpen && section === index && (
                                        <div className="rounded-b  p-2 ">
                                            {item.content.map((cont,index) => (
                                                <section>
                                                    <ul>
                                                    <li>{cont}</li>
                                                    </ul>
                                                    
                                                </section>
                                            ))}

                                        </div>
                                    )}
                                </div>
                            </>
                        ))}
                    </div>
}
                </div>
                {screenWidth > 1023 &&
                    <div style={{ width: '60%' }}>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='col-span-1 '>
                                <div className='pl-[35px] mb-5'>
                                    <h3 style={{ fontSize: '16px', fontWeight: 400 }}>Models</h3>
                                </div>
                                <div className='pl-[35px]'>
                                    <ul>
                                        <li className='cursor-pointer'>The new Coolray</li>
                                        <li className='cursor-pointer'>Tugella</li>
                                        <li className='cursor-pointer'>Okavango</li>
                                        <li className='cursor-pointer'>Azkarra</li>
                                        <li className='cursor-pointer'>Emgrand</li>
                                        <li className='cursor-pointer'>Monjaro</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='col-span-1'>
                                <div className='pl-[35px] mb-5'>
                                    <h3 style={{ fontSize: '16px', fontWeight: 400 }}>Useful Links</h3>
                                </div>
                                <div className='pl-[35px]'>
                                    <ul>
                                        <li className='cursor-pointer'>Request a Quote</li>
                                        <li className='cursor-pointer'>Apply for Financing</li>
                                        <li className='cursor-pointer'>Special Offers</li>
                                        <li className='cursor-pointer'>Research & Development</li>
                                        <li className='cursor-pointer'>Road Side Assistance</li>
                                        <li className='cursor-pointer'>Corporate Social Responsibility</li>
                                        <li className='cursor-pointer'>Customer Care</li>

                                    </ul>
                                </div>
                            </div>

                            <div className='col-span-1'>
                                <div className='pl-[35px] mb-5'>
                                    <h3 style={{ fontSize: '16px', fontWeight: 400 }}>About Geely</h3>
                                </div>
                                <div className='pl-[35px]'>
                                    <ul>
                                        <li className='cursor-pointer'>About Geely</li>
                                        <li className='cursor-pointer'>Contact Us</li>
                                        <li className='cursor-pointer'>About Wallan</li>
                                        <li className='cursor-pointer'>Company Vision</li>
                                        <li className='cursor-pointer'>Design Philosophy</li>
                                        <li className='cursor-pointer'>Geely Events</li>
                                        <li className='cursor-pointer'>Our History</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className='w-full py-5 px-2.5 h-[80px]' style={{ backgroundColor: '#DFDFDF' }}>
                <div className='flex justify-center'>
                    <FaSquareFacebook size={40} fontSize={"bold"} color='#000000' style={{ marginLeft: '5px' }} />
                    <FaSquareTwitter size={40} fontSize={"bold"} color='#000000' style={{ marginLeft: '5px' }} />
                    <FaSquareInstagram size={40} fontSize={"bold"} color='#000000' style={{ marginLeft: '5px' }} />
                    <FaSquareYoutube size={40} fontSize={"bold"} color='#000000' style={{ marginLeft: '5px' }} />
                </div>
            </div>
            {screenWidth>1023 &&
            <div className='w-full flex justify-center items-center h-[101px] py-5 px-4 border-b-4' style={{ backgroundColor: '#EAE9E8', borderColor: '#DFDFDF' }}>

                <div className=''>

                    © Copyright 2023 Geely All rights reserved. Legal Statement  | Privacy Policy

                </div>
            </div>}
        </div>
    )
}
export default Footer