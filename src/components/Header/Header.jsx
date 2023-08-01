import { CiSearch } from "react-icons/ci";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export const Header = () => {
    const options = [
        'UK', 'EN'
      ];
    const defaultOption = options[0];

    return (
        <header>
            <h1>Event Planner</h1>
            <CiSearch width={24} height={24} />
            <input 
                type="text" 
                placeholder="Search by keywords"
            />
            <Dropdown options={options} value={defaultOption} />
        </header>
    )
}