// import Logo from "../../assets/svg/Logo.svg";
import { useState, useRef, useEffect } from 'react';
// import ProfileSidebar from "./ProfileSidebar";
import Wishlist from '@/assets/svg/Wishlist.svg';
import cart from '@/assets/svg/Cart.svg';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import { IconUser } from '@/components/icons/MainIcons';
// import SideMenu from "./SideMenu";

const cookies = new Cookies();
const user = cookies.get('user');

const Header = () => {
    const [open, setopen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const userCard = useRef(null);
    const menuRef = useRef(null);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        setTouchEnd(e.changedTouches[0].clientX);
        const swipeDistance = touchStart - touchEnd;

        if (Math.abs(swipeDistance) > 50) {
            setopen(false);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userCard.current && !userCard.current.contains(event.target)) {
                setopen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(false);
            }
        };

        if (openMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openMenu]);

    return (
        <nav className="">
            <div className="bg-black text-white py-4 text-center lg:text-[18px] md:text-[14px] sm:text-[12px] text-[8px]">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </div>
            <div className="border-b-2">
                <div className="mainContainer lg:px-8 px-5 pb-4 lg:pt-[30px] pt-[20px] flex items-center justify-between gap-3 text-black">
                    <div className="flex items-center gap-2">
                        {/* Logo Section */}
                        <Link to="/" className="lg:text-[24px] md:text-[22px] sm:text-[20px] text-[18px] font-bold">
                            Exclusive
                        </Link>
                    </div>

                    {/* Links Section */}
                    <ul className="md:flex lg:justify-start justify-center lg:px-5 px-0 hidden xl:gap-9 lg:gap-7 md:gap-[16px] gap-4">
                        <li>
                            <Link to="/" className="txtNavbar">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/contact-us" className="txtNavbar">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/about-us" className="txtNavbar">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/login" className="txtNavbar">
                                Sign Up
                            </Link>
                        </li>
                    </ul>

                    {/* Icons Section */}
                    <div ref={userCard} className="">
                        <ul className="flex lg:justify-center justify-end items-end lg:gap-10 gap-[22px] cursor-pointer">
                            <li>
                                <Link to="my-cart">
                                    <img src={cart} alt="cart" className='md:w-8 w-6 md:h-8 h-6'/>
                                </Link>
                            </li>
                            <li>
                                <Link to="my-wishlist">
                                    <img src={Wishlist} alt="Wishlist" className='md:w-8 w-6 md:h-8 h-6'/>
                                </Link>
                            </li>
                            <li>
                                <Link to="my-account">
                                    <IconUser className='md:w-8 w-6 md:h-8 h-6'/>
                                </Link>
                            </li>
                        </ul>

                        {/* mobile */}
                        {open ? (
                            <>
                                <button
                                    onClick={() => setopen(false)}
                                    className=" md:absolute fixed top-4 left-4 text-2xl font-bold text-black md:hidden block z-[55]"
                                >
                                    x
                                </button>
                                <div
                                    onTouchStart={handleTouchStart}
                                    onTouchEnd={handleTouchEnd}
                                    className="md:absolute fixed h-screen flex flex-col md:justify-center z-50 text-sm xl:right-[140px] lg:right-[120px] md:right-[75px] md:py-0 py-10 right-0 md:top-[100px] top-0 bg-white shadow-lg md:rounded-md md:max-w-[240px] w-full md:max-h-[185px] border-gray-300 border"
                                >
                                    <ul className="flex flex-col gap-5 text-black text-center py-4 cursor-pointer">
                                        {user ? (
                                            <>
                                                <li onClick={() => setSidebarOpen(true)} className="liNav">
                                                    Profil
                                                </li>
                                                {user?.role === 'admin' && (
                                                    <>
                                                        <li>
                                                            <Link to="/dashboard" className="liNav">
                                                                Armaturenbrett
                                                            </Link>
                                                        </li>
                                                        <hr className="w-[90%] h-[3px] block bg-gray-300 mx-auto my-2" />
                                                    </>
                                                )}
                                                <li
                                                    className="flex items-center justify-center gap-2 "
                                                    onClick={() => {
                                                        cookies.remove('user');
                                                        window.location.href = '/login';
                                                    }}
                                                >
                                                    {/* <img src={logout} alt="logout" className="filter invert w-6 h-6" /> */}
                                                    <p className="liNav">ausloggen</p>
                                                </li>
                                            </>
                                        ) : (
                                            <>
                                                <li className="liNav">
                                                    <Link onClick={() => setopen(false)} to="/signup">
                                                        Ein Konto erstellen
                                                    </Link>
                                                </li>
                                                <li className="liNav">
                                                    <Link onClick={() => setopen(false)} to="/login">
                                                        Anmelden
                                                    </Link>
                                                </li>

                                                <li className="liNav">
                                                    <Link onClick={() => setopen(false)} to="/about-us">
                                                        Über uns
                                                    </Link>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </>
                        ) : null}
                    </div>

                    {/* {openMenu && <SideMenu menuRef={menuRef} setOpenMenu={setOpenMenu} />}
        {sidebarOpen && <ProfileSidebar setSidebarOpen={setSidebarOpen} />} */}
                </div>
            </div>
        </nav>
    );
};

export default Header;

