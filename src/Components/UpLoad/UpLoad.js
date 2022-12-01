import React from 'react';
import { upLoad } from '../../Service/Service';
import UpLoadStyle from '../UpLoad/UpLoad.module.css';

function UpLoad() {
    let inputRef = React.useRef();
    const [type, setType] = React.useState();
    const [material, setMaterial] = React.useState();
    const [color, setColor] = React.useState();
    const [size, setSize] = React.useState();
    const [season, setSeason] = React.useState();
    const [image, setImage] = React.useState();
    
    return (
        <div className={UpLoadStyle.container}>
            <h3>Upload the clothing</h3>
            <div className={UpLoadStyle.box}>
                <input className={UpLoadStyle.inputUpLoad} onChange={(e) => setType(e.target.value)} placeholder={"Type of clothing"}></input>
                <input className={UpLoadStyle.inputUpLoad} onChange={(e) => setMaterial(e.target.value)} placeholder={"Material"}></input>
                <input className={UpLoadStyle.inputUpLoad} onChange={(e) => setColor(e.target.value)} placeholder={"Color"}></input>
                <div className={UpLoadStyle.selectBox}>
                    <label>Size:</label>
                    <select onChange={(e) => setSize(e.target.value)}>
                        <option>--Please choose an option--</option>
                        <option value={"XXl"}>XXL</option>
                        <option value={"Xl"}>Xl</option>
                        <option value={"L"}>L</option>
                        <option value={"M"}>M</option>
                        <option value={"S"}>S</option>
                        <option value={"XS"}>XS</option>
                        <option value={"XXS"}>XXS</option>
                    </select>
                </div>
                <div className={UpLoadStyle.selectBox}>
                    <label>Season:</label>
                    <select onChange={(e) => setSeason(e.target.value)}>
                        <option>--Please choose an option--</option>
                        <option value={"summer"}>Summer</option>
                        <option value={"fall"}>Fall</option>
                        <option value={"winter"}>Winter</option>
                        <option value={"spring"}>Spring</option>
                    </select>
                </div>
                <div className={UpLoadStyle.imageBox}>
                    <label>Upload an image:</label>
                    <input type="file" ref={inputRef}></input>
                </div>
                <button onClick={() => upLoad(type, material, color, size, season, inputRef)}>Upload</button>
            </div>
        </div>
    )
}

export default UpLoad