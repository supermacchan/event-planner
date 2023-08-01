import { CiFilter } from "react-icons/ci";
import { LiaSlidersHSolid } from "react-icons/lia";
import { 
    Container,
    CategoryBtn,
    SortingBtn,
    ButtonText
} from "./Filters.styled";

export const Filters = ({ isMobile }) => {
    return (
        <Container>
            <CategoryBtn type="button">
                {!isMobile && 
                    <ButtonText>Category</ButtonText>
                } 
                <CiFilter style={{width: 24, height: 24}} />
            </CategoryBtn>
            <SortingBtn type="button">
                {!isMobile && 
                    <ButtonText>Sort by</ButtonText>
                }
                <LiaSlidersHSolid style={{width: 24, height: 24}} />
            </SortingBtn>
        </Container>
    )
}