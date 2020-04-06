import React from 'react';
import './collection-item.scss';

const ColectionItem = ({ id, name, price, imageUrl }) => {
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}}></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

export default ColectionItem;