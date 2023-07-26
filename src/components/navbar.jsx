// Navbar.js
import React, { useState, useEffect, useRef } from 'react';
import { Menu, Button, Space } from 'antd';

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi"

import "rc-drawer/assets/index.css";
import Drawer from 'rc-drawer';
import { IoClose } from "react-icons/io5";
import { useWindowSize } from 'react-use';
import DrawerItem from './drawerItem';
const Navbar = () => {
  const{SubMenu}=Menu
  const [openSidebar, setOpenSidebar] = useState(false)
  const drawerRef = useRef(null);
  const { width } = useWindowSize();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleOutsideClick = (e) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      setOpenSidebar(false);
    }
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

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  ;
  return (
    <>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left side: Logo */}
        <div style={{ flex: '0 1 150px', display: 'flex', alignItems: 'center' }}>
          {width > 1023 ?
            <img
              src="https://www.geelyksa.com/wp-content/uploads/2023/05/geely-new-logo-black-up.png"
              alt="Logo"
              style={{ height: '32px', marginRight: '16px' }}
            />
            :

            <img
              src=" https://www.geelyksa.com/wp-content/uploads/2023/04/logo-icon-black.png"
              alt="Logo"
              style={{ height: '20px', marginLeft: '4px', padding: '2px' }}
            />
          }

          {/* Replace 'path-to-your-logo.png' with the actual path to your logo image */}
        </div>

        {/* Center: Navigation items */}
        {screenWidth > 1023 &&
          <Menu theme="white" mode="horizontal" defaultSelectedKeys={['1']} style={{ flex: '1', justifyContent: 'center' }}>
            {/* <Menu.Item key="1" className='font-bold '>About Geely</Menu.Item> */}
            <SubMenu key="sub1" title="About Geely" style={{fontFamily: 'Ubuntu, sans-serif'}} className='font-bold'  popupClassName='custom-submenu'  /* popupOffset={[3, 2]} */>
           {/* Submenu items */}
           <Menu.Item key="1-1 hover:bg-gray-200">Our Vision</Menu.Item>
           <Menu.Item key="1-2">Our History</Menu.Item>
           <Menu.Item key="1-3">Corporate Social Responsibility</Menu.Item>
           <Menu.Item key="1-4">Geely Events</Menu.Item>
           {/* Add more submenu items as needed */}
         </SubMenu>
            <Menu.Item key="2" className='font-bold '  style={{fontFamily: 'Ubuntu, sans-serif'}}>Vehicles</Menu.Item>
            {/* <Menu.Item key="3" className='font-bold '>Innovation</Menu.Item> */}
            <SubMenu key="sub2" title="Innovation" className='font-bold'  style={{fontFamily: 'Ubuntu, sans-serif'}}  popupClassName='custom-submenu'  /* popupOffset={[3, 2]} */>
           {/* Submenu items */}
           <Menu.Item key="3-1 hover:bg-gray-200">Design Philosophy</Menu.Item>
           <Menu.Item key="3-2">Research & Development </Menu.Item>
       
           {/* Add more submenu items as needed */}
         </SubMenu>
            <Menu.Item key="4" className='font-bold '  style={{fontFamily: 'Ubuntu, sans-serif'}}>Offers</Menu.Item>
            {/* <Menu.Item key="5" className='font-bold '>Service</Menu.Item> */}
            <SubMenu key="sub3" title="Service" className='font-bold'  style={{fontFamily: 'Ubuntu, sans-serif'}}  popupClassName='custom-submenu'  /* popupOffset={[3, 2]} */>
           {/* Submenu items */}
           <Menu.Item key="5-1 hover:bg-gray-200">Service Network</Menu.Item>
           <Menu.Item key="5-2">Service Booking</Menu.Item>
           <Menu.Item key="5-3">Service Warranty</Menu.Item>
           <Menu.Item key="5-4">Road Side Assistance</Menu.Item>
           <Menu.Item key="5-5">Customer Care</Menu.Item>
           {/* Add more submenu items as needed */}
         </SubMenu>
            {/* <Menu.Item key="6" className='font-bold '>Media Center</Menu.Item> */}
            <SubMenu key="sub4" title="Media Center" className='font-bold'  style={{fontFamily: 'Ubuntu, sans-serif'}}  popupClassName='custom-submenu'  /* popupOffset={[3, 2]} */>
           {/* Submenu items */}
           <Menu.Item key="6-1 hover:bg-gray-200">Multimedia</Menu.Item>
           <Menu.Item key="6-2">News Center</Menu.Item>
       
           {/* Add more submenu items as needed */}
         </SubMenu>
            <Menu.Item key="7" className='font-bold' style={{ color: "#06398f",fontFamily: 'Ubuntu, sans-serif' }}>Buy Now</Menu.Item>
          </Menu>
        }
        {/* Right side: Search and Menu icons */}
        <div className='flex lg:justify-between xl:justify-between justify-end mx-3 py-1' style={{ flex: '0 1 200px', display: 'flex', alignItems: 'center' }}>
          <div className='mx-1'><a href="https://www.geelyksa.com/request-test-drive/?lang=ar">العربية</a></div>
          <div className='mx-1'><TfiLocationPin size={25} fontSize={"bold"} color='#333366' /></div>
          <div className='mx-1'><BsSearch size={25} color='#333366' style={{ fontSize: '50px' }} /></div>
          <div className='mx-1'> <HiOutlineMenuAlt2 onClick={() => setOpenSidebar(!openSidebar)} size={30} color='#333366' /></div>

        </div>
      </div>
      {openSidebar &&
        <Drawer
          // placement={dir === "rtl" ? "right" : "left"}
          open={openSidebar}
          onClose={() => { setOpenSidebar(false) }}
          handler={false}
          showMask={true}
          level={null}
          getContainer={() => drawerRef.current}
        // contentWrapperStyle={contentWrapperCSS}
        >
          <div className="flex flex-col   w-full h-full">
            <div className='flex justify-between px-5 py-2.5 border-b border-black'>
              <h2 class="title font-medium text-xl ">Geely</h2>
              <button
                className=""
                onClick={() => setOpenSidebar(false)}
                aria-label="close"
              >
                <IoClose style={{ marginTop: '2px', color: 'black' }} />
              </button>
            </div>
            <DrawerItem/>



          </div>
        </Drawer>
      }
    </>

  );
};

export default Navbar;
