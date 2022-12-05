import React from 'react';
import { imageDownload } from '../../Service/ImageService';
import { download } from '../../Service/Service';
import MarketStyle from '../Marketplace/MarketSytel.module.css';
import SideBar from '../SideBar/SideBar';
import MarketList from './MarketList';

function Marketplace() {

    const [clothings, setClothings] = React.useState([]);
    const [imgUrl, setImgUrl] = React.useState([]);
    const [img, setImg] = React.useState();
    const [type, setType] = React.useState("");
    const [material, setMaterial] = React.useState();
    const [color, setColor] = React.useState();
    const [size, setSize] = React.useState("");
    const [season, setSeason] = React.useState("");
    let market = "market";

    React.useEffect(() => {
        download(setClothings, market);
        imageDownload(setImgUrl);
    }, []);

    return (
        <div className={MarketStyle.mainContainer}>
            <SideBar setType={setType} setSeason={setSeason} setSize={setSize} />
            <div className={MarketStyle.container}>
                {clothings.map(data => {
                    if (type === data.type && size === data.size && season === data.season) {
                        return (
                            <MarketList data={data} imgUrl={imgUrl} />
                        )
                    } else if (type === data.type && size === data.size && season === "") {
                        return (
                            <MarketList data={data} imgUrl={imgUrl} />
                        )
                    } else if (type === data.type && size === "" && season === data.season) {
                        return (
                            <MarketList data={data} imgUrl={imgUrl} />
                        )
                    } else if (type === "" && size === data.size && season === data.season) {
                        return (
                            <MarketList data={data} imgUrl={imgUrl} />
                        )
                    } else if (type === data.type && size === "" && season === "") {
                        return (
                            <MarketList data={data} imgUrl={imgUrl} />
                        )
                    } else if (type === "" && size === data.size && season === "") {
                        return (
                            <MarketList data={data} imgUrl={imgUrl} />
                        )
                    } else if (type === "" && size === "" && season === data.season) {
                        return (
                            <MarketList data={data} imgUrl={imgUrl} />
                        )
                    } else if (type === "" && size === "" && season === "") {
                        return (
                            <MarketList data={data} imgUrl={imgUrl} />
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Marketplace