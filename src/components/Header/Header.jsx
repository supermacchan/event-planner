import { CiSearch } from "react-icons/ci";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import css from "./Dropdown.module.css";
import { 
    HeaderContainer,
    Content,
    Title,
    Search,
    Label,
    Input,
} from "./Header.styled";
// import { AiOutlineDown } from "react-icons/ai";

export const Header = () => {
    const options = [
        'UK', 'UA', 'EN'
    ];
    const defaultOption = options[0];

    return (
        <HeaderContainer>
            <Content>
                <Title>Event Planner</Title>
                <Dropdown 
                    options={options} 
                    value={defaultOption} 
                    className={css.dropdown}
                    controlClassName={css.control}
                    placeholderClassName={css.placeholder}
                    menuClassName={css.menu}
                    arrowClassName={css.arrow}
                    // arrowOpen={<AiOutlineDown width={30} />}
                />
                <Search>
                    <Label htmlFor="search">
                        <CiSearch style={{width: 24, height: 24}} />
                    </Label>
                    <Input 
                        type="text" 
                        name="search"
                        placeholder="Search by keywords"
                    />
                </Search>
            </Content>
        </HeaderContainer>
    )
}