import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Input from '@/components/ui/Input';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className="mainContainer">
            <div className="flex flex-col md:flex-row justify-between mt-4 md:mt-10">
                <Breadcrumbs
                    items={[
                        { label: 'Home', path: '/' },
                        { label: 'My Account', path: '/my-account' },
                    ]}
                />
                <p className="mt-2 md:mt-0">
                    Welcome,
                    <span className="text-txt-red text-[14px]"> Wafaa</span>
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-10">
                {/* Sidebar */}
                <div className="w-full md:w-1/4">
                    <h3 className="font-semibold lg:text-lg md:text-[16px] text-[14px] md:mb-4 mb-3">
                        Manage My Account
                    </h3>
                    <ul className="space-y-2 pl-4">
                        <li className="text-red-500 font-medium">
                            <Link to="/my-account">My Profile</Link>
                        </li>
                        <li className="text-gray-600">
                            <Link to="">Address Book</Link>
                        </li>
                        <li className="text-gray-600">
                            <Link to="">My Payment Options</Link>
                        </li>
                    </ul>

                    <h3 className="font-semibold lg:text-lg md:text-[16px] text-[14px] lg:mt-6 md:mt-5 mt-4 md:mb-4 mb-3">
                        My Orders
                    </h3>
                    <ul className="space-y-2 pl-4">
                        <li className="text-gray-600">
                            <Link to="">My Returns</Link>
                        </li>
                        <li className="text-gray-600">
                            <Link to="">My Cancellations</Link>
                        </li>
                    </ul>

                    <h3 className="font-semibold lg:text-lg md:text-[16px] text-[14px] lg:mt-6 md:mt-5 mt-4 md:mb-4 mb-3">
                        My Wishlist
                    </h3>
                </div>

                {/* Profile Form */}
                <div className="w-full md:w-3/4">
                    <h2 className="text-red-500 font-semibold text-xl mb-6">Edit Your Profile</h2>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-4 md:gap-3 sm:gap-2 gap-1">
                            <div className="flex flex-col md:gap-2 gap-1">
                                <label className="text-[14px] md:text-[16px]">First Name</label>
                                <Input type="text" placeholder="Md" className="w-full p-2 md:p-3 border rounded" />
                            </div>
                            <div className="flex flex-col md:gap-2 gap-1">
                                <label className="text-[14px] md:text-[16px]">Last Name</label>
                                <Input type="text" placeholder="Rimel" className="w-full p-2 md:p-3 border rounded" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-4 md:gap-3 sm:gap-2 gap-1">
                            <div className="flex flex-col md:gap-2 gap-1">
                                <label className="text-[14px] md:text-[16px]">Email</label>
                                <Input
                                    type="email"
                                    placeholder="rimel1111@gmail.com"
                                    className="w-full p-2 md:p-3 border rounded"
                                />
                            </div>
                            <div className="flex flex-col md:gap-2 gap-1">
                                <label className="text-[14px] md:text-[16px]">Address</label>
                                <Input
                                    type="text"
                                    placeholder="Kingston, 5236, United State"
                                    className="w-full p-2 md:p-3 border rounded"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-black text-[14px] md:text-[16px] mt-4">Password Changes</label>
                            <Input
                                type="password"
                                placeholder="Current Password"
                                className="w-full p-2 md:p-3 border rounded mt-3"
                            />
                            <Input
                                type="password"
                                placeholder="New Password"
                                className="w-full p-2 md:p-3 border rounded"
                            />
                            <Input
                                type="password"
                                placeholder="Confirm New Password"
                                className="w-full p-2 md:p-3 border rounded"
                            />
                        </div>

                        <div className="flex flex-col md:flex-row justify-between mt-6 space-y-4 md:space-y-0">
                            <button type="button" className="text-gray-500">
                                Cancel
                            </button>
                            <button type="submit" className="bg-red-500 text-white px-4 py-2 md:px-6 md:py-3 rounded">
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;

