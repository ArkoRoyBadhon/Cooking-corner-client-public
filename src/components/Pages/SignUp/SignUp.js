import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../../../assets/23640-sign-in-or-sign-up-animation.gif'
import { AuthProvider } from '../../../Context/AuthContext';
import useTitle from '../../Hooks/useTitle';
import Spinner from '../../Spinner';
import toast from 'react-hot-toast'



const SignUp = () => {
    const [errorFound, setErrorFound] = useState('');
    const { createUser, logOut, updateUserProfile, googleSignIn } = useContext(AuthProvider);

    useTitle("SignUp");
    const navigate = useNavigate();

    const [loader, setLoader] = useState(false);

    const notifySignUp = () => toast.success('User Sign Up Succcess!!')

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrorFound('');
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(form);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user);
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                logOut()
                    .then(() => { })
                    .catch(error => {
                        setErrorFound(error.message)
                        // notifyError()
                    })
                // setUser('')
                // notify();
                // verifyEmail();
                notifySignUp()
                navigate('/login');
            })
            .catch(error => {
                console.error(error)
                setErrorFound(error.message);
                // notifyError();
            })
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        setErrorFound('');
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                setErrorFound(error.message)
                // notifyError()
            })
    }

    const handleGoogle = () => {
        setErrorFound('');
        googleSignIn()
            .then(result => {
                const user = result.user;
                navigate('/');
            })
            .catch(error => {
                setErrorFound(error.message);
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
        <div className="hero bg-base-100 max-w-screen-xl mx-auto my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={signup} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h4 className="text-2xl font-bold text-center">Sign Up</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photourl' placeholder="Photo Url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="signup" className='btn btn-primary' />
                            </div>
                        </form>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogle} className="btn btn-info hover:btn-secondary">Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;