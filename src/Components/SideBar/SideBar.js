import React from 'react';
import SideBarStyle from '../SideBar/SideBarStyle.module.css';
import { searching } from '../../Service/Service';
import { Link, useParams, useSearchParams } from 'react-router-dom';

function SideBar(props) {

    const [type, setType] = React.useState("");
    const [size, setSize] = React.useState("");
    const [season, setSeason] = React.useState("");
    
    return (
        <div className={SideBarStyle.container}>
            <Link className={SideBarStyle.navLink} to="/">Home</Link>
            <Link className={SideBarStyle.navLink} to="/Marketplace">Marketplace</Link>
            <Link className={SideBarStyle.navLink} to="/Upload">Upload</Link>
            <Link className={SideBarStyle.navLink} to="/Shopping-Basket">Shopping-Basket</Link>
            
            <div>
                <label>Type:</label>
                <select onChange={(e) => setType(e.target.value)}>
                    <option value={""}>--Please choose an option--</option>
                    <option value={"t-shirt"}>t-shirt</option>
                    <option value={"jacket"}>jacket</option>
                    <option value={"jumper"}>jumper</option>
                    <option value={"pants"}>pants</option>
                    <option value={"shoe"}>shoe</option>
                    <option value={"skirt"}>skirt</option>
                </select>
            </div>
            <div>
                <label>Size:</label>
                <select onChange={(e) => setSize(e.target.value)}>
                    <option value={""}>--Please choose an option--</option>
                    <option value={"XXL"}>XXL</option>
                    <option value={"XL"}>XL</option>
                    <option value={"L"}>L</option>
                    <option value={"M"}>M</option>
                    <option value={"S"}>S</option>
                    <option value={"XS"}>XS</option>
                    <option value={"XXS"}>XXS</option>
                </select>
            </div>
            <div>
                <label>Season:</label>
                <select onChange={(e) => setSeason(e.target.value)}>
                    <option value={""}>--Please choose an option--</option>
                    <option value={"summer"}>summer</option>
                    <option value={"fall"}>fall</option>
                    <option value={"winter"}>winter</option>
                    <option value={"spring"}>spring</option>
                    <option value={"every"}>every</option>
                </select>
            </div>
            <button onClick={() => {
                props.setType(type);
                props.setSize(size);
                props.setSeason(season);
            }}>Search</button>
        </div>
    )
}

export default SideBar;