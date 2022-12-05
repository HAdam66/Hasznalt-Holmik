import React from 'react'
import { imageDownload } from '../../Service/ImageService';
import { download } from '../../Service/Service';
import MarketList from '../Marketplace/MarketList';
import BasketStyle from '../Basket/BasketStyle.module.css';

function Basket() {

    const [clothings, setClothings] = React.useState([]);
    const [imgUrl, setImgUrl] = React.useState([]);
    let basket = "basket";

    React.useEffect(() => {
        download(setClothings, basket);
        imageDownload(setImgUrl);
    }, []);
    console.log(clothings)
    return (
        <div className={BasketStyle.container}>
            {clothings.map(data => {
                return <MarketList data={data} imgUrl={imgUrl}/>
            })}
        </div>
    )
}

export default Basket