import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import css from "./Pagination.module.css";

export const Pagination = ({ isMobile }) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const pageButtons = document.querySelectorAll("#page");
        const pages = Array.from(pageButtons);

        pages.forEach(p => {
            if (Number(p.innerHTML) === currentPage) {
                p.classList.add(css.currentPage);
            } else {
                p.classList.remove(css.currentPage);
            }
        })
    }, [currentPage])

    const handlePageChange = (e) => {
        setCurrentPage(Number(e.target.innerHTML));
    }

    return (
        <div className={css.pagination}>
            <div className={css.container}>
                <button 
                    className={css.arrow}
                    type="button" 
                    disabled={currentPage === 1 ? true : false}
                >
                    <AiOutlineLeft style={{width: 18, height: 18}} />
                </button>
                    <ul className={css.pages}>
                        <li>
                            <button
                                className={css.page} 
                                type="button"
                                id="page"
                                onClick={handlePageChange}
                            >
                                1
                            </button>
                        </li>
                        <li>
                            <button
                                className={css.page}  
                                type="button"
                                id="page"
                                onClick={handlePageChange}
                            >
                                2
                            </button>
                        </li>
                        {!isMobile &&
                        <li>
                            <button
                                className={css.page}  
                                type="button"
                                id="page"
                                onClick={handlePageChange}
                            >
                                3
                            </button>
                        </li>
                        }
                        <li>
                            <button
                                className={css.page}  
                                type="button"
                            >
                                ...
                            </button>
                        </li>
                        <li>
                            <button
                                className={css.page}  
                                type="button"
                                id="page"
                                onClick={handlePageChange}
                            >
                                32
                            </button>
                        </li>
                    </ul>
                <button 
                    className={css.arrow} 
                    type="button"
                    disabled={currentPage === 32 ? true : false}
                >
                    <AiOutlineRight style={{width: 18, height: 18}} />
                </button>
            </div>
        </div>
        
    )
}