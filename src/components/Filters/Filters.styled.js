import styled from 'styled-components';

export const Container = styled.div`
    display: flex;  
    justify-content: end;
    align-items: center;
    gap: 24px;
`

export const CategoryBtn = styled.button`
    cursor: pointer;

    padding: 16px;

    border: none;
    border-radius: 8px;
    background-color: var(--white);
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    color: var(--purple);
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
`

export const SortingBtn = styled.button`
    cursor: pointer;

    padding: 16px;

    border: none;
    border-radius: 8px;
    background-color: var(--white);
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    color: var(--dark-gray);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
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