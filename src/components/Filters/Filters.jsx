import { CiFilter } from "react-icons/ci";
import { LiaSlidersHSolid } from "react-icons/lia"

export const Filters = () => {
    return (
        <div>
            <button type="button">
                Category <CiFilter />
            </button>
            <button type="button">
                Sort by <LiaSlidersHSolid />
            </button>
        </div>
    )
}