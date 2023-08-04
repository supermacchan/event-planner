import { DayPicker } from 'react-day-picker';
import css from './DatePicker.module.css';

export const DatePicker = ({
    startDate, 
    onSelect,
    onClose,
    onSave
}) => {
    const classNames = {
        caption: css.caption,
        caption_label: css.month,
        nav: css.nav,
        nav_button: css.navBtn,
        nav_icon: css.navIcon,
        table: css.table,
        head: css.head,
        head_cell: css.dayOfWeek,
        row: css.row,
        cell: css.cell,
        day: css.calendarDay,
        day_today: css.today,
        day_selected: css.selected
    };

    return (
        <>
            <DayPicker
                selected={startDate}
                mode="single"
                onSelect={onSelect}
                classNames={classNames}
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