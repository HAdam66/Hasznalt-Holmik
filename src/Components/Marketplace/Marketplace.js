import React from 'react';
import { imageDownload } from '../../Service/ImageService';
import { download } from '../../Service/Service';
import MarketStyle from '../Marketplace/MarketSytel.module.css';
import SideBar from '../SideBar/SideBar';

function Marketplace() {

    const [clothings, setClothings] = React.useState([]);
    const [imgUrl, setImgUrl] = React.useState([]);
    const [img, setImg] = React.useState();

    React.useEffect(() => {
        download(setClothings);
        imageDownload(clothings, setImgUrl);
    }, []);

    console.log(clothings)
    console.log(imgUrl)
    return (
        <div className={MarketStyle.mainContainer}>
            <SideBar />
            <div className={MarketStyle.container}>
                {clothings.map(data => {
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
                            <button>Buy</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Marketplace