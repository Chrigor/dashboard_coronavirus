import styled from 'styled-components';

export const Container = styled.div`
    position:relative;
    display: grid;

    grid-template-columns: 400px auto; 
    grid-template-rows: 60px auto;
    grid-template-areas:
        "MH MH"
        "CG CM";

    grid-gap: 16px 8px;

    height: 100%;
    background: var(--secondary);
    box-sizing: border-box;
    margin: 0 auto;

    padding:8px 48px;

    @media (max-width: 1200px) {
        grid-template-columns: auto;  
        grid-template-rows: 80px auto auto;
        grid-gap:24px;
        grid-template-areas:
        "MH"
        "CG"
        "CM";
    }
`;