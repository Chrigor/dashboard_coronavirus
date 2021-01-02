import styled from 'styled-components';


export const ContainerSideGrapich = styled.div`
  grid-area: CG;
  background: var(--backgroundChart);
  border-radius:8px;

  display:flex;
  flex-direction:column;

  justify-content:space-around;

  padding:0px 8px 24px 8px;

  > div {
    flex:1;
    border-radius: 8px;
    
    box-sizing: border-box!important;
    max-height:260px;
  }

  > div + div {
    margin-top: 8px;
  }
`;

export const ContainerGrapichMain = styled.div`
  grid-area: CM;
  background: var(--backgroundChart);
  /* background: red; */

  border-radius:8px;

  display:flex;
  flex-direction:column;
  width:100%;

  justify-content:space-between;

  padding:8px;


  &:after {
    content: '';
  }

  .containerGrapichMain {
    display:flex;
    justify-content:center;
    align-items:center;
  }

  canvas {
    height: 100%!important;
    width: 94%!important;
    /* min-height:480px; */
  }
`;


export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content:center;
`;

export const TitleChart = styled.h1`
  color: var(--white);
  font-weight: 100;
  font-size: ${(props) => props.size ? props.size : 1.8}rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

