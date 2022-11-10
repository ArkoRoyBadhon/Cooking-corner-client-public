import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../Context/AuthContext';
import blank_img from '../../../assets/blank_profile.png'
import toast from 'react-hot-toast'
import logo from '../../../assets/logo_cook.jpg'


const Header = () => {

    const { user, logOut } = useContext(AuthProvider)

    const notifyLogOut = () => toast.success('User Log Out Successfully');

    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/services'>Services</Link></li>
        {
            user?.uid && <li><Link to={`/my-reviews/`}>My Reviews</Link></li>
        }
        {
            user?.uid && <li><Link to={`/add-service`}>Add Services</Link></li>
        }
    </>

    const handleLogOut = () => {
        logOut();
        notifyLogOut();
    }

    const placeholderImage = blank_img

    const onImageError = (e) => {
        e.target.src = placeholderImage
    }

    return (
        <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>

                <Link to='/' className="btn btn-ghost normal-case text-xl font-bold"><img className='w-12' src={logo} alt="" /> <span className='hidden lg:block ml-2'>Cooking Corner</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    (user?.photoURL)
                        ?
                        <>

                            <div className="avatar online mr-3">
                                <div className="w-12 rounded-full tooltip tooltip-left" data-tip={`${user?.displayName}`} >
                                    <button className='btn'>
                                        <img src={user?.photoURL} alt="img" onError={onImageError} />
                                    </button>
                                </div>
                            </div>
                            <p className='hidden lg:block'>{user?.displayName}</p>
                            <button className='btn btn-outline btn-primary btn-sm ml-3' onClick={handleLogOut}>Log out</button>
                        </> :
                        <>
                            <div className="avatar offline">
                                <div className="w-12 rounded-full">
                                    <img src={blank_img} alt='' />
                                </div>
                            </div>
                            <button className='btn btn-outline btn-primary btn-xs lg:btn-sm ml-3 '><Link to='/login'>Login</Link></button>
                            <button className='btn btn-outline btn-primary btn-xs lg:btn-sm ml-3'><Link to='/signup'>Sign Up</Link></button>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;