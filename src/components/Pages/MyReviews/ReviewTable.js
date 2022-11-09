import React from 'react';
import blank_img from '../../../assets/blank_profile.png'


const ReviewTable = ({ review, reviewData }) => {

    const { name, photourl, email, textarea, rating } = review;
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
            <td>{textarea}</td>
        </tr>
    );
}


export default ReviewTable;