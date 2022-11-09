import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../../Context/AuthContext';

const ServiceDetail = () => {
    const { user } = useContext(AuthProvider);
    const service = useLoaderData();
    const { _id, name, image, rating, price, description } = service;

    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <h3 className="text-center text-2xl font-bold">{name}</h3>
            <div className="my-5">
                <img className='w-3/5 mx-auto rounded-lg' src={image} alt="" />
                <small></small>
            </div>
            <div className="flex justify-between w-3/5 mx-auto">
                <h3 className="text-xl font-semibold">Price: {price} BDT</h3>
                <h4>Rating: {rating}</h4>
            </div>
            <p className="text-md">{description}</p>


            <div>
                <a href="#my-modal-2" className="btn">Give a review</a>
                {
                    user?.uid ?
                        <>
                            <div className="modal" id="my-modal-2">
                                <div className="modal-box">
                                    <div className="relative">
                                        <h3 className="font-bold text-xl text-center justify-center">Submit Your Review</h3>
                                        <div className="modal-action text-end absolute -top-7 right-0">
                                            <a href="#" className="btn btn-sm">X</a>
                                        </div>
                                    </div>
                                    <form>
                                        <div className="form-control w-full max-w-xs mx-auto">
                                            <label className="label">
                                                <span className="label-text">Your Name</span>
                                            </label>
                                            <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs mx-auto" />
                                        </div>
                                        <div className="form-control w-full max-w-xs mx-auto">
                                            <label className="label">
                                                <span className="label-text">Your Email</span>
                                            </label>
                                            <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs mx-auto" />
                                        </div>
                                        <div className="form-control w-full max-w-xs mx-auto">
                                            <label className="label">
                                                <span className="label-text">Your Photo Url</span>
                                            </label>
                                            <input type="text" placeholder="Photo url" className="input input-bordered w-full max-w-xs" />
                                        </div>
                                        <div className="form-control w-full max-w-xs mx-auto">
                                            <label className="label">
                                                <span className="label-text">Rating</span>
                                            </label>
                                            <input type="text" placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                                        </div>
                                        <div className="form-control max-w-xs mx-auto">
                                            <label className="label">
                                                <span className="label-text">Write review</span>
                                            </label>
                                            <textarea className="textarea textarea-bordered h-24" placeholder="Review"></textarea>
                                        </div>
                                        <div className="modal-action ">
                                            <a href="#" className="btn">Submit</a>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </>
                        :
                        <>
                            <div className="modal" id="my-modal-2">
                                <div className="modal-box">
                                    <div className="relative">
                                        <h3 className="font-bold text-xl text-center justify-center">Please Login to submit a review!!</h3>
                                        <div className="modal-action text-end absolute -top-7 right-0">
                                            <a href="#" className="btn btn-sm">X</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                }</div>
        </div >
    );
};

export default ServiceDetail;