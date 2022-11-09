import React from 'react';
import blank_img from '../../../assets/blank_profile.png'


const ReviewTable = ({ review }) => {

    const { name, photourl, email, textarea, rating } = review;
    const placeholderImage = blank_img

    const onImageError = (e) => {
        e.target.src = placeholderImage
    }

    return (
        <div className="overflow-x-auto max-w-screen-xl mx-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Rating</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>
            </table>
        </div>
    );
};

export default ReviewTable;