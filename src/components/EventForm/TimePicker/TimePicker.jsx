import { useState, useEffect } from "react";
import { hours, minutes, debounce } from "utils/timePicker";
import css from "./TimePicker.module.css";

export const TimePicker = ({ onClick }) => {
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [ampm, setAmpm] = useState('');

    let selectedButton = null;
    let currentScrollContainer = null;

    useEffect(() => {
        const container = document.getElementById('time-picker');
        const columns = container.querySelectorAll('.time-picker-column');

        columns.forEach(column => {
            column.addEventListener('scroll', debouncedScroll);
            // temp
            const firstButton = column.querySelector('.time-picker-button');
            firstButton.classList.add(css.selected);
        })

        return () => {
            columns.forEach(column => column.removeEventListener('scroll', debouncedScroll))
        }
    // eslint-disable-next-line
    }, [])

    const onContainerScroll = (event) => {
        currentScrollContainer = event.target;
        console.log(currentScrollContainer.id);

        const container = document.getElementById('time-picker');

        // Calculate the center of the container
        const containerHeight = container.clientHeight;
        const containerRect = container.getBoundingClientRect();
        const containerScrollTop = containerRect.top;
        const centralOffset = containerHeight / 2;
        
        const buttons = currentScrollContainer.querySelectorAll('.time-picker-button');

        // Listening to scroll event and locatin the button that is currently at the center
        markCentralButton(buttons, containerScrollTop, centralOffset)

        if (selectedButton) {
            // Calculate the desired scroll position to center the button
            const selectedButtonTop = selectedButton.getBoundingClientRect().top - containerScrollTop;
            const scrollOffset = selectedButtonTop - centralOffset + selectedButton.clientHeight / 2;
        
            // Set the scroll position to center the button
            currentScrollContainer.scrollTop += scrollOffset;

            console.log(selectedButton.innerText);
            
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
                    return;
            }

            console.log(`${hour}:${minute} ${ampm.toLowerCase()}`);
        }
    }

    const markCentralButton = (buttons, containerScrollTop, centralOffset) => {
        buttons.forEach((button) => {
            const buttonTop = button.getBoundingClientRect().top - containerScrollTop;
            const buttonBottom = buttonTop + button.clientHeight;
                
            if (buttonTop <= centralOffset && buttonBottom >= centralOffset) {
                button.classList.add(css.selected);
                selectedButton = button;
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
            onClick={onClick}
        >
            <ul className={`${css.timeOptions} time-picker-column`} id="hours">
                {hours.map(h => 
                    <li key={h}>
                        <button 
                            type="button"
                            className={`${css.timeButton} time-picker-button`}
                            onClick={e => setHour(e.target.innerText)}
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
                            onClick={e => setMinute(e.target.innerText)}
                        >{m}</button>
                    </li>
                )}
            </ul>

            <ul className={`${css.ampm} time-picker-column`} id="ampm">
                <li>
                    <button 
                        type="button"
                        className={`${css.ampmButton} time-picker-button`}
                        onClick={e => setAmpm(e.target.innerText)}
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