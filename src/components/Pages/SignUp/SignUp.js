import React from 'react';
import { Link } from 'react-router-dom';
import signup from '../../../assets/23640-sign-in-or-sign-up-animation.gif'


const SignUp = () => {
    return (
        <div className="hero bg-base-100 max-w-screen-xl mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={signup} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h4 className="text-2xl font-bold text-center">Sign Up</h4>
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo Url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="signup" className='btn btn-primary' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;