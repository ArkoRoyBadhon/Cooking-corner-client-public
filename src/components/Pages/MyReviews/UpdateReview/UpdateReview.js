import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../../../Context/AuthContext';
import toast from 'react-hot-toast';


const UpdateReview = () => {
    const { user } = useContext(AuthProvider);
    const review = useLoaderData();

    // console.log(review);

    const notify = () => toast.success('Update Review Successfully');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const service_name = form.service_name.value;
        const email = form.email.value;
        const photourl = form.photourl.value;
        const rating = form.rating.value;
        const textarea = form.textarea.value;

        const current = new Date();

        const time = current.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        });
        // console.log(time);

        const reviewInfo = {
            name: name,
            service_name: service_name,
            email: email,
            photourl: photourl,
            rating: rating,
            textarea: textarea,
            time: time
        }
        // console.log(reviewInfo);
        fetch(`https://cooking-corner-server-side.vercel.app/reviews/${review._id}`, {
            method: 'PATCH',
            headers: {
                "content-type": 'application/json',
                authorization: `Bearer ${localStorage.getItem('cooking-token')}`
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    notify();
                    form.reset();
                }
            })
            .catch(err => console.error(err))
    }

    useEffect(()=> {

    },[])

    return (
        <div className='card w-96 bg-base-100 shadow-xl mx-auto min-h-max my-20'>
            <h4 className="text-center text-xl font-bold">Update Your Review</h4>
            <form onSubmit={handleFormSubmit}>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input defaultValue={review.name} type="text" name='name' placeholder="Name" required className="input input-bordered w-full max-w-xs mx-auto" />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" defaultValue={review.service_name} name='service_name' placeholder="Name" required className="input input-bordered w-full max-w-xs mx-auto" />
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
                    <input type="text" defaultValue={review.photourl} name='photourl' placeholder="Photo url" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" defaultValue={review.rating} name='rating' placeholder="Rating" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Write review</span>
                    </label>
                    <textarea defaultValue={review.textarea} name='textarea' className="textarea textarea-bordered h-24" required placeholder="Review"></textarea>
                </div>
                <button type='submit' className='my-5 w-full'>
                    <input type="submit" className='btn' value="Update" />
                </button>
            </form>
        </div>
    );
};

export default UpdateReview;