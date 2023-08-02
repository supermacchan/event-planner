import styled from 'styled-components';

export const Card = styled.div`
    position: relative;
    
    width: 271px;
    height: 480px;

    border-radius: 12px;
    background-color: var(--white);
    box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

    @media screen and (min-width: 768px) {
        width: 332px;
    }

    @media screen and (min-width: 1280px) {
        width: 302px;
    }

    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.63);
        transform: scale(1.03);
    }
`

export const Filters = styled.div`
    position: absolute;
    top: 12px;
    left: 12px;

    display: flex;
    align-items: center;
    gap: 12px;

    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.42;
    text-transform: capitalize;
`

export const Category = styled.span`
    padding: 6px 12px;
    border-radius: 8px;

    background-color: var(--white);
    color: var(--purple);
`

export const Priority = styled.span`
    padding: 6px 12px;
    border-radius: 8px;

    background-color: var(--white);
    color: var(--purple);
`

export const ImageContainer = styled.div`
    width: 271px;
    height: 336px;
    overflow: hidden;

    border-top-left-radius: 12px;
    border-top-right-radius: 12px;

    @media screen and (min-width: 768px) {
        width: 332px;
    }

    @media screen and (min-width: 1280px) {
        width: 302px;
    }
`

export const Image = styled.img`
    width: 100%;
    height: 336px;

    object-fit: cover;
`

export const Info = styled.div`
    position: absolute;
    top: 296px;
    left: 0;

    width: 100%;
    padding: 8px 16px;
    background: rgba(255, 255, 255, 0.80);
    /* box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); */

    display: flex;
    justify-content: space-between;
    align-items: center;

    color: var(--purple);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.71;
`

export const Title = styled.h3`
    padding: 16px 16px 8px 16px;

    color: #1C1B1F;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
`

export const Description = styled.p`
    padding: 8px 16px 16px 16px;

    color: #49454F;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42;
`

export const Button = styled.button`
    display: none;
`