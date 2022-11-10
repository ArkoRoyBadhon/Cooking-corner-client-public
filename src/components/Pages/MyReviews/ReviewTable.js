import React from 'react';
import { Link } from 'react-router-dom';
import blank_img from '../../../assets/blank_profile.png'


const ReviewTable = ({ review, reviewData, handleDelete }) => {

    const { _id, name, photourl, time, service_name, textarea, rating } = review;
    const placeholderImage = blank_img

    const onImageError = (e) => {
        e.target.src = placeholderImage
    }

    // const handleUpdate = (id) => {
    //     alert('update btn'+id)
    // }

    return (
        <tr>
            <td className="text-xs">
                <div className="lg:flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-8 lg:w-12 h-12">
                            <img className='' src={photourl} alt="img" onError={onImageError} />
                        </div>
                    </div>
                    <div>
                        <div className="text-xs -ml-3 lg:ml-5">{name}</div>
                    </div>
                </div>
            </td>
            <td className="text-xs">
                {rating}
            </td>
            <td className="text-xs">
                {service_name}
            </td>
            <td className="text-xs min-w-6 max-w-8">{textarea}</td>
            <td className="text-xs">{time}</td>
            <td className="text-xs">
                <Link to={`/update-review/${_id}`} className='btn btn-outline btn-sm btn-info'>Update</Link>
                <button onClick={()=>handleDelete(_id)} className='ml-3 btn btn-outline btn-secondary btn-sm'>Delete</button>
            </td>
        </tr>
    );
}


export default ReviewTable;