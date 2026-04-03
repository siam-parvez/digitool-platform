import {ShoppingCart} from "lucide-react";
import logo from "../../assets/logo.png"

const Navbar = ({cartItem}) => {
    return (
        <header className='bg-base-100 border-b border-neutral-100 sticky top-0 z-50'>
            <div className='navbar container mx-auto'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden px-2'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                {' '}
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h8m-8 6h16'
                                />
                                {' '}
                            </svg>
                        </div>
                        <ul
                            tabIndex='-1'
                            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'>
                            <li>
                                <a href='#products'>Products</a>
                            </li>
                            <li>
                                <a href='#'>Features</a>
                            </li>
                            <li>
                                <a href='#'>Pricing</a>
                            </li>
                            <li>
                                <a href='#'>Testimonials</a>
                            </li>
                            <li>
                                <a href='#'>FAQ</a>
                            </li>
                        </ul>
                    </div>
                    <img className='max-w-20 lg:max-w-32' src={logo} alt='digitools logo'/>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal px-1 font-semibold'>
                        <li>
                            <a href='#products'>Products</a>
                        </li>
                        <li>
                            <a href='#'>Features</a>
                        </li>
                        <li>
                            <a href='#'>Pricing</a>
                        </li>
                        <li>
                            <a href='#'>Testimonials</a>
                        </li>
                        <li>
                            <a href='#'>FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className='navbar-end lg:gap-2'>
                    <div className='indicator'>
                        <ShoppingCart className={"size-5 lg:size-6"}/>
                        {cartItem.length > 0 && (
                            <span className='badge badge-xs indicator-item badge-primary'>
                {cartItem.length}
              </span>
                        )}
                    </div>
                    <a className='btn btn-sm lg:btn-md btn-ghost'>Login</a>
                    <a className='btn btn-sm lg:btn-md btn-primary rounded-full border-none bg-linear-45 from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition-opacity duration-300'>
                        Get Started
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar