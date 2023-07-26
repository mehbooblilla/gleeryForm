import React, { useEffect, useState } from 'react'

import ReCAPTCHA from 'react-google-recaptcha';
const ContactForm = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
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

    const handleRecaptchaChange = (value) => {

        console.log('reCAPTCHA value:', value);
    };


    return (
        <>
            <form action="" onSubmit={''} className='pl-5 md:pr-14 lg:pr-14 xl:pr-14 pr-5 pt-10'>
                <div>
                    <div>
                        <label htmlFor="" className='pb-2.5'>Title  <span style={{ color: '#24519D', fontSize: '15px' }}>*</span> </label>
                        <div className='pb-[30px] mt-2.5 w-full flex'>
                            <div className='flex items-center'>
                                <input type="radio" name="title" className='mr-2.5 w-5 h-5'
                                    style={{
                                        accentColor: "#000000",
                                        cursor: "pointer",
                                    }} />
                                <label htmlFor="" className='mr-2.5'>Mr.</label>
                            </div>
                            <div className='flex items-center'>
                                <input type="radio" name="title" className='mr-2.5 w-5 h-5'
                                    style={{
                                        accentColor: "#000000",
                                        cursor: "pointer",
                                    }} />
                                <label htmlFor="" className='mr-2.5'>Mrs.</label>
                            </div>
                            <div className='flex items-center'>
                            <input type="radio" name="title" required className='mr-2.5 w-5 h-5'
                                style={{
                                    accentColor: "#000000",
                                    cursor: "pointer",
                                }} />
                            <label htmlFor="">Miss.</label>
                            </div>
                        </div>
                    </div>
                    <div className='pb-[30px] flex flex-col'>
                        <label htmlFor="">Name <span style={{ color: '#24519D', fontSize: '15px', height: '50px' }}>*</span></label>

                        <input type="text" name='name' required className='py-[15px] px-4 focus:border-none outline-none'
                            style={{ backgroundColor: "#eae9e8", fontSize: '15px', height: '50px', fontFamily: "arial", border: "1px solid #e4e6e7", borderRadius: '4px' }}
                        />

                    </div>
                    <div className={`pb-[30px] ${screenWidth < 768 ? 'flex flex-col' : 'flex  justify-between'

                        }`}>
                        <div className='flex flex-col' style={{ width: screenWidth < 768 ? '100%' : '48%', marginBottom: screenWidth < 768 ? '30px' : '', }}>
                            <label htmlFor="">Email </label>
                            <input type="text" name='email' className='py-[15px] px-4 focus:border-none outline-none'
                                style={{ backgroundColor: "#eae9e8", fontSize: '15px', height: '50px', fontFamily: "arial", border: "1px solid #e4e6e7", borderRadius: '4px' }}
                            />
                        </div>
                        <div className='flex flex-col' style={{ width: screenWidth < 768 ? '100%' : '48%' }}>
                            <label htmlFor="">Mobile Number <span style={{ color: '#24519D', fontSize: '15px', height: '50px' }}>*</span></label>
                            <input type="text" name='tel' required className='py-[15px] px-4 focus:border-none outline-none'
                                style={{ backgroundColor: "#eae9e8", fontSize: '15px', height: '50px', fontFamily: "arial", border: "1px solid #e4e6e7", borderRadius: '4px' }}
                            />
                        </div>

                    </div>
                    <div className='pb-[30px] flex flex-col relative'>
                        <label htmlFor="">Select your location <span style={{ color: '#24519D', fontSize: '15px', height: '50px' }}>*</span></label>
                        <select type="select" name='dropdown' required className='py-[15px] px-5 focus:border-none outline-none appearance-none'
                            style={{
                                backgroundColor: "#eae9e8", fontSize: '15px', height: '50px', fontFamily: "arial", border: "1px solid #e4e6e7", borderRadius: '4px',
                            }}

                        >
                            <option value="option1" className="text-black">Select</option>
                            <option value="option1" className="text-black">Geely Wallan Riyadh 3638 Kharis Branch Rd, Ar Rawdah, Riyadh</option>
                            <option value="option2" className="text-black">Geely Wallan Taif 7F56+X5 Wallan Trading Geely, 7531 King Khalid Rd, Alnaseem, Taif 26518 </option>
                            <option value="option3" className="text-black"> Geely Wallan Dammam 6915 King Fahd Road, Al Rakah Al Janubiyah, Al Khobar</option>
                            <option value="option1" className="text-black"> Geely Wallan Jeddah 6417, Madinah Road. Al Bawadi</option>
                        </select>
                        <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">

                            <svg className="w-4 h-5 fill-current " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={{ color: '#75899C' }}><path d="M9.293 13.95a1 1 0 0 1-1.414 0l-5-5A1 1 0 1 1 4.707 7.364L9 11.657l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5z" /></svg>
                        </div>

                    </div>
                    <div className="flex pb-[30px]">
                        <input type="checkbox" required className='w-5 h-5 mr-2.5 cursor-pointer' style={{ color: '#f1f3f4', border: '1px solid #d1d9df', accentColor: "#000000", }} />
                        <span>I have read and accept  <span style={{ color: '#24519D', fontSize: '15px', height: '50px', cursor: 'pointer' }}>* (Terms & Conditions)</span></span>
                    </div>
                    <div className='pb-[30px]'>
                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={handleRecaptchaChange}
                        />
                    </div>
                    <div className='pb-[30px]'>
                        <button type='submit' className='bg-black h-12 w-40 text-white py-2.5 px-4 tracking-wide'
                            style={{ fontSize: '16px', fontWeight: '500', borderRadius: '3px' }}>
                            SUBMIT
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}
export default ContactForm