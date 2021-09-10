import styled from "styled-components"
// whole main content container
export const MainWrapper = styled.section`
        /* border:4px solid yellow; */
        position: absolute;
        height: 90%;width:80vw;
        margin: 5%;
        top: 90px;
        left: 120px;
`;

// user intro
export const SectionA = styled.section`
    /* border: 2px solid grey; */
    margin-bottom:25px;
`;

// user keydata
export const SectionB = styled.section`
    /* border: 2px solid yellow; */
    width:20%; // 250px
    height:600px;
    float: right;
    &::after {
        content: "";
        display: block;
        clear: both;
    }
`;

// graph activity
export const SectionC = styled.section`
/* border: 2px solid pink; */
    height:325px;
    width: 75%; /* width: 57.986vw; 835px  */
    margin-bottom:25px;
    background-color:#FBFBFB;
`;

// graphs : 3 containers
export const SectionD = styled.section`
/* border: 5px solid green; */
    height:260px;
    width: 75%; /* width: 57.986vw; // 835px */
    display:flex;flex-flow:row nowrap;
    justify-content: space-between;
    margin-bottom:25px;
`;
