import React from 'react';
import SHOP_DATA from './shopData.js';
import './shop.scss';
import PreviewCollection from '../../components/previewCollection/previewCollection.js';

class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherCollection}) => (
                        <PreviewCollection className={id} {...otherCollection} />
                    ))
                }
            </div>
        );
    }
}

export default Shop;
