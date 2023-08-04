import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import css from './DatePicker.module.css';

export const DatePicker = ({
    startDate, 
    onSelect,
    onClose,
    onSave
}) => {
    return (
        <>
            <DayPicker
                selected={startDate}
                mode="single"
                onSelect={onSelect}
            />

            <div className={css.actions}>
                <button 
                    type="button"
                    className={css.cancelBtn}
                    onClick={onClose}
                >
                    Cancel
                </button>
                <button 
                    type="button"
                    className={css.selectBtn}
                    onClick={onSave}
                >
                    Choose date
                </button>
            </div>
        </>
    );
}