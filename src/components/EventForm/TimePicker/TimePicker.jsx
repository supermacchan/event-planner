import { useState, useEffect, useRef } from "react";
import { hours, minutes, debounce } from "utils/timePicker";
import css from "./TimePicker.module.css";

export const TimePicker = ({ 
    initialTime,
    saveTime,
    handleSelectTime
}) => {
    const [hour, setHour] = useState('01');
    const [minute, setMinute] = useState('00');
    const [ampm, setAmpm] = useState('am');

    const hourContainerRef = useRef(null);
    const minuteContainerRef = useRef(null);
    const ampmContainerRef = useRef(null);

    let selectedButton = null;
    let currentScrollContainer = null;

    useEffect(() => {
        const container = document.getElementById('time-picker');
        const columns = container.querySelectorAll('.time-picker-column');

        columns.forEach(column => {
            column.addEventListener('scroll', debouncedScroll);

            // Set the default selected button for "/create" page
            if(!initialTime) {
                const firstButton = column.querySelector('.time-picker-button');
                firstButton.classList.add(css.selected);
            }
        })

        return () => {
            columns.forEach(column => column.removeEventListener('scroll', debouncedScroll))
        }
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        return () => {
            saveTime(hour, minute, ampm);
            handleSelectTime();
        }
    // eslint-disable-next-line
    }, [hour, minute, ampm, saveTime])

    useEffect(() => {
        // If the parent component provided an initial time, set the default selected time
        if (initialTime) {
            const [initTime, initAmpm] = initialTime.split(' ');
            const [initHour, initMinute] = initTime.split(':');
            setHour(initHour);
            setMinute(initMinute);
            setAmpm(initAmpm);

            // Scroll to and mark the initial time button in each container
            scrollToAndMarkInitialButton(initHour, hourContainerRef.current);
            scrollToAndMarkInitialButton(initMinute, minuteContainerRef.current);
            scrollToAndMarkInitialButton(initAmpm, ampmContainerRef.current);
        } 
        // eslint-disable-next-line
      }, []);
    
      const scrollToAndMarkInitialButton = (value, containerRef) => {
        if (!containerRef) return;
    
        const buttons = containerRef.querySelectorAll('.time-picker-button');
        buttons.forEach((button) => {
          if (button.innerText.toLowerCase() === value) {
            button.classList.add(css.selected);
    
            // Center the selected button in the container
            const containerCenter = containerRef.clientHeight / 2;
            const selectedButtonTop = button.offsetTop;
            const scrollOffset = selectedButtonTop - containerCenter + button.clientHeight / 2;
            containerRef.scrollTop = scrollOffset;
          } else {
            button.classList.remove(css.selected);
          }
        });
      };

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

    const markCentralButton = async (buttons, containerScrollTop, centralOffset) => {
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
                        saveTime(selectedButton.innerText, minute, ampm);
                        break;
                    case "minutes":
                        setMinute(selectedButton.innerText);
                        saveTime(hour, selectedButton.innerText, ampm);
                        break;
                    case "ampm":
                        setAmpm(selectedButton.innerText);
                        saveTime(hour, minute, selectedButton.innerText);
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
            <ul 
                className={`${css.timeOptions} time-picker-column`} 
                id="hours"
                ref={hourContainerRef}
            >
                {hours.map(h => 
                    <li key={h}>
                        <button 
                            type="button"
                            className={`${css.timeButton} time-picker-button`}
                        >{h}</button>
                    </li>
                )}
            </ul>

            <span className={css.divider}>:</span>

            <ul 
                className={`${css.timeOptions} time-picker-column`} 
                id="minutes"
                ref={minuteContainerRef}
            >
                {minutes.map(m => 
                    <li key={m}>
                        <button 
                            type="button"
                            className={`${css.timeButton} time-picker-button`}
                        >{m}</button>
                    </li>
                )}
            </ul>

            <ul 
                className={`${css.ampm} time-picker-column`} 
                id="ampm"
                ref={ampmContainerRef}
            >
                <li>
                    <button 
                        type="button"
                        className={`${css.ampmButton} time-picker-button`}
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