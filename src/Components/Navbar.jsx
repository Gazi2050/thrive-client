import { useContext, useState } from 'react';
import { IoMdFitness } from 'react-icons/io';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HiMenuAlt4 } from "react-icons/hi";
import { FaCircleUser } from "react-icons/fa6";
import { TbArrowsCross } from "react-icons/tb";
import { AuthContext } from '../Provider/AuthProvider';
import toast, { Toaster } from "react-hot-toast";
import useAdmin from '../Hooks/useAdmin';
const Navbar = () => {
    const [isAdmin] = useAdmin();
    // const isAdmin = true;
    const { user, logOut } = useContext(AuthContext);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut()
            .then(result => {
                toast.success("User LogOut Successfully")
                console.log(result)
                navigate('/');
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message;
                console.log(errorCode);
                toast.error(errorMessage)

            });
    }

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className='fixed w-full z-10'>
            <div className="navbar bg-gradient-to-b from-slate-700 via-gray-900 to-black text-amber-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label
                            tabIndex={0}
                            className={`btn btn-ghost lg:hidden transition duration-400 ease-in text-2xl ${isMenuOpen ? 'transform rotate-90' : ''
                                }`}
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? (
                                <TbArrowsCross />
                            ) : (
                                <HiMenuAlt4 />
                            )}
                        </label>
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52 ${isMenuOpen ? 'block opacity-100' : 'hidden opacity-0 space-y-2'
                                }`}
                        >
                            <li><NavLink to={'/'} onClick={toggleMenu}>Home</NavLink></li>
                            <li><NavLink to={'/gallery'} onClick={toggleMenu}>Gallery</NavLink></li>
                            {user ? (
                                <>
                                    <li><NavLink to={'/trainer'} onClick={toggleMenu}>Trainer</NavLink></li>
                                    {
                                        isAdmin ? (<>
                                            <li><details>
                                                <summary>Class</summary>
                                                <ul className="p-2">
                                                    <li><NavLink to={'/classes'}
                                                        onClick={toggleMenu}>Join Class</NavLink></li>
                                                    <li><NavLink to={'/addClass'}
                                                        onClick={toggleMenu}>Add Class</NavLink></li>
                                                </ul>
                                            </details></li>
                                            <li><NavLink to={'/dashboard'} onClick={toggleMenu}>Dashboard</NavLink></li>
                                            <li><NavLink to={'/allUsers'} onClick={toggleMenu}>Users</NavLink></li>
                                        </>)
                                            :
                                            (<>
                                                <li><details>
                                                    <summary>Class</summary>
                                                    <ul className="p-2">
                                                        <li><NavLink to={'/classes'}
                                                            onClick={toggleMenu}>Join Class</NavLink></li>
                                                        <li><NavLink to={'/addClass'}
                                                            onClick={toggleMenu}>Add Class</NavLink></li>
                                                    </ul>
                                                </details></li>
                                                <li><NavLink to={'/dashboard'} onClick={toggleMenu}>Dashboard</NavLink></li>
                                            </>)
                                    }
                                </>
                            ) : null}
                            <li><NavLink to={'/forums'} onClick={toggleMenu}>Forums </NavLink></li>
                            <li onClick={toggleMenu} className='block lg:hidden md:hidden'>
                                {user ? (
                                    user.photoURL ? (
                                        <NavLink to={'/profile'}><div className="avatar placeholder ">
                                            <div className="bg-neutral text-neutral-content rounded-full w-14">
                                                <span className="text-xs"><img className='rounded-full' src={user.photoURL} alt="User Avatar" /></span>
                                            </div>
                                        </div>
                                        </NavLink>
                                    ) : (
                                        <NavLink to={'/profile'}>
                                            <div className="avatar placeholder ">
                                                <div className="bg-neutral text-neutral-content rounded-full w-14">
                                                    <span className="text-xs"><FaCircleUser className='text-4xl text-amber-400' /></span>
                                                </div>
                                            </div>
                                        </NavLink>
                                    )
                                ) : (
                                    <NavLink to={'/singUp'}>
                                        SignUp
                                    </NavLink>
                                )}

                            </li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-2xl">
                        <IoMdFitness className="text-4xl" />
                        Thrive
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/gallery'}>Gallery</NavLink></li>
                        <li><NavLink to={'/forums'}>Forums </NavLink></li>
                        {user ?
                            (<>
                                <li><NavLink to={'/trainer'}>Trainer</NavLink></li>
                                {
                                    isAdmin ?
                                        (<>
                                            <li><details>
                                                <summary>Class</summary>
                                                <ul className="p-2 bg-black">
                                                    <li><NavLink to={'/classes'}>Join Class</NavLink></li>
                                                    <li><NavLink to={'/addClass'}>Add Class</NavLink></li>
                                                </ul>
                                            </details></li>
                                            <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                                            <li><NavLink to={'/allUsers'}>Users</NavLink></li>
                                        </>)
                                        :
                                        (<>
                                            <li><details>
                                                <summary>Class</summary>
                                                <ul className="p-2 bg-black">
                                                    <li><NavLink to={'/classes'}>Join Class</NavLink></li>
                                                    <li><NavLink to={'/addClass'}>Add Class</NavLink></li>
                                                </ul>
                                            </details></li>
                                            <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                                        </>)
                                }
                            </>) :
                            <li><NavLink to={'/singUp'}>SignUp</NavLink></li>}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <>
                            <NavLink to={'/profile'}>
                                {user?.photoURL ? (
                                    <img className='hidden lg:block md:block rounded-full w-14 mr-4' src={user.photoURL} alt="User Avatar" />
                                ) : (
                                    <FaCircleUser className='text-4xl mr-4 hidden lg:block md:block' />
                                )}
                            </NavLink>
                            <div>
                                <button onClick={handleLogOut} className="btn btn-sm md:btn-md lg:btn-md btn-outline text-amber-400">LogOut</button>
                            </div>
                        </>) : (
                        <NavLink to={'/logIn'} className="btn btn-sm md:btn-md lg:btn-md btn-outline text-amber-400">LogIn</NavLink>
                    )}
                </div>
            </div>
            <Toaster />
        </div >
    );
};

export default Navbar;
