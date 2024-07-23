import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { useAuth } from '../contexts/AuthContext';

// Navbutton dynamic components to show  the chat cart profile button 
const NavButton = ({ title, customfun, icon, color, dotColor }) => (
    <TooltipComponent content={title} position='BottomCenter'>
        <button type='button' onClick={customfun} style={{ color }} className='relative text-xl rounded-full p-3 hover:bg-light-gray'><span style={{ background: dotColor }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />{icon}</button>
    </TooltipComponent>
)

// main components Navbar 
const Navbar = () => {

    // context calling 
    const { activeMenu, setActiveMenu, isClicked, setisClicked, handleClick, screenSize, setScreenSize, currentColor, user, setuser } = useStateContext();
    const { userData } = useAuth()
    // useEffect calling for calculating the size  of the window 
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])

    // return statement 
    return (
        <div className='flex justify-between p-2 md:mx-6 relative'>
            <NavButton title='Menu' customfun={() => setActiveMenu((preActiveMenu) => !preActiveMenu)} color={currentColor} icon={<AiOutlineMenu />} />

            <div className='flex'>
                <NavButton
                    title='Cart'
                    customfun={() => setisClicked({ cart: !isClicked.cart })} color={currentColor}
                    icon={<FiShoppingCart />} />
                <NavButton
                    title='Chat'
                    dotColor="#03C9D7"
                    customfun={() => { setisClicked({ chat: !isClicked.chat }) }} color={currentColor}
                    icon={<BsChatLeft />} />
                <NavButton
                    title='Notification'
                    dotColor="#03C9D7"
                    customfun={() => { setisClicked({ notification: !isClicked.notification }) }} color={currentColor}
                    icon={<RiNotification3Line />} />
                <TooltipComponent content="Profile" position='BottomCenter'>
                    <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => { setisClicked({ UserProfile: !isClicked.UserProfile }) }}>
                        <img src={avatar} className='rounded-full w-8 h-8' />
                        <p>
                            <span className='text-gray-400 text-14'>Hi,</span> {' '}
                            <span className='text-gray-400 font-bold ml-1 text-14'>{userData.name}</span>
                        </p>
                        <MdKeyboardArrowDown className='text-gray-400 text-14' />
                    </div>
                </TooltipComponent>
                {isClicked.cart && <Cart />}
                {isClicked.chat && <Chat />}
                {isClicked.notification && <Notification />}
                {/* {console.log(isClicked.userProfile)} */}
                {isClicked.UserProfile && <UserProfile />}
            </div >
        </div >
    )
}

export default Navbar