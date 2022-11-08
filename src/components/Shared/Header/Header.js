import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../Context/AuthContext';
import blank_img from '../../../assets/blank_profile.png'

const Header = () => {

    const { user, logOut } = useContext(AuthProvider)

    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
    </>

    const handleLogOut = () => {
        logOut();
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
                <Link className="btn btn-ghost normal-case text-xl font-bold">Cooking Corner</Link>
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
                                <div className="w-12 rounded-full">
                                    <img src={user?.photoURL} alt="img" onError={onImageError} />
                                </div>
                            </div>
                            <p>{user?.displayName}</p>
                            <button className='btn btn-outline btn-primary btn-sm ml-3' onClick={handleLogOut}>Log out</button>
                        </> :
                        <>
                            <div className="avatar offline">
                                <div className="w-12 rounded-full">
                                    <img src={blank_img} alt='' />
                                </div>
                            </div>
                            <button className='btn btn-outline btn-primary btn-sm ml-3'><Link to='/login'>Login</Link></button>
                            <button className='btn btn-outline btn-primary btn-sm ml-3'><Link to='/signup'>Sign Up</Link></button>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;