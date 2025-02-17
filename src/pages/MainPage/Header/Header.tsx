import React, {useState, FC} from 'react';
import './header.css'
import biglogo from '../../../assets/hero.png'
import {CSSTransition} from "react-transition-group";
import Button from "../../../common/Button/Button";

const trainingsForStudents = [{price: '22,80 BYN', training : '6 ТРЕНИРОВОК'}, {price: '29,60 BYN', training : '8 ТРЕНИРОВОК'},
    {price: '43,20 BYN', training : '12 ТРЕНИРОВОК'}, {price: '56,00 BYN', training : '16 ТРЕНИРОВОК'}]

const trainingsForUsual = [{price: '27,00 BYN', training : '6 ТРЕНИРОВОК'}, {price: '35,20 BYN', training : '8 ТРЕНИРОВОК'},
    {price: '51,60 BYN', training : '12 ТРЕНИРОВОК'}, {price: '67,20 BYN', training : '16 ТРЕНИРОВОК'}]

interface ITrainings {
    price: string;
    training: string;
}

interface TrainingsProps {
    trainings: ITrainings[]
}

const Trainings: FC<TrainingsProps> = ({trainings}) =>

        <div className='sub-icons-container'>
            { trainings.map(({price, training}) => (
                <div className='sub-unit' key={price }>
                    <div className='sub-img' />
                    <div className='caption-container'>
                        <p>{price}</p>
                        <p>{training}</p>
                    </div>
                </div>
            )) }
        </div>




const Header = () => {
    const [showPopup, setShowPopup] = useState(false)

    return (
            <div className='image-container'>
                <div className='inner-text'>
                    <div className='big-logo'>
                        <img src={biglogo} alt="big logo"/>
                        <span>С 2002 занимаемся оздоровлением народа, трансформируем жизни,<br/> проводя высококлассные тренировки с лучшими тренерами.</span>
                        <Button title='АБОНЕМЕНТЫ' buttonStyles='header-btn' onClick={() => setShowPopup(!showPopup)}/>
                        <CSSTransition in={showPopup} classNames='alert' timeout={300} unmountOnExit>
                            <div className='abonements-popup-container'>
                                <div className='sub-header-btn'>
                                    <button onClick={() => setShowPopup(!showPopup)} name="close-outline">EXIT</button>
                                </div>
                                <div className='row'>
                                    ДЛЯ СТУДЕНТОВ
                                </div>
                                <Trainings trainings={trainingsForStudents} />
                                <div className='row'>
                                    ДЛЯ ВСЕХ
                                </div>
                                <Trainings trainings={trainingsForUsual} />
                            </div>
                        </CSSTransition>
                    </div>
                </div>
            </div>
    );
}

export default Header;