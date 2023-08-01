import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;

    background-color: var(--bg);
    border-bottom: 1px solid var(--purple);
`

export const Content = styled.div`
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    max-width: 320px;
    margin: 0 auto;
    padding: 24px;

    @media screen and (min-width: 768px) {
        max-width: 768px;
        padding: 26px 40px 18px 40px;
    }

    @media screen and (min-width: 1280px) {
        max-width: 1280px;
        padding: 22px 80px;
    }
`

export const Title = styled.h1`
    color: var(--purple);
    font-size: 24px;
    font-weight: 400;
    line-height: normal;
`

export const Search = styled.div`
    width: 272px;
    height: 48px;
    padding: 12px;
    margin-top: 24px;

    display: flex;
    align-items: center;
    
    border-radius: 8px;
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

    @media screen and (min-width: 768px) {
        margin: 0;
        width: 368px;

        position: absolute;
        top: 26px;
        right: calc(40px + 69px + 24px);
    }

    @media screen and (min-width: 1280px) {
        width: 410px;
        top: 22px;
        right: calc(80px + 69px + 24px);
    }
`

export const Label = styled.label`
    color: var(--purple);
    width: 24px;
    height: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    border: none;
    margin-left: 12px;

    font-family: inherit;
    font-size: 14px;
    font-weight: 300;
    line-height: 1;

    &::placeholder {
        color: #888;
        font-size: 14px;
        font-weight: 300;
        line-height: 1;
    }
`