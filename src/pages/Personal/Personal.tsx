import React, {useState} from 'react';
import './personal.css'
import Footer from "../../common/Footer/Footer";
import axios from "axios";
import {API} from "../../constants/path";

const Calendar = () => {

    const token = '6279718951:AAG5QiRh6uWP3vfGpN37BzPRenUYjY-uaxw'
    const chatid = '-913525624'

    const [selectedDate, setSelectedDate] = useState('');
    const [showTimeSelection, setShowTimeSelection] = useState(false);
    const [selectedTime, setSelectedTime] = useState('');

    const handleDateClick = (date: any) => {
        setSelectedDate(date);
        setShowTimeSelection(true);
    };

    const handleTimeSelect = (time: any) => {
        setSelectedTime(time);
    };
    const text = 'Пользователь: user2@mail.ru. Запись на тренировку 25 июнь. Время: 13:00. '
    const sendMessageToBot = () => {
        console.log(1)
        axios
            .get(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatid}&text=${text}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log('Ошибка отправки сообщения боту')
            });
        setShowTimeSelection(false);
    };
    const handleConfirm = () => {
        // Добавьте обработку выбранного времени
        console.log('Выбранное время:', selectedTime);
        setShowTimeSelection(false);

    };

    return (
        <div className="calendar">
            <table>
                <thead>
                <tr>
                    <th colSpan={7} className='calendar-name'>ИЮНЬ 2023</th>
                </tr>
                <tr>
                    <th className='calendar-days'>ПН</th>
                    <th className='calendar-days'>ВТ</th>
                    <th className='calendar-days'>СР</th>
                    <th className='calendar-days'>ЧТ</th>
                    <th className='calendar-days'>ПТ</th>
                    <th className='calendar-days'>СБ</th>
                    <th className='calendar-days'>ВС</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(1)}>
                            1
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(2)}>
                            2
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(3)}>
                            3
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(4)}>
                            4
                        </button>
                    </td>
                </tr>
                  <tr>
                    <td>
                        <button className="date" onClick={() => handleDateClick(5)}>
                            5
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(6)}>
                            6
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(7)}>
                            7
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(8)}>
                            8
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(8)}>
                            9
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(8)}>
                            10
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(8)}>
                            11
                        </button>
                    </td>
                  </tr>
                <tr>
                    <td>
                        <button className="date" onClick={() => handleDateClick(5)}>
                            12
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(6)}>
                            13
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(7)}>
                            14
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(8)}>
                            15
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(8)}>
                            16
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(8)}>
                            17
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(8)}>
                            18
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="date" onClick={() => handleDateClick(5)}>
                            19
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(6)}>
                            20
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(7)}>
                            21
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(8)}>
                            22
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(8)}>
                            23
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(8)}>
                            24
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(8)}>
                            25
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="date" onClick={() => handleDateClick(8)}>
                            26
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(8)}>
                            27
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(8)}>
                            28
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(8)}>
                            29
                        </button>
                    </td>
                    <td>
                        <button className="date" onClick={() => handleDateClick(8)}>
                            30
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            {showTimeSelection && (
                <div id="time-selection">
                    <label htmlFor="time" className='time-label'>Выберите время:</label>
                    <select className='time-select' id="time" value={selectedTime} onChange={(e) => handleTimeSelect(e.target.value)}>
                        <option className='time-option' value="10:00">10:00</option>
                        <option className='time-option' value="11:00">11:00</option>
                        <option className='time-option' value="12:00">12:00</option>
                        <option className='time-option' value="13:00">13:00</option>
                        <option className='time-option' value="14:00">14:00</option>
                        <option className='time-option' value="15:00">15:00</option>
                        <option className='time-option' value="16:00">16:00</option>
                        <option className='time-option' value="17:00">17:00</option>
                        <option className='time-option' value="18:00">18:00</option>
                        <option className='time-option' value="19:00">19:00</option>
                        <option className='time-option' value="20:00">20:00</option>
                    </select>
                    <button onClick={sendMessageToBot} className='submit-time-btn'>Подтвердить</button>
                </div>
            )}
        </div>
    );
};

function Personal() {
    return (
        <>
            <div className='calendar-container'>
                <Calendar />
            </div>
            <div className='schedule-footer-container'>
                <Footer />
            </div>
        </>
    );
}

export default Personal;