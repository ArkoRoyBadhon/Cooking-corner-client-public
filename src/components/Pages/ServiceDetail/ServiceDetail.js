import React, { useContext, useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../../Context/AuthContext';

const ServiceDetail = () => {
    const { user } = useContext(AuthProvider);
    const service = useLoaderData();
    const [submitbtn, setSubmitbtn] = useState(false);
    const { _id, name, image, rating, price, description } = service;

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setSubmitbtn(true);
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photourl = form.photourl.value;
        const rating = form.rating.value;
        const textarea = form.textarea.value;

        const reviewInfo = {
            review_service: _id,
            name: name,
            email: email,
            photourl: photourl,
            rating: rating,
            textarea: textarea
        }
        console.log(reviewInfo);
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged ) {
                    alert('review submitted')
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }

    const handleClose = () => {
        setSubmitbtn(false);
    }



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
                            <div className="modal cursor-pointer" id="my-modal-2">
                                <div className="modal-box">
                                    <div className="relative">
                                        <h3 className="font-bold text-xl text-center justify-center">Submit Your Review</h3>
                                        <div className="modal-action text-end absolute -top-7 right-0">
                                            <a href="#" className="btn btn-sm">X</a>
                                        </div>
                                    </div>
                                    <form onSubmit={handleFormSubmit}>
                                        <div className="form-control w-full max-w-xs mx-auto">
                                            <label className="label">
                                                <span className="label-text">Your Name</span>
                                            </label>
                                            <input type="text" name='name' placeholder="Name" required className="input input-bordered w-full max-w-xs mx-auto" />
                                        </div>
                                        <div className="form-control w-full max-w-xs mx-auto">
                                            <label className="label">
                                                <span className="label-text">Your Email</span>
                                            </label>
                                            <input defaultValue={user?.email} type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs mx-auto" readOnly />
                                        </div>
                                        <div className="form-control w-full max-w-xs mx-auto">
                                            <label className="label">
                                                <span className="label-text">Your Photo Url</span>
                                            </label>
                                            <input type="text" name='photourl' placeholder="Photo url" className="input input-bordered w-full max-w-xs" />
                                        </div>
                                        <div className="form-control w-full max-w-xs mx-auto">
                                            <label className="label">
                                                <span className="label-text">Rating</span>
                                            </label>
                                            <input type="text" name='rating' placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                                        </div>
                                        <div className="form-control max-w-xs mx-auto">
                                            <label className="label">
                                                <span className="label-text">Write review</span>
                                            </label>
                                            <textarea name='textarea' className="textarea textarea-bordered h-24" required placeholder="Review"></textarea>
                                        </div>
                                        <div className="modal-action ">
                                            <button type='submit' className='submit'>
                                                {/* <a href="#" className="btn">Submit bb</a> */}
                                                <input type="submit" className='btn' value="Submit" />
                                            </button>

                                        </div>
                                        {
                                            submitbtn && <>
                                                <div className="text-center text-success">
                                                    <h2>Your Review Submited successfully</h2>
                                                    <a onClick={handleClose} href="#" className="btn">Close</a>
                                                </div>
                                            </>
                                        }
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