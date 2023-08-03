import styled from 'styled-components';

export const Button = styled.button`
    cursor: pointer;
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    margin-bottom: 25.5px;

    color: var(--purple);
    background-color: transparent;
    border: none;

    font-size: 14px;
    font-weight: 500;
    line-height: normal;

    @media screen and (min-width: 1280px) {
        margin-bottom: 18.5px;
    }
`