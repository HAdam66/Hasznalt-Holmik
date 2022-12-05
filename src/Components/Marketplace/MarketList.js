import React from 'react';
import MarketStyle from '../Marketplace/MarketSytel.module.css';
import { addToBasket } from '../../Service/Service';

function MarketList(props) {

    let data = props.data;
    let imgUrl = props.imgUrl;

    return (
            <div className={MarketStyle.box}>
            {imgUrl.map(img => {
                if (data.id === img[0]) {
                    return <img className={MarketStyle.image} src={img[1]} />
                }
            })}
            <ul className={MarketStyle.list}>
                <li>Type: {data.type}</li>
                <li>Material: {data.material}</li>
                <li>Size: {data.size}</li>
                <li>Color: {data.color}</li>
                <li>Season: {data.season}</li>
            </ul>
            <button onClick={() => addToBasket(data)}>Add to Basket</button>
        </div>
    )
}

export default MarketList