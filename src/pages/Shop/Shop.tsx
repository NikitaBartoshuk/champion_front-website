import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getShops} from "../../stores/actions/shopAction";
import './shop.css'
import blogImg from "../../assets/footerimage.svg";

interface IShopItemProps {
    title: string;
    description: string;
    img: string;
}

const ShopItem: FC<IShopItemProps> = ({title, description, img}) => {

    const [showPopup, setShowPopup] = useState(false)

    const handlePopup = () => {
        setShowPopup(!showPopup)
    }

    console.log(showPopup)

    return (
        <div className='shop-item-container'>
                {showPopup ?
                    <div className='shop-blur'>
                        <div className='shop-popup-container'>
                            <button className='shop-popup-back-btn' onClick={handlePopup}>Назад</button>
                            <span>{title}</span>
                            <img className='shop-item-img' src={process.env.REACT_APP_API_URL + img} alt="shop image"/>
                            <span className='shop-popup-description'>{description}</span>
                            <button className='shop-popup-order-btn'>Заказать</button>
                        </div>
                    </div>
                    : null
                }
                <span className='shop-item-row'>{title}</span>
                <img className='shop-item-img' onClick={handlePopup} src={process.env.REACT_APP_API_URL + img} alt="shop image"/>
        </div>
    )
}

const Shop = () => {

    const dispatch = useDispatch()

    const shops = useSelector((state: any) => state.shop.shops)

    useEffect(() => {
        dispatch(getShops())
    }, [])

    console.log(shops)


    return (
        <div className='shops-container'>
            {shops.items.map((item: any) => {
                return <ShopItem key={item.id} title={item.title} description={item.description} img={item.img}/>
            })}
        </div>
    );
};

export default Shop;