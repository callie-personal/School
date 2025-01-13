import React from 'react';
import Veggie from './Veggie';

const Grid = ({ veggies, onLike }) => {
    return (
        <div className="row">
            {/* create a veggie object */}
            {veggies.map((veggie) => (
                <Veggie
                    //console requested a key
                    key={veggie.name}
                    name={veggie.name}
                    image={veggie.img}
                    likes={veggie.likeCount}
                    onLike={() => onLike(veggie.name)}
                    />
            ))}
        </div>
    );
};

export default Grid;