import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    width: 272px;
    margin: 24px auto 136px auto;
    padding: 40px 16px;

    border-radius: 8px;
    background: var(--white);
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

    @media screen and (min-width: 768px) {
        width: 688px;
        padding: 40px 24px;
    }

    @media screen and (min-width: 1280px) {
        width: 1280px;
        padding: 40px 40px 54px 40px;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media screen and (min-width: 768px) {
        flex-wrap: wrap;
        column-gap: 25px;
        max-height: 520px;
    }

    @media screen and (min-width: 1280px) {
        max-height: 320px;
        column-gap: 42px;
    }
`

export const Label = styled.label`
    color: var(--purple);
    font-size: 16px;
    font-weight: 400;
    line-height: 1; 
    letter-spacing: 0.4px;

    margin-bottom: 8px;
`

export const Input = styled.input`
    padding: 15px 12px;

    border-radius: 8px;
    border: 1px solid var(--light-gray);
    color: var(--dark-gray);

    font-size: 16px;
    font-weight: 400;
    line-height: 1.5; 

    @media screen and (min-width: 768px) {
        width: 308px;
    }

    @media screen and (min-width: 1280px) {
        width: 372px;
    }
`

export const TextArea = styled.textarea`
    min-height: 156px;
    padding: 15px 12px;

    border-radius: 8px;
    border: 1px solid var(--light-gray);
    color: var(--dark-gray);

    font-size: 16px;
    font-weight: 400;
    line-height: 1.5; 

    @media screen and (min-width: 768px) {
        width: 308px;
    }

    @media screen and (min-width: 1280px) {
        width: 372px;
    }
`

export const Enabled = styled.div`
    display: flex;
    flex-direction: column;
`

export const Disabled = styled.div`
    display: flex;
    flex-direction: column;

    & label {
        color: var(--light-gray);
    } 
`

export const Button = styled.button`
    cursor: pointer;

    padding: 16px 12px;

    border: none;
    border-radius: 8px;
    background-color: var(--purple);
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
    color: var(--white);

    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;

    @media screen and (min-width: 768px) {
        align-self: flex-end;
        width: 193px;
        margin-top: 40px;
    }

    @media screen and (min-width: 1280px) {
        margin-top: 60px;
    }
`