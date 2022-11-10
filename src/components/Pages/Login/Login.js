import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginpic from '../../../assets/93385-login.gif'
import { AuthProvider } from '../../../Context/AuthContext';
import useTitle from '../../Hooks/useTitle';
import Spinner from '../../Spinner';
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [theError, setTheError] = useState('');
    const { login, setLoading, googleSignIn } = useContext(AuthProvider);
    const [loader, setLoader] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    useTitle("Login");

    const notifyLogin = () => toast.success('User Login Succcess!!')
    const notifyError = () => toast.error('Login Failed! Please enter correct email or password');

    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault();
        // setTheError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }

                fetch('https://cooking-corner-server-side.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        notifyLogin()
                        localStorage.setItem('cooking-token', data.token);
                        navigate(from, { replace: true })
                    })


            })
            .catch(error => {
                setTheError(error.message);
                notifyError()
            })
            .finally(() => {
                setLoading(false)
            })
    }


    const handleGoogle = () => {
        setTheError('');
        googleSignIn()
            .then(result => {
                const user = result.user;

                const currentUser = {
                    email: user.email
                }

                fetch('https://cooking-corner-server-side.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        notifyLogin()
                        localStorage.setItem('cooking-token', data.token);
                        navigate(from, { replace: true })
                    })


            })
            .catch(error => {
                setTheError(error.message);
                notifyError()
            })
            .finally(() => {
                setLoading(false)
            })
    }


    useEffect(() => {
        setLoader(true)
    }, [])

    if (loader) {
        return <div className='w-3/5 mx-auto text-center my-40'>
            <div className='hidden'>
                {
                    setTimeout(() => {
                        setLoader(false)
                    }, 400)
                }
            </div>
            <Spinner></Spinner>
        </div>
    }



    return (
        <div className="hero bg-base-100 max-w-screen-xl mx-auto my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={loginpic} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h4 className="text-2xl font-bold text-center">Login</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className='btn btn-primary' />
                            </div>
                        </form>
                        <p className="-mt-1"><small>Don't have an account? <Link className='' to='/signup'>Sign Up</Link></small></p>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogle} className="btn btn-info hover:btn-secondary"><FaGoogle className='mr-2 text-red-500' /> Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;