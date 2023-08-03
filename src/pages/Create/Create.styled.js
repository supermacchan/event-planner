import styled from 'styled-components';

export const Main = styled.main`
    padding: 40px 24px;
    margin: 0 auto;
    max-width: 320px;

    @media screen and (min-width: 768px) {
        max-width: 768px;
        padding: 40px;
    }

    @media screen and (min-width: 1280px) {
        max-width: 1280px;
        padding: 60px 0;
    }
`