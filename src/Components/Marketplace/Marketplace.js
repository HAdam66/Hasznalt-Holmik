import React from 'react';
import { imageDownload } from '../../Service/ImageService';
import { download } from '../../Service/Service';
import MarketStyle from '../Marketplace/MarketSytel.module.css';

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
        <div>
        {clothings.map(data => {
            return (
                <ul>
                    <li>{data.type}</li>
                    <li>{data.material}</li>
                    <li>{data.size}</li>
                    <li>{data.color}</li>
                    <li>{data.season}</li>
                    {imgUrl.map(img => {
                        if(data.id === img[0]){
                            return <img className={MarketStyle.image} src={img[1]}/>
                        }
                    })}
                </ul>
            )
        })}
    </div>
  )
}

export default Marketplace