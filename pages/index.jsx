import React from "react";
import styled from "styled-components";
import useWidth from "../hooks/useWidth";

const Wrapper = styled.div`
    width: 100%;
    padding: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    flex-wrap: wrap;
`;

const RoundBox = styled.div`
    width: 20%;
    min-width: 180px;
    height: ${props => props.w};

    background-color: ${(props) => props.minsu};
`

const App = () => {
    const width = useWidth();
    return (
        <Wrapper>
            <div></div>
        </Wrapper>
    )
};

export default App;