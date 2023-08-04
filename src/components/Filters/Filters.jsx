import { CiFilter } from "react-icons/ci";
import { LiaSlidersHSolid } from "react-icons/lia";
import css from "./Filters.module.css"

export const Filters = ({ isMobile }) => {
    return (
        <div className={css.container}>
            <button className={css.category} type="button">
                {!isMobile && 
                    <span className={css.buttonText}>Category</span>
                } 
                <CiFilter style={{width: 24, height: 24}} />
            </button>
            <button className={css.sort} type="button">
                {!isMobile && 
                    <span className={css.buttonText}>Sort by</span>
                }
                <LiaSlidersHSolid style={{width: 24, height: 24}} />
            </button>
        </div>
    )
}