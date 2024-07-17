import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer, Sidebar, ThemeSettings } from '../components';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { FiSettings } from 'react-icons/fi'
import { useStateContext } from '../contexts/ContextProvider';
const RootLayout = () => {
    const { activeMenu } = useStateContext()
    return (
        <div>
            <div className="flex relative dark:bg-main-dark-bg">
                <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }} >
                    <TooltipComponent content="Setting" position="TopCenter">
                        <button type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' style={{ background: 'blue', borderRadius: '50%' }} >
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                        <Sidebar />
                    </div>
                ) : (
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                        Sidebar
                    </div>
                )}
                <div className={activeMenu
                    ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                    : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
                }>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        <Navbar />
                    </div>
                    <div>
                        <Outlet />
                    </div>
                    {/* <Footer /> */}
                </div>

            </div>

        </div>
    )
}

export default RootLayout