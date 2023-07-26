import React, { useState, useRef, useEffect } from 'react'
import { useWindowSize } from 'react-use';


import ContactForm from './contactForm';
import Carousel from '../Carouser';
import { SwiperSlide } from 'swiper/react';

const GeelyForm = () => {
    const { width } = useWindowSize();
    const [isSodan, setIsSodan] = useState(true)
    const [isSuv, setIsSuv] = useState(true)
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [finalArray, setFinalArray] = useState([])

    const HoverableListItem = ({ imageSrc, altText, hoverText }) => {
        const handleMouseEnter = (event) => {
          event.target.querySelector('.hover-text-container').style.transform = 'translateX(0)';
        };
      
        const handleMouseLeave = (event) => {
          event.target.querySelector('.hover-text-container').style.transform = 'translateX(100%)';
        };
      
        return (
          <li
            className="py-2 mb-1 bg-white flex justify-center rounded list-item relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={imageSrc} alt={altText} />
            <div
              className="hover-text-container absolute top-0 left-full w-48 p-2 bg-gray-100 border border-gray-300 rounded transition-transform ease-in-out"
              style={{ transform: 'translateX(100%)' }}
            >
              {hoverText}
            </div>
          </li>
        );
      };
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

    const handleSedan = () => {
        if (isSuv && isSodan) {
            setIsSodan(false)
        } else {
            setIsSodan(true)
        }
    }
    const handleSuv = () => {
        if (isSuv && isSodan) {
            setIsSuv(false)
        } else {
            setIsSuv(true)
        }
    }
    const sodanArray = [
        {
            name: 'Emgrand',
            image: 'https://buy.geelyksa.com//media/catalog/category/Emgrand.png',
            category: ''

        },
    ]

    const suvArray = [

        {
            name: 'The New Coolray',
            image: 'https://buy.geelyksa.com//media/catalog/category/605x364_Coolray-FL.png',

        },
        {
            name: 'Azkarra',
            image: 'https://buy.geelyksa.com//media/catalog/category/Azkarra-anglepng_1.png'

        },
        {
            name: 'Okavango',
            image: 'https://buy.geelyksa.com//media/catalog/category/OKAVANGO_feature_1.png'

        },
        {
            name: 'Monjaro',
            image: 'https://buy.geelyksa.com//media/catalog/category/787_584_-_Monjaro.png'

        },
        {
            name: 'Tugella Facelift',
            image: 'https://buy.geelyksa.com//media/catalog/category/605x364.png'

        },
    ]
    useEffect(() => {
        if (isSodan && isSuv) {
            setFinalArray(sodanArray.concat(suvArray))
        } else if (isSodan) {
            setFinalArray(sodanArray)
        } else if (isSuv) {
            setFinalArray(suvArray)
        }

    }, [isSodan, isSuv])
    console.log(screenWidth, "width---");
    return (
        <>
            <div className=''>
                <div style={{ height: screenWidth > 767 ? '450px' : '400px', position: 'relative' }}>
                    <div className='w-full h-full'
                        style={{
                            backgroundImage: `url(${'https://www.geelyksa.com/wp-content/uploads/2023/04/request-a-test-drive-banner-bg_image.jpg'})`, backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}>
                        <div className='gray-overlay h-full'>
                            <div className='flex flex-col text-black absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                <h1 className='lg:text-4xl xl:text-4xl text-medium font-semibold flex justify-center pb-5'>REQUEST A TEST DRIVE</h1>
                                {screenWidth > 1023 &&
                                    <p className='text-lg pb-5'>Choose the best Geely car at your convenient time and location.</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center pb-16' style={{ marginTop: '-250px', position: 'relative' }}>

                    <div className="grid h-full  grid-cols-12  grid-flow-col" style={{ width: "90%", boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2)', borderRadius: "4px" }}>
                        <div className="col-span-2 ... "
                            style={{
                                backgroundColor: "#EAE9E8",
                                borderTopLeftRadius: '4px',
                                borderBottomLeftRadius: '4px',
                                display: screenWidth < 768 ? 'none' : '', // Add a closing curly brace and fix the condition
                            }}
                        >

                            <div className='h-full flex justify-center items-center'>
                                <img decoding="async" width="68" height="795" src="https://www.geelyksa.com/wp-content/uploads/2021/12/RTD_image.png" alt="" loading="lazy" />
                            </div>
                        </div>
                        <div className='md:col-span-10 lg:col-span-10 xl:col-span-10 col-span-12 h-full ' style={{ borderTopRightRadius: '4px', borderBottomRightRadius: "4px" }}>
                            <div>
                                <div class=" h-[150px]" style={{ backgroundColor: "#FFFFFF", borderTopRightRadius: '4px' }}>
                                    <div className='flex py-[30px]'>
                                        <div className=' h-24 flex flex-col justify-center items-center' style={{
                                            transform: " rotate(-90deg)", width: '18%',
                                            display: screenWidth < 768 ? 'none' : ''
                                        }}>
                                            {/*  transform:" rotate(-90deg)", */}
                                            <span class="step" style={{ fontSize: '44px', color: '#d0d0d0' }}><b>Step</b></span>
                                            <span class="step_count" style={{ transform: 'rotate(90deg)', fontSize: '65px', color: '#d0d0d0', marginTop: '-30px' }}><b>1</b></span>

                                        </div>
                                        <div className='col-span-10 flex justify-center' style={{ width: screenWidth < 768 ? '100%' : '82%' }}>
                                            <div>
                                                <h1 className='flex justify-center'> Choose Your Car</h1>
                                                <div className='pt-5'>
                                                    <div className='cat-tab'>
                                                        <div data-tab-name="SEDAN" data-tab="7" className="flex justify-center py-1.5 cursor-pointer px-2.5 cat_tab_btn cat_tab_btn_7 cat_tab_active"
                                                            style={{
                                                                color: isSodan ? '#F6F6F6' : 'black',
                                                                backgroundColor: isSodan ? 'black' : '#F6F6F6',
                                                                borderRadius: '20px',
                                                                width: '50%'
                                                            }}
                                                            onClick={handleSedan}

                                                        >
                                                            <div className='mr-1 w-5 h-5 flex items-center' >
                                                                {isSodan &&
                                                                    <img decoding="async" src="https://www.geelyksa.com/wp-content/uploads/2021/12/active_car_tab_icon.png" alt="" />
                                                                }
                                                            </div>
                                                            <div>
                                                                SEDAN
                                                            </div>

                                                        </div>
                                                        <div data-tab-name="SUV" data-tab="7" className="flex justify-center py-1.5 cursor-pointer px-2.5 cat_tab_btn cat_tab_btn_7 cat_tab_active"
                                                            style={{
                                                                color: isSuv ? '#F6F6F6' : 'black',
                                                                backgroundColor: isSuv ? 'black' : '#F6F6F6',
                                                                borderRadius: '20px',
                                                                width: '50%'
                                                            }}
                                                            onClick={handleSuv}

                                                        >
                                                            <div className='mr-1 w-5 h-5 flex items-center' >
                                                                {isSuv &&
                                                                    <img decoding="async" src="https://www.geelyksa.com/wp-content/uploads/2021/12/active_car_tab_icon.png" alt="" />
                                                                }
                                                            </div>
                                                            <div>
                                                                SUV
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row-span-2  h-[335px] py-[30px]" style={{ backgroundColor: "#EAE9E8" }}>
                                    <div className='flex  justify-center'>
                                        <div className=' flex flex-col justify-center items-center'
                                            style={{ transform: " rotate(-90deg)", width: '18%', display: screenWidth < 768 ? 'none' : '' }}>
                                            {/*  transform:" rotate(-90deg)", */}
                                            <span class="step" style={{ fontSize: '44px', color: '#d0d0d0' }}><b>Step</b></span>
                                            <span class="step_count" style={{ transform: 'rotate(90deg)', fontSize: '65px', color: '#d0d0d0', marginTop: '-30px' }}><b>2</b></span>
                                        </div>
                                        <div className='col-span-10 flex flex-col justify-center' style={{ width: screenWidth> 1023? '82%':'100%' }}>
                                            <div className='flex justify-center py-2'>
                                                <h2 className='text-lg font-medium'>Select Model</h2>
                                            </div>

                                            <Carousel items={finalArray} />



                                        </div>
                                    </div>
                                </div>
                                <div class="row-span-2 col-span-10 ... h-full" style={{ backgroundColor: "#FFFFFF" }}>
                                    <div className='flex py-[30px] h-full'>
                                        <div className='flex flex-col h-auto justify-center items-center'
                                            style={{ transform: " rotate(-90deg)", width: '18%', display: screenWidth < 768 ? 'none' : '' }}>
                                            {/*  transform:" rotate(-90deg)", */}

                                            <span className="step " style={{ fontSize: '44px', color: '#d0d0d0' }}><b>Step</b></span>
                                            <span className="step_count " style={{ transform: 'rotate(90deg)', fontSize: '65px', color: '#d0d0d0', marginTop: '-30px' }}><b>3</b></span>

                                        </div>
                                        <div className='col-span-10 ' style={{ width: screenWidth < 768 ? '100%' : '82%', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px' }}>
                                            <div>
                                                <h2 className='flex justify-center' style={{ fontSize: '24px' }}> Contact Information</h2>
                                                <ContactForm />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >


                <div className="bottom-44 right-1 fixed w-12 ml-8 mb-10  z-10">
                    <ul>
                        <li className='py-2  mb-2 bg-white flex justify-center rounded cursor-pointer'>
                            <img
                                src="https://www.geelyksa.com/wp-content/uploads/2021/11/testadrive.png"
                                alt="drive"

                            />
                        </li>
                        <li className='py-2  mb-2 bg-white flex justify-center rounded cursor-pointer' >
                            <img
                                src="https://www.geelyksa.com/wp-content/uploads/2021/11/requestaqoute.png"
                                alt="aqoute"


                            />
                        </li>
                        <li className='py-2  mb-1 bg-white flex justify-center rounded cursor-pointer'>
                            <img
                                src="	https://www.geelyksa.com/wp-content/uploads/2021/11/contactus.png"
                                alt="contact"

                            />
                        </li>
                    </ul>

                </div>

            </div >
        </>
    )
}
export default GeelyForm