import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../public/amazon_PNG11.png';
const Footer = () => {
    const router = useRouter()

    return (
        <footer>
            
            <div className='bg-[#485769] text-white text-sm font-semibold py-4'>
                <p className='text-center cursor-pointer' onClick={()=>router.push('/')}>Back to Top</p>
            </div>


            <div className="bg-[#232F3E] text-white font-semibold text-center">
                <div className='max-w-screen-xl mx-auto space-y-5 py-4 px-8 grid items-baseline sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 sm:text-left '>
                    <div>
                        <h2 className="text-xl pb-2">Get to Know Us</h2>
                        <ul className="text-sm">
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>sample text</li>
                            <li>sample text</li>
                            <li>sample text</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl pb-2">Make Money with Us</h2>
                        <ul className="text-sm">
                            <li>Sell products on Amazon</li>
                            <li>Sell on Amazon Business</li>
                            <li>sample text</li>
                            <li>sample text</li>
                            <li>sample text</li>
                            <li>sample text</li>
                            <li>sample text</li>
                            <li>sample text</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl pb-2">Amazon Payment Products</h2>
                        <ul className="text-sm">
                            <li>Amazon Business Card</li>
                            <li>Shop with Points</li>
                            <li>sample text</li>
                            <li>sample text</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl pb-2">Let Us Help You</h2>
                        <ul className="text-sm">
                            <li>Amazon And COVID-19</li>
                            <li>your Account</li>
                            <li>sample text</li>
                            <li>sample text</li>
                            <li>sample text</li>
                            <li>sample text</li>
                            <li>sample text</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="bg-[#232F3E] text-white font-semibold text-center border-t border-gray-300/80 py-10">
                <div className='flex justify-center '>
                    <div className='mr-10'>
                        <Image 
                            src={logo}
                            width={76}
                            height={23}
                            alt="amazon"
                        />
                    </div>
                    
                <div className='space-x-4'>
                        <button className='border border-gray-300 rounded-sm px-5 cursor-pointer'>English</button>
                        <button className='border border-gray-300 rounded-sm px-5 cursor-pointer'>
                            <span className='font-bold'>$</span> USD-US. Dollar
                        </button>
                        <button className='border border-gray-300 rounded-sm px-5 cursor-pointer'>United States</button>
                </div>
                </div>
            </div>


            <div className='bg-[#131A22] text-gray-200 text-xs font-semibold'>
               <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-2  items-baseline sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12  space-x-3 space-y-3 py-6 px-8 ">
                    
                    <div >
                        <h3 className="text-sm">Amazon Music</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Advertising</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Drive</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Music</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Advertising</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Drive</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Music</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Advertising</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Drive</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Music</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Advertising</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Drive</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Music</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Advertising</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Drive</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Music</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Advertising</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Drive</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Advertising</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Drive</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Music</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Advertising</h3>
                        <p>Stream Millions of songs</p>
                    </div>
                    <div>
                        <h3 className="text-sm">Amazon Drive</h3>
                        <p>Stream Millions of songs</p>
                    </div>
               </div>
            </div>
        </footer>
    );
};

export default Footer;