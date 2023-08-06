import { useState, useEffect } from "react";
import { hours, minutes, debounce } from "utils/timePicker";
import css from "./TimePicker.module.css";

export const TimePicker = ({ 
    initialTime,
    saveTime
}) => {
    const [selectedHour, setselectedHour] = useState('01');
    const [selectedMinute, setSelectedMinute] = useState('00');
    const [selectedAmpm, setSelectedAmpm] = useState('am');

    const [hour, setHour] = useState('01');
    const [minute, setMinute] = useState('00');
    const [ampm, setAmpm] = useState('am');

    let selectedButton = null;
    let currentScrollContainer = null;

    useEffect(() => {
        const container = document.getElementById('time-picker');
        const columns = container.querySelectorAll('.time-picker-column');

        columns.forEach(column => {
            column.addEventListener('scroll', debouncedScroll);

            const buttons = column.querySelectorAll('.time-picker-button');
            buttons.forEach(button => {
                switch (column.id) {
                    case "hours":
                        if (button.innerText === selectedHour) {
                            button.classList.add(css.selected);
                        } else {
                            button.classList.remove(css.selected);
                        }
                        break;
                    case "minutes":
                        if (button.innerText === selectedMinute) {
                            button.classList.add(css.selected);
                        } else {
                            button.classList.remove(css.selected);
                        }
                        break;
                    case "ampm":
                        if (button.innerText === selectedAmpm) {
                            button.classList.add(css.selected);
                        } else {
                            button.classList.remove(css.selected);
                        }
                        break;
                    default:
                        break;
                }
            })
            // temp
            // const firstButton = column.querySelector('.time-picker-button');
            // firstButton.classList.add(css.selected);
        })

        return () => {
            columns.forEach(column => column.removeEventListener('scroll', debouncedScroll))
        }
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        return () => {
            saveTime(hour, minute, ampm);
        }
    }, [hour, minute, ampm, saveTime])

    useEffect(() => {
        // If the parent component provided an initial time, set the default selected time
        if (initialTime) {
            console.log(initialTime);
            const [initTime, initAmpm] = initialTime.split(' ');
            const [initHour, initMinute] = initTime.split(':');
            setselectedHour(initHour);
            setSelectedMinute(initMinute);
            setSelectedAmpm(initAmpm);
        } 
      }, [initialTime]);
    

    const onContainerScroll = (event) => {
        currentScrollContainer = event.target;

        const container = document.getElementById('time-picker');

        // Calculate the center of the container
        const containerHeight = container.clientHeight;
        const containerRect = container.getBoundingClientRect();
        const containerScrollTop = containerRect.top;
        const centralOffset = containerHeight / 2;
        
        const buttons = currentScrollContainer.querySelectorAll('.time-picker-button');

        // Listening to scroll event and locating the button that is currently at the center
        markCentralButton(buttons, containerScrollTop, centralOffset)

        if (selectedButton) {
            // Calculate the desired scroll position to center the button
            const selectedButtonTop = selectedButton.getBoundingClientRect().top - containerScrollTop;
            const scrollOffset = selectedButtonTop - centralOffset + selectedButton.clientHeight / 2;
        
            // Set the scroll position to center the button
            currentScrollContainer.scrollTop += scrollOffset;
        }
    }

    const markCentralButton = (buttons, containerScrollTop, centralOffset) => {
        buttons.forEach((button) => {
            const buttonTop = button.getBoundingClientRect().top - containerScrollTop;
            const buttonBottom = buttonTop + button.clientHeight;
                
            if (buttonTop <= centralOffset && buttonBottom >= centralOffset) {
                button.classList.add(css.selected);
                selectedButton = button;

                // Perform the state update based on the currentScrollContainer.id
                switch (currentScrollContainer.id) {
                    case "hours":
                        setHour(selectedButton.innerText);
                        break;
                    case "minutes":
                        setMinute(selectedButton.innerText);
                        break;
                    case "ampm":
                        setAmpm(selectedButton.innerText);
                        break;
                    default:
                        break;
                }
            } else {
                button.classList.remove(css.selected);
            }
        });
    }

    const debouncedScroll = debounce(onContainerScroll, 100); 

    return (
        <div 
            id="time-picker"
            className={css.container} 
        >
            <ul className={`${css.timeOptions} time-picker-column`} id="hours">
                {hours.map(h => 
                    <li key={h}>
                        <button 
                            type="button"
                            className={`${css.timeButton} time-picker-button`}
                            // onClick={e => setHour(e.target.innerText)}
                        >{h}</button>
                    </li>
                )}
            </ul>

            <span className={css.divider}>:</span>

            <ul className={`${css.timeOptions} time-picker-column`} id="minutes">
                {minutes.map(m => 
                    <li key={m}>
                        <button 
                            type="button"
                            className={`${css.timeButton} time-picker-button`}
                            // onClick={e => setMinute(e.target.innerText)}
                        >{m}</button>
                    </li>
                )}
            </ul>

            <ul className={`${css.ampm} time-picker-column`} id="ampm">
                <li>
                    <button 
                        type="button"
                        className={`${css.ampmButton} time-picker-button`}
                        // onClick={e => setAmpm(e.target.innerText)}
                    >AM</button>
                </li>
                <li>
                    <button 
                        type="button"
                        className={`${css.ampmButton} time-picker-button`}
                        onClick={e => setAmpm(e.target.innerText)}
                    >PM</button>
                </li>
            </ul>
        </div>
    )
}