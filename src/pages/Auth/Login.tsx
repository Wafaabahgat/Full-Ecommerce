import auth from '@/assets/images/auth.png';
import Google from '@/assets/svg/Icon-Google.svg';
import Input from '@/components/ui/Input';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="lg:mt-[60px] md:mt-[40px] mb-[140px] h-full w-full grid lg:grid-cols-3 md:grid-cols-2 xl:gap-[8px] md:gap-[50px] gap-[40px] my-auto">
                <div className="lg:col-span-2 w-full">
                    <img src={auth} alt="" className="bg-cover w-full h-full max-h-[700px]" />
                </div>

                <div className="max-w-2xl w-full px-10 my-auto">
                    <div className="lg:mb-12 md:mb-10 sm:mb-8 mb-6">
                        <h2 className="xl:text-[36px] lg:text-[25px] text-[20px] font-bold lg:mb-6 md:mb-5 sm:mb-4 mb-3">
                            Log in to Exclusive
                        </h2>
                        <h5 className="md:text-[16px] text-[14px]">Enter your details below</h5>
                    </div>

                    <form className="flex flex-col md:gap-4 sm:gap-3 gap-2">
                        <Input
                            className="shadow appearance-none border-b w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            placeholder="Name"
                        />

                        <Input
                            className="shadow appearance-none border-b w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="password"
                            placeholder="Password"
                        />

                        <div className="flex items-center justify-between gap-2">
                            <button
                                className="bg-txt-red hover:bg-red-600 text-second-white font-bold py-2 lg:px-[48px] px-[30px] rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Login
                            </button>
                            <Link to="/forget-password" className="text-txt-red lg:text-[16px] text-[14px]">
                                Forget Password?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;

