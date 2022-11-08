import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginpic from '../../../assets/93385-login.gif'
import AuthContext, { AuthProvider } from '../../../Context/AuthContext';

const Login = () => {
    const [theError, setTheError] = useState('');
    const { login } = useContext(AuthProvider);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // setTheError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                navigate('/')
            })
            .catch(error => {
                setTheError(error.message);
            
            })
            .finally(() => {
                
            })
    }

    return (
        <div className="hero bg-base-100 max-w-screen-xl mx-auto">
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
                        <p className="">Don't have an account? <Link className='btn btn-ghost' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;