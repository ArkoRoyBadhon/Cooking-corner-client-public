import React, { useState } from 'react';
import useTitle from '../../../Hooks/useTitle';

const AddService = () => {
    const [uploadInfo, setUploadInfo] = useState([])

    useTitle("Add Service");

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(form);
        const price = form.price.value;
        const name = form.name.value;
        const image = form.photourl.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const createInfo = {
            name: name,
            price: price,
            image: image,
            rating: rating,
            description: description
        }

        console.log(createInfo);

        fetch('https://cooking-corner-server-side.vercel.app/add-service', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('cooking-token')}`
            },
            body: JSON.stringify(createInfo)
        })
            .then(res => res.json())
            .then(data => {
                setUploadInfo(data)
                alert('created successfully')
                form.reset();
            })
            .catch(err => console.log(err))


    }

    return (
        <div className='card w-4/5 lg:w-96 bg-base-100 shadow-xl mx-auto min-h-max my-20'>
            <h4 className="text-center text-xl font-bold">Create a New Service</h4>
            <form className=' w-4/5 mx-auto my-6' onSubmit={handleSubmit}>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" required className="input input-bordered w-full max-w-xs mx-auto" />
                </div>
                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name='price' placeholder="Price" required className="input input-bordered w-full max-w-xs mx-auto" />
                </div>

                <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text">Service Photo Url</span>
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
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name='description' className="textarea textarea-bordered h-24" required placeholder="Description"></textarea>
                </div>
                <button type='submit' className='my-5 w-full'>
                    <input type="submit" className='btn' value="Create" />
                </button>
            </form>
        </div>
    );
};

export default AddService;