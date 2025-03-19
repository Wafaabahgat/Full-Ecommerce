import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Input from '@/components/ui/Input';
import { IconCall, IconFillSms } from '@/components/icons/MainIcons';
import Textarea from '@/components/ui/Textarea';

const ContactUs = () => {
    return (
        <div className="mainContainer">
            <div className="mt-4 md:mt-10">
                <Breadcrumbs
                    items={[
                        { label: 'Home', path: '/' },
                        { label: 'Contact', path: '/contact-us' },
                    ]}
                />
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-10">
                {/* Sidebar */}
                <div className="w-full md:w-1/4">
                    <div>
                        <div className="flex items-center md:gap-3 gap-2 lg:mb-6 md:mb-5 sm:mb-4 mb-3">
                            <div className="bg-txt-red p-2 rounded-full h-fit">
                                <IconCall className=" text-white" />
                            </div>
                            <h3 className="font-semibold lg:text-lg md:text-[16px] text-[14px]">Call To Us</h3>
                        </div>

                        <ul className="md:space-y-3 space-y-2">
                            <li className="text-gray-600 text-[14px] font-medium">
                                We are available 24/7, 7 days a week.
                            </li>
                            <li className="text-gray-600 text-[14px]">
                                <span>Phone:</span>
                                +8801611112222
                            </li>
                        </ul>
                    </div>
                    <div className="block bg-black my-8 w-full h-[1px]"></div>
                    <div>
                        <div className="flex md:gap-3 gap-2 items-center lg:mb-6 md:mb-5 sm:mb-4 mb-3">
                            <div className="bg-txt-red p-2 rounded-full h-fit">
                                <IconFillSms className="text-white" />
                            </div>
                            <h3 className="font-semibold lg:text-lg md:text-[16px] text-[14px]">Write To US</h3>
                        </div>

                        <ul className="md:space-y-3 space-y-2">
                            <li className="text-gray-600 font-medium text-[14px]">
                                Fill out our form and we will contact you within 24 hours.
                            </li>
                            <li className="text-gray-600 text-[14px]">
                                <span>Emails: </span>
                                customer@exclusive.com
                            </li>
                            <li className="text-gray-600 text-[14px]">
                                <span>Emails: </span>
                                support@exclusive.com
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Profile Form */}
                <div className="w-full md:w-3/4">
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-4 md:gap-3 sm:gap-2 gap-1">
                            <Input type="text" placeholder="Your Name *" className="w-full p-2 md:p-3 border rounded" />
                            <Input
                                type="email"
                                placeholder="Your Email *"
                                className="w-full p-2 md:p-3 border rounded"
                            />
                            <Input
                                type="text"
                                placeholder="Your Phone *"
                                className="w-full p-2 md:p-3 border rounded"
                            />
                        </div>
                        <Textarea
                            placeholder="Your Massage ..."
                            // value={message}
                            // onChange={setMessage}
                            rows={5}
                            required
                            className="w-full"
                        />
                        <div className="flex items-end justify-end">
                            <button type="submit" className="bg-red-500 text-white px-4 py-2 md:px-6 md:py-3 rounded">
                                Send Massage
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;

