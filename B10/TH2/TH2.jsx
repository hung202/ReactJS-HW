import React, { useState } from "react";
import styles from './style.module.css'
import styled from "styled-components";
export default function TH2() {
    const StyledText = styled.h2`
    color: ${(props) => {
            if (props.numClicked % 2 === 0) {
                return "blue";
            }
            return "red";
        }};
  `;
    const [numClicked, setNumClicked] = useState(0);
    const textStyle = (numClicked % 2 === 0) ? styles.textBlue : styles.textRed;
    const handleClick = () => {
        setNumClicked((current) => {
            return current = current + 1;
        });
    };
    return (
        <div className="App">
            <button onClick={handleClick}>Click here</button>
            <h3>Day la dung dung module</h3>
            <h2 className={textStyle}>You clicked {numClicked} times</h2>
            <h3>Day la dung inline</h3>

            <h2
                style={{
                    color: (numClicked % 2 === 0) ? 'blue' : 'red'
                }}
            >You clicked {numClicked} times
            </h2>
            <h3>Day la dung styled</h3>
            <StyledText numClicked={numClicked}>
                You clicked {numClicked} times
            </StyledText>

        </div>
    );
}