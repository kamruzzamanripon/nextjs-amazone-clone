import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import logoImage from '../public/amazon_PNG11.png';
import { selectItems } from '../slices/basketSlice';
const Header = () => {
  
  const {data} = useSession()
  const router = useRouter()
  const items = useSelector(selectItems);
  //console.log(data);
  return (
    <header>
      {/*top Nav*/}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="flex mt-2 items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={()=>router.push('/')}
            src={logoImage}
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
            alt="image"
          />
        </div>

        {/* search */}
        <div className="hidden sm:flex items-center h-10 cursor-pointer flex-grow rounded-md bg-yellow-400 hover:bg-yellow-500">
          <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text" />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-8 mx-6 whitespace-nowrap relative">
        
            
            <div onClick={signIn} className="link relative">
            
            
                <p className="hover:underline">
                  {data ? `Hello, ${data.user.name}` : "Sign In"}
                </p>
                {/* <p className="font-extrabold md:text-sm">Account & Lists</p> */}
                <br />
                {data && (
                  <span className={`${!signIn ? 'hidden' : 'absolute -bottom-3  h-5 bg-yellow-400 text-center cursor-pointer w-13  text-black font-bold rounded px-1'} `}
                
                  onClick={!data ? signIn : signOut}
                  >
                    Log Out
                  </span>
                )}
                
            </div>

            <div className="link">
                <p>Returns</p>
                <p className="font-extrabold md:text-sm">& Orders</p>
            </div>

            <div className="link relative flex items-center"
              onClick={()=>router.push('/checkout')}
            >
                <span className="absolute top-0 right-0 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                {items.length}
                </span>
                <ShoppingCartIcon className="h-10" />
                <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
            </div>
        </div>

      </div>

      {/* Bottom Nav */}
      <div className="flex items-center space-x-3 p-2 bg-[#282E3D] text-white text-sm">
          <p className="link flex items-center">
              <MenuIcon className="h-6 mr-1" />
          </p>
          <p className="link">Prime Video</p>
          <p className="link">Amazon Business</p>
          <p className="link">Today's Deals</p>
          <p className="link hidden lg:inline-flex">Electronics</p>
          <p className="link hidden lg:inline-flex">Food & Grocery</p>
          <p className="link hidden lg:inline-flex">Prime</p>
          <p className="link hidden lg:inline-flex">Buy Again</p>
          <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
          <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
