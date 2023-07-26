import React, { useState, useEffect } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RiArrowDropUpLine } from 'react-icons/ri';
const DrawerItem = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isOpen, setOpen] = useState(false);
    const [section, setSection] = useState();

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
    const items = [
        {
            title: 'About Geely',
            content: ['Our Vision', 'Our History', 'Corporate Social Responsibility', 'Geely Events'],
        },
        {
            title: 'Vehicles',
            content: [],
        },

        {
            title: 'Innovation',
            content: ['Design Philosophy', 'Research & Development '],
        },
        {
            title: 'Offers',
            content: [],
        },
        {
            title: 'Service',
            content: ['Service Network', 'Service Booking', 'Service Warranty', 'Road Side Assistance ', 'Customer Care'],
        },
        {
            title: 'Media Center',
            content: ['Multimedia ', 'News Center'],
        },
        {
            title: 'Buy Now',
            content: [],
        },

    ];
    const handleFAQ = (e) => {
        if(items[e].content.length!==0){
            setSection(e);
            setOpen(!isOpen);
        }
       
    };
    let expandIcon;
    if (Array.isArray(items) && items.length) {
        expandIcon = !isOpen ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />;

    }
        return (
            <div>
                {screenWidth>1023 ?
                   <div className='flex flex-col  py-7 px-10'>
                   <div className='flex text-xl font-bold mb-5'>
                       <h1>SHOPPING TOOLS</h1>
                   </div>
                   <div className='flex  mb-5 cursor-pointer'>
                       <img src="https://www.geelyksa.com/wp-content/uploads/2021/11/soffers.png" alt="" />
                       <p className='ml-2 text-sm'>Special Offers</p>
                   </div>
                   <div className='flex r mb-5  cursor-pointer'>
                       <img src="https://www.geelyksa.com/wp-content/uploads/2021/11/imageandvideos.png" alt="" />
                       <p className='ml-2 text-sm'>Image and Videos</p>
                   </div>

                   <div className='flex  mb-5  cursor-pointer'>
                       <img src="	https://www.geelyksa.com/wp-content/uploads/2021/11/testadrive.png" alt="" />
                       <p className='ml-2 text-sm'>Request a Test Drive</p>
                   </div>
                   <div className='flex  mb-5  cursor-pointer'>
                       <img src="https://www.geelyksa.com/wp-content/uploads/2021/11/requestaqoute.png" alt="" />
                       <p className='ml-2 text-sm'>Request a Quote</p>
                   </div>
                   <div className='flex  mb-5  cursor-pointer'>
                       <img src="https://www.geelyksa.com/wp-content/uploads/2021/11/contactus.png" alt="" />
                       <p className='ml-2 text-sm'>Contact Us</p>
                   </div>
               </div>
                :
                <div className='flex flex-col  py-7 '>
                <div>
                    {items.map((item, index) => (
                        <>
                            <div className="my-2 ">
                                <button
                                    className="flex w-full px-10 items-center rounded-t text-base outline-none text-start  focus:ring-0"
                                    onClick={() => {
                                        handleFAQ(index);
                                    }}
                                    // style={{ borderColor: '#DFDFDF' }}
                                >
                                    <p className="flex-1  cursor-pointer "
                                     style={{color:  item.title==='Buy Now' && "#06398f" }}>
                                        {item.title}
                                    </p>
                                    {item.content.length!==0 &&
                                    <span style={{fontSize:'30px'}}>{expandIcon}</span>
}
                                </button>

                                {isOpen && section === index && (
                                    <div className="rounded-b  p-2 ">
                                        {item.content.map((cont, index) => (
                                            <section className='px-7 py-2.5' style={{backgroundColor:'#EAE9E8'}}>
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
            </div>
                }
             

             

                <div className='flex flex-col  py-7 px-10' style={{ backgroundColor: '#EAE9E8' }}>
                    <div className='flex text-xl font-bold mb-5'>
                        <h1>CUSTOMER CARE</h1>
                    </div>
                    <div className='flex  mb-5  cursor-pointer'>
                        <img src="https://www.geelyksa.com/wp-content/uploads/2021/11/roadservice.png" alt="" />
                        <p className='ml-2 text-sm'>Road Service</p>
                    </div>
                    <div className='flex  mb-5  cursor-pointer'>
                        <img src="https://www.geelyksa.com/wp-content/uploads/2021/11/network.png" alt="" />
                        <p className='ml-2 text-sm'>Network</p>
                    </div>
                    <div className='flex  mb-5  cursor-pointer'>
                        <img src="https://www.geelyksa.com/wp-content/uploads/2021/11/servicebooking.png" alt="" />
                        <p className='ml-2 text-sm'>Service Booking</p>
                    </div>

                </div>
                <div className='flex flex-col  py-7 px-10'>
                    <div className='flex text-xl justify-center font-bold mb-5'>
                        <img className='mr-4  cursor-pointer' src="https://www.geelyksa.com/wp-content/uploads/2023/04/side_bar_fb-bl.png" alt="" />
                        <img className='mr-4  cursor-pointer' src="https://www.geelyksa.com/wp-content/uploads/2023/04/side_bar_twitter.png" alt="" />
                        <img className='mr-4  cursor-pointer' src="https://www.geelyksa.com/wp-content/uploads/2023/04/side_bar_insta.png" alt="" />
                        <img className='mr-4  cursor-pointer' src="https://www.geelyksa.com/wp-content/uploads/2023/04/side_bar_youtube_b.png" alt="" />
                    </div>
                    <div className='flex justify-center'>
                        <span className='text-sm'>© Copyright 2023 Geely All rights reserved.</span>
                    </div>

                </div>
            </div>
        )
    }
    export default DrawerItem