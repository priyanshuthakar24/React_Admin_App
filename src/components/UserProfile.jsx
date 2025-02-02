import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

import { Button } from '.';
import { userProfileData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import avatar from '../data/avatar.jpg';
import { useAuth } from '../contexts/AuthContext';

const UserProfile = () => {
    const { currentColor, setisClicked, isClicked } = useStateContext();
    const { logout, userData } = useAuth();
    const logoutpath = useNavigate();
    const handlelogout = () => {
        setisClicked(false);
        logout();

        return logoutpath('/auth/login');
    }
    return (
        <div className="nav-item absolute right-1 top-16 bg-white dark:bg-[#42464D] p-8 rounded-lg w-96">
            <div className="flex justify-between items-center">
                <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
                <Button
                    icon={<MdOutlineCancel />}
                    color={currentColor}
                    bgHoverColor="light-gray"
                    size="2xl"
                    borderRadius="50%"
                    cusfunc={() => { setisClicked({ UserProfile: !isClicked.UserProfile }) }}
                />
            </div>
            <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
                <img
                    className="rounded-full h-24 w-24"
                    src={avatar}
                    alt="user-profile"
                />
                <div>
                    <p className="font-semibold text-xl dark:text-gray-200">
                        {userData.name} </p>
                    <p className="text-gray-500 text-sm dark:text-gray-400">  {userData.role}   </p>
                    <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {userData.email} </p>
                </div>
            </div>
            <div>
                {userProfileData.map((item, index) => (
                    <div key={index} className="flex gap-5 border-b-1 border-color p-4 hover:bg-light-gray cursor-pointer  dark:hover:bg-[#42464D]">
                        <button
                            type="button"
                            style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                            className=" text-xl rounded-lg p-3 hover:bg-light-gray"
                        >
                            {item.icon}
                        </button>

                        <div>
                            <p className="font-semibold dark:text-gray-200 ">{item.title}</p>
                            <p className="text-gray-500 text-sm dark:text-gray-400"> {item.desc} </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-5">

                <Button
                    color="white"
                    bgColor={currentColor}
                    text="Logout"
                    borderRadius="10px"
                    width="full"
                    cusfunc={handlelogout}
                />
            </div>
        </div>

    );
};

export default UserProfile
