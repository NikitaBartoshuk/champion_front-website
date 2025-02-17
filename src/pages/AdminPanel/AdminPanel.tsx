import React, {useEffect, useState} from 'react';
import './adminpanel.css'
import {useDispatch, useSelector} from "react-redux";
import {createBlog, getBlogs} from "../../stores/actions/blogAction";
import {createVacancie, getVacancies} from "../../stores/actions/vacanciesAction";
import {createShops} from "../../stores/actions/shopAction";
import {CSSTransition} from "react-transition-group";
import {isButtonElement} from "react-router-dom/dist/dom";

const AdminPanel = () => {
    interface Training {
        id: string;
        user: string;
        date: string;
        time: string;
    }

    const trainings: Training[] = [
        { id: '1', user: 'user1@mail.ru', date: '25', time: '10:00' },
        { id: '2', user: 'randomemail1@mail.ru', date: '3', time: '12:00' },
        { id: '3', user: 'example123@mail.ru', date: '17', time: '16:00' },
        { id: '4', user: 'user1@mail.ru', date: '9', time: '19:00' },
        { id: '5', user: 'user2@mail.ru', date: '29', time: '13:00' },
        { id: '6', user: 'randomemail2@mail.ru', date: '11', time: '18:00' },
        { id: '7', user: 'example9876@mail.ru', date: '7', time: '10:00' },
        { id: '8', user: 'email54321@mail.ru', date: '22', time: '14:00' },
        { id: '9', user: 'user3@mail.ru', date: '2', time: '20:00' },
        { id: '10', user: 'user1@mail.ru', date: '6', time: '15:00' },
        { id: '11', user: 'randomemail1@mail.ru', date: '13', time: '11:00' },
        { id: '12', user: 'randomemail1@mail.ru', date: '27', time: '17:00' },
        { id: '13', user: 'user4@mail.ru', date: '5', time: '10:00' },
        { id: '14', user: 'randomemail4@mail.ru', date: '18', time: '13:00' },
        { id: '15', user: 'example321@mail.ru', date: '10', time: '16:00' },
        { id: '16', user: 'randomemail1@mail.ru', date: '23', time: '19:00' },
        { id: '17', user: 'user5@mail.ru', date: '1', time: '14:00' },
        { id: '18', user: 'randomemail5@mail.ru', date: '16', time: '10:00' },
        { id: '19', user: 'randomemail1@mail.ru', date: '8', time: '12:00' },
        { id: '20', user: 'email9876@mail.ru', date: '24', time: '15:00' },
        { id: '21', user: 'user6@mail.ru', date: '12', time: '18:00' },
        { id: '22', user: 'randomemail6@mail.ru', date: '4', time: '11:00' },
        { id: '23', user: 'example567@mail.ru', date: '20', time: '17:00' },
        { id: '24', user: 'email3456@mail.ru', date: '14', time: '20:00' },
        { id: '25', user: 'user7@mail.ru', date: '28', time: '13:00' },
        { id: '26', user: 'randomemail7@mail.ru', date: '19', time: '10:00' },
        { id: '27', user: 'example876@mail.ru', date: '15', time: '12:00' },
        { id: '28', user: 'email7654@mail.ru', date: '26', time: '15:00' },
        { id: '29', user: 'user8@mail.ru', date: '21', time: '18:00' },
        { id: '30', user: 'randomemail8@mail.ru', date: '30', time: '11:00' },
        { id: '31', user: 'example234@mail.ru', date: '9', time: '17:00' },
        { id: '32', user: 'email8765@mail.ru', date: '3', time: '20:00' },
    ];

    let trainingsCopy: Training[] = trainings.slice()


    const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]


    const [filter, setFilter] = useState('')
    const [dateFilter, setDateFilter] = useState('')

    const [userInput, setUserInput] = useState('')
    const [trainingscopy, setTrainingscope] = useState(trainingsCopy)

    const handleUserInput = (event: any) => {
        setUserInput(event.target.value)
    }

    const handleSelectChange = (event: any): any => {
        setFilter(event.target.value)
    }

    const handleDateSelectChange = (event: any): any => {
        setDateFilter(event.target.value)
    }

    const filterSchedule = (flag: any) => {
        let updated: Training[] = []


        if (filter === 'user') {
            const user = userInput
            trainings.map(item => {
                if (item.user === user) {
                    updated.push(item)
                }
            })
        } else if (filter === 'date') {
            const date = dateFilter
            trainings.map(item => {
                if (item.date === date) {
                    updated.push(item)
                }
            })
        }

        setTrainingscope(updated)

        console.log(trainingsCopy)
    }


    const [showBlogPopup, setShowBlogPopup] = useState(false)
    const [showVacanciesPopup, setShowVacanciesPopup] = useState(false)
    const [showShopPopup, setShowShopPopup] = useState(false)

    const [showStatistic, setShowStatistic] = useState(false)

    const [blogCreateTitleInput, setBlogCreateTitleInput] = useState('')
    const [blogCreateDescriptionInput, setBlogCreateDescriptionInput] = useState('')
    const [vacancieCreateTitleInput, setVacanciesCreateTitleInput] = useState('')
    const [vacancieCreateDescriptionInput, setVacanciesCreateDescriptionInput] = useState('')
    const [shopCreateTitleInput, setShopCreateTitleInput] = useState('')
    const [shopCreateDescriptionInput, setShopCreateDescriptionInput] = useState('')
    const [shopCreateImageInput, setShopCreateImageInput] = useState('')

    const handleShowStatistic = () => {
        setShowStatistic(!showStatistic)
    }

    const handleBlogCreateTitleInput = (event: any) => {
        setBlogCreateTitleInput(event.target.value)
    }

    const handleBlogCreateDescriptionInput = (event: any) => {
        setBlogCreateDescriptionInput(event.target.value)
    }
    const handleVacanciesCreateTitleInput = (event: any) => {
        setVacanciesCreateTitleInput(event.target.value)
    }

    const handleVacanciesCreateDescriptionInput = (event: any) => {
        setVacanciesCreateDescriptionInput(event.target.value)
    }
    const handleShopCreateTitleInput = (event: any) => {
        setShopCreateTitleInput(event.target.value)
    }

    const handleShopCreateDescriptionInput = (event: any) => {
        setShopCreateDescriptionInput(event.target.value)
    }

    const handleShopCreateImageInput = (event: any) => {
        const file = event.target.files[0]; // Получить выбранный файл
        setShopCreateImageInput(file); // Сохранить файл в состоянии или передать его в действие
    }

    const handleBlogPopup = () => {
        setShowBlogPopup(!showBlogPopup)
    }
    const handleShopPopup = () => {
        setShowShopPopup(!showShopPopup)
    }
    const handleVacanciesPopup = () => {
        setShowVacanciesPopup(!showVacanciesPopup)
    }


    const dispatch = useDispatch()

    const blogs = useSelector((state: any )=> state.blog.blogs)

    useEffect(() => {
        dispatch(getBlogs())
    }, [])

    const createBlogs = () => {
        dispatch(createBlog(blogCreateTitleInput, blogCreateDescriptionInput))
    }

    const createVacancies = () => {
        dispatch(createVacancie(vacancieCreateTitleInput, vacancieCreateDescriptionInput))
    }

    const createShop = () => {
        dispatch(createShops(shopCreateTitleInput, shopCreateDescriptionInput, shopCreateImageInput))
    }


    return (
        <div className='admin-panel-container'>
            <div className='admin-box-container'>
                <span>БЛОГ</span>
                <button onClick={handleBlogPopup}>Добавить новость</button>
                <button>Удалить новость</button>
            </div>
            { showBlogPopup ?
                <div className='register-form'>
                    <div className='register-form-column'>
                        <button className='exit-form-btn' onClick={handleBlogPopup}>Назад</button>
                        <p className='register-form-column-row'>Блог</p>
                        <form className='register-form-popup'>
                            <input value={blogCreateTitleInput} onChange={handleBlogCreateTitleInput} placeholder='Название'/>
                            <input value={blogCreateDescriptionInput} onChange={handleBlogCreateDescriptionInput} placeholder='Описание'/>
                            <button className='register-btn' onClick={createBlogs}>Добавить новость</button>
                        </form>
                    </div>
                </div> : null
            }
            <div className='admin-box-container'>
                <span>ВАКАНСИИ</span>
                <button onClick={handleVacanciesPopup}>Добавить вакансию</button>
                <button>Удалить вакансию</button>
            </div>
            { showVacanciesPopup ?
                <div className='register-form'>
                    <div className='register-form-column'>
                        <button className='exit-form-btn' onClick={() => setShowVacanciesPopup(false)}>Назад</button>
                        <p className='register-form-column-row'>Вакансии</p>
                        <form className='register-form-popup'>
                            <input value={vacancieCreateTitleInput} onChange={handleVacanciesCreateTitleInput} placeholder='Название'/>
                            <input value={vacancieCreateDescriptionInput} onChange={handleVacanciesCreateDescriptionInput} placeholder='Описание'/>
                            <button className='register-btn' onClick={createVacancies}>Добавить вакансию</button>
                        </form>
                    </div>
                </div> : null
            }
            <div className='admin-box-container'>
                <span onClick={handleShopPopup}>МАГАЗИН</span>
                <button onClick={handleShopPopup}>Добавить товар</button>
                <button>Удалить товар</button>
            </div>
            { showShopPopup ?
                <div className='register-form'>
                    <div className='register-form-column'>
                        <button className='exit-form-btn' onClick={() => setShowShopPopup(false)}>Назад</button>
                        <p className='register-form-column-row'>Магазин</p>
                        <form className='register-form-popup' onSubmit={createShop}>
                            <input value={shopCreateTitleInput} onChange={handleShopCreateTitleInput} placeholder='Название'/>
                            <input value={shopCreateDescriptionInput} onChange={handleShopCreateDescriptionInput} placeholder='Описание'/>
                            <input type='file' onChange={handleShopCreateImageInput} placeholder='Описание'/>
                            <button className='register-btn'>Добавить товар</button>
                        </form>
                    </div>
                </div> : null
            }
            <span className='schedule-raw-schedule'>РАСПИСАНИЕ</span>
            <button className='admin-statistic-btn' onClick={handleShowStatistic}>Посмотреть статистику</button>
            {showStatistic ?
                <div className='statistic-blur'>
                    <div className='statistic-container'>
                        <button className='statistic-back-btn' onClick={handleShowStatistic}>Назад</button>
                        <table className='schedule-table'>
                            <thead>
                                <th>Занятий в этом месяце</th>
                                <th>Самое популярное время в этом месяце</th>
                                <th>Самое непопулярное время в этом месяце</th>
                                <th>Самое популярный день в этом месяце</th>
                                <th>Самое непопулярный день в этом месяце</th>
                                <th>Самый частый гость в этом месяце</th>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{trainings.length}</td>
                                <td>18:00</td>
                                <td>11:00</td>
                                <td>Пятница</td>
                                <td>Вторник</td>
                                <td>user1@mail.ru nbartoshuk@mail.ru daniil123@mail.ru</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div> : null
            }
            <div className='schedule-container'>
                <table className='schedule-table'>
                    <thead>
                        <tr>
                            <th>Пользователь</th>
                            <th>Дата записи</th>
                            <th>Время записи</th>
                        </tr>
                    </thead>
                    <tbody>
                    {trainingscopy.map((item) => (
                        <tr key={item.id}>
                            <td>{item.user}</td>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            <div className='schedule-buttons-container'>
                <span>Отфильтровать по </span>
                <select name="filter" id="" className='schedule-select' onChange={handleSelectChange}>
                    <option value="reset">Выберите опцию</option>
                    <option value="user">Пользователю</option>
                    <option value="date">Дате</option>
                </select>
                {filter === 'user' ?
                    <div>
                        <input className='filter-user-input' value={userInput} type="text" placeholder='введите почту пользователя' onChange={handleUserInput}/>
                        <button className='filter-user-btn' onClick={filterSchedule}>Отфильтровать</button>
                    </div>
                    : null
                }
            </div>
            {filter === 'date' ?
                <div className='schedule-buttons-container'>
                    <span>Выберите дату </span>
                    <select name="dates" id="" className='schedule-select' onChange={handleDateSelectChange}>
                        {dates.map((item) => (
                            <option value={item} key={item}>{item}</option>
                        ))}
                    </select>
                    <button className='schedule-filter-btn' onClick={filterSchedule}>Отфильтровать</button>
                </div> : null
            }
        </div>
    );
};

export default AdminPanel;