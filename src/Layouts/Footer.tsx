import GooglePlay from '@/assets/images/GooglePlay.png';
import Qr from '@/assets/images/Qr Code.png';
import appstore from '@/assets/images/appstore.png';
import twitter from '@/assets/svg/Vector (1).svg';
import linkedIn from '@/assets/svg/Vector (2).svg';
import facebook from '@/assets/svg/Vector.svg';
import insta from '@/assets/svg/Group.svg';
import { Link } from 'react-router-dom';
import Input from '@/components/ui/Input';

const Footer = () => {
    return (
        <div className="w-full bg-black lg:py-20 md:py-10 sm:py-8 py-4">
            <div className="mainContainer">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 lg:mt-0 mt-10 gap-6">
                    {/* Exclusive */}
                    <div className="w-full">
                        <h3 className="headFooter lg:mb-6 md:mb-5 mb-4">Exclusive</h3>
                        <ul className="txtFooter md:space-y-[16px] space-y-[14px]">
                            <li>Subscribe</li>
                            <li>Get 10% off your first order</li>
                            <li>
                                <Input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="text-second-white bg-black border-second-white"
                                />
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="w-full">
                        <h3 className="headFooter lg:mb-6 md:mb-5 mb-4">Support</h3>
                        <ul className="txtFooter md:space-y-[16px] space-y-[14px]">
                            <li className="w-[65%]">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
                            <li>exclusive@gmail.com</li>
                            <li>+88015-88888-9999</li>
                        </ul>
                    </div>

                    {/* Account */}
                    <div className="w-full">
                        <h3 className="headFooter lg:mb-6 md:mb-5 mb-4">Account</h3>
                        <ul className="txtFooter md:space-y-[16px] space-y-[14px]">
                            <li>My Account</li>
                            <li>Login / Register</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                            <li>Shop</li>
                        </ul>
                    </div>

                    {/* Quick Link */}
                    <div className="w-full">
                        <h3 className="headFooter lg:mb-6 md:mb-5 mb-4">Quick Link</h3>
                        <ul className="txtFooter md:space-y-[16px] space-y-[14px]">
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Download */}
                    <div className="w-full">
                        <h3 className="headFooter lg:mb-6 md:mb-5 mb-4">Download App</h3>
                        <ul className="md:space-y-[16px] space-y-[14px]">
                            <li className="text-second-white text-[12px]">Save $3 with App New User Only</li>
                            <li className="flex items-center space-x-2">
                                <img src={Qr} alt="telephone" className="" />
                                <div className="flex flex-col gap-2">
                                    <img src={appstore} alt="telephone" className="" />
                                    <img src={GooglePlay} alt="telephone" className="" />
                                </div>
                            </li>
                            <li className="flex items-center gap-6">
                                <img src={twitter} alt="twitter" />
                                <img src={linkedIn} alt="linkedIn" />
                                <img src={facebook} alt="facebook" />
                                <img src={insta} alt="instagram" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

