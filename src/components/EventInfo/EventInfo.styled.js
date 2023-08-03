import styled from 'styled-components';

export const Card = styled.div`
    width: 272px;

    margin-top: 24px;
    padding-bottom: 40px;

    border-radius: 8px;
    background-color: var(--white);
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

    @media screen and (min-width: 768px) {
        width: 688px;
    }

    @media screen and (min-width: 1280px) {
        width: 628px;
    }
`

export const ImageContainer = styled.div`
    width: 272px;
    height: 168px;
    overflow: hidden;

    border-radius: 8px;

    @media screen and (min-width: 768px) {
        width: 688px;
        height: 272px;
    }

    @media screen and (min-width: 1280px) {
        width: 628px;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 168px;

    object-fit: cover;

    border-radius: 8px;

    @media screen and (min-width: 768px) {
        height: 272px;
    }
`

export const Description = styled.p`
    padding: 24px 16px;

    color: #49454F;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;

    @media screen and (min-width: 768px) {
        padding: 24px;
    }

    @media screen and (min-width: 1280px) {
        padding: 20px 16px 12px 10px;
    }
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;

    padding: 0 16px;
    margin-bottom: 40px;

    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.42;
    text-transform: capitalize;

    @media screen and (min-width: 768px) {
        padding: 0 24px;
    }

    @media screen and (min-width: 1280px) {
        padding: 0 9px;
        margin-bottom: 24px;
    }
`

export const Category = styled.span`
    padding: 6px 12px;
    border-radius: 8px;

    background-color: var(--white);
    color: var(--purple);
    box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);
`

export const Priority = styled.span`
    padding: 6px 12px;
    border-radius: 8px;

    background-color: var(--white);
    color: var(--purple);
    box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);
`

export const Where = styled.span`
    padding: 6px 12px;
    border-radius: 8px;

    background-color: var(--white);
    color: var(--purple);
    box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);
`

export const When = styled.span`
    padding: 6px 12px;
    border-radius: 8px;

    background-color: var(--white);
    color: var(--purple);
    box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);

    font-weight: 400;
    text-transform: none;
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 16px;

    font-size: 12px;
    font-weight: 500;
    line-height: 1.33;
    text-align: center;

    @media screen and (min-width: 768px) {
        justify-content: flex-end;
        gap: 16px;
        padding: 0 24px;
    }

    @media screen and (min-width: 1280px) {
        padding: 0 40px;
    }
`

export const EditButton = styled.button`
    cursor: pointer;

    width: 108px;
    padding: 8px 16px;

    border-radius: 4px;
    border: 1px solid var(--purple);
    background-color: var(--white);
    color: var(--purple);

    @media screen and (min-width: 768px) {
        width: auto;
    }
`

export const DeleteButton = styled.button`
    cursor: pointer;

    padding: 8px 16px;

    border-radius: 4px;
    border: 1px solid var(--purple);
    background-color: var(--purple);
    color: var(--white);
`