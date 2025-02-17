import React, {FC, useEffect} from 'react';
import NavBar from "../../common/NavBar/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {createVacancie, getVacancies} from "../../stores/actions/vacanciesAction";
import './vacancies.css'
import Footer from "../../common/Footer/Footer";
import blogImg from "../../assets/footerimage.svg";

interface IVacancieItemProps {
    title: string;
    description: string;
}


const VacancieItem: FC<IVacancieItemProps> = ({title, description}) => {
    return (
        <div className='vacancie-item-container'>
            <span className='vacancie-item-row'>{title}</span>
            <img className='vacancies-item-img' src={blogImg} alt="blog image"/>
            <p>{description}</p>
        </div>
    )
}

function Vacancies() {

    const dispatch = useDispatch()

    const vacancies = useSelector((state: any) => state.vacancies.vacancies)

    useEffect(() => {
        dispatch(getVacancies())
    }, [])

    console.log(vacancies)

    const createVacancies = () => {
        dispatch(createVacancie('Поломойщик', 'Крутой'))
    }

    return (
        <>
            <div className='vacancie-container'>
                {vacancies.items.map((item: any) => {
                    return <VacancieItem key={item.id} title={item.title} description={item.description} />
                })}
            </div>
            <Footer />
        </>
    );
}

export default Vacancies;