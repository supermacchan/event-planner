import styled from 'styled-components';

export const Menu = styled.div`
    @media screen and (min-width: 1280px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;

        margin-bottom: 40px;
    }
`

export const Buttons = styled.div`
    display: flex;  
    justify-content: end;
    align-items: center;
    gap: 24px;

    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        margin-bottom: 24px;
    }

    @media screen and (min-width: 1280px) {
        margin-bottom: 0;
    }
`

export const AddButton = styled.button`
    cursor: pointer;

    padding: 16px;

    border: none;
    border-radius: 8px;
    background-color: var(--purple);
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    color: var(--white);
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;

    @media screen and (min-width: 768px) {
        padding: 16px 12px;
    }
`

export const ButtonText = styled.span`
    display: none;

    @media screen and (min-width: 768px) {
        display: inline;
        font-size: 16px;
        font-weight: 500;
        line-height: normal;
    }
`

export const CardList = styled.ul`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 24px;

    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        margin-top: 24px;
    }

    @media screen and (min-width: 1280px) {
        grid-template-columns: repeat(4, 1fr);
    }
`