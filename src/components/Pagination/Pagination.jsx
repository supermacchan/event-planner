import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { 
    Section,
    PaginationContainer,
    ArrowButton,
    PagesContainer,
    PageButton
} from "./Pagination.styled";

export const Pagination = ({ isMobile }) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const pageButtons = document.querySelectorAll("#page");
        const pages = Array.from(pageButtons);

        pages.forEach(p => {
            if (Number(p.innerHTML) === currentPage) {
                p.style.color = "#7B61FF";
            } else {
                p.style.color = "#ACA7C3";
            }
        })
    }, [currentPage])

    const handlePageChange = (e) => {
        setCurrentPage(Number(e.target.innerHTML));
    }

    return (
        <Section>
            <PaginationContainer>
                <ArrowButton 
                    type="button" 
                    disabled={currentPage === 1 ? true : false}
                >
                    <AiOutlineLeft style={{width: 18, height: 18}} />
                </ArrowButton>
                    <PagesContainer>
                        <li>
                            <PageButton 
                                type="button"
                                id="page"
                                onClick={handlePageChange}
                            >
                                1
                            </PageButton>
                        </li>
                        <li>
                            <PageButton 
                                type="button"
                                id="page"
                                onClick={handlePageChange}
                            >
                                2
                            </PageButton>
                        </li>
                        {!isMobile &&
                        <li>
                            <PageButton 
                                type="button"
                                id="page"
                                onClick={handlePageChange}
                            >
                                3
                            </PageButton>
                        </li>
                        }
                        <li>
                            <PageButton 
                                type="button"
                            >
                                ...
                            </PageButton>
                        </li>
                        <li>
                            <PageButton 
                                type="button"
                                id="page"
                                onClick={handlePageChange}
                            >
                                32
                            </PageButton>
                        </li>
                    </PagesContainer>
                <ArrowButton 
                    type="button"
                    disabled={currentPage === 32 ? true : false}
                >
                    <AiOutlineRight style={{width: 18, height: 18}} />
                </ArrowButton>
            </PaginationContainer>
        </Section>
        
    )
}