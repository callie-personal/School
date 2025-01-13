import React from 'react';

const Veggie = ({ name, image, likes, onLike }) => {
    return (
        <div className="row">
            <div className="veggie">{name}</div>
            <img src={image} alt={name} />
            <button onClick={onLike}>Like</button>
            <div>Likes: {likes}</div>
        </div>
    );
};

export default Veggie;
