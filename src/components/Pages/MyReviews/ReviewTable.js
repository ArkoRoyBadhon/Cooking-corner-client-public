import React from 'react';
import { Link } from 'react-router-dom';
import blank_img from '../../../assets/blank_profile.png'


const ReviewTable = ({ review, reviewData, handleDelete }) => {

    const { _id, name, photourl, email, service_name, textarea, rating } = review;
    const placeholderImage = blank_img

    const onImageError = (e) => {
        e.target.src = placeholderImage
    }

    

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photourl} alt="img" onError={onImageError} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                {rating}
            </td>
            <td>
                {service_name}
            </td>
            <td>{textarea}</td>
            <td>
                <button className='btn btn-outline btn-sm btn-info'>Update</button>
                <button onClick={()=>handleDelete(_id)} className='ml-3 btn btn-outline btn-secondary btn-sm'>Delete</button>
            </td>
        </tr>
    );
}


export default ReviewTable;