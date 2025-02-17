import React, {useState} from 'react';
import './navbar.css'
import {IMG_PATHS, SHOP_PATH} from "../../constants/path";
import useScrollPosition from "../../hooks/useScrollPosition";
import { Link, useLocation } from 'react-router-dom'
import {PATH} from '../../constants/path'
import {useDispatch} from "react-redux";
// import map from '../../assets/map.jpg'

const NavBar = () => {

    const [showMap, setShowMap] = useState(false)

    const handleMapPopup = () => {
        setShowMap(!showMap)
    }

    const scrollPosition = useScrollPosition()

    const currentLocation = useLocation()

    const dispatch = useDispatch()

    return (
        <div className={scrollPosition > 0 ? 'navbar-scrolled' : 'navbar'}>
            <img className='main-logo' src={IMG_PATHS.navbarLogo} alt="gym logo"/>
            <div className='navbar-main-menu-container'>
                <ul className={scrollPosition > 0 || currentLocation.pathname !== '/' ? 'navbar-main-menu-row-scrolled' : 'navbar-main-menu-row'}>
                    {PATH.map((item) => (
                        <li key={item.link}>
                            <Link to={item.link}>{item.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='navbar-btns-container'>
                <button className='shop-btn'><Link to={SHOP_PATH.link} className='shop-btn-link'>{SHOP_PATH.text}</Link></button>
                <button className='findagym-btn' onClick={handleMapPopup}>Найти зал</button>
                {showMap ?
                    <div className='shop-blur'>
                        <div className='map-container'>
                            {/*<img className='map-img' src={map} alt="map"/>*/}
                            <button onClick={handleMapPopup}>Назад</button>
                        </div>
                    </div> : null
                }
            </div>
        </div>
    );
}

export default NavBar;