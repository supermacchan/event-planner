import styled from 'styled-components';

export const Section = styled.div`
    @media screen and (min-width: 1280px) {
        text-align: right;
    }
`

export const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 10px;
    margin-top: 32px;

    border-radius: 8px;
    background-color: var(--white);

    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

    @media screen and (min-width: 768px) {
        gap: 40px;
    }

    @media screen and (min-width: 1280px) {
        display: inline-flex;
        gap: 20px;
    }
`

export const ArrowButton = styled.button`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    
    border: none;
    background-color: transparent;
    color: var(--purple);

    &:disabled {
        color: var(--light-gray);
    }

    @media screen and (min-width: 768px) {
        width: 64px;
        height: 64px;
        padding: 20px;
    }
`

export const PagesContainer = styled.ul`
    display: flex;
    align-items: center;

    @media screen and (min-width: 768px) {
        gap: 40px;
    }

    @media screen and (min-width: 1280px) {
        gap: 20px;
    }
`

export const PageButton = styled.button`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;
    padding: 6px 1px;

    border: none;
    border-radius: 6px;
    background-color: transparent;
    color: var(--light-gray);

    font-size: 18px;
    font-weight: 700;
    line-height: normal;

    @media screen and (min-width: 768px) {
        width: 64px;
        height: 64px;
        padding: 19px 1px 18px 1px;
    }
`