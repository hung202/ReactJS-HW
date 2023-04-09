import React from "react";
import photoJpg from '../../../src/assets/download.jpg'
import base64 from '../../logo.svg'
export default function TH1() {
    return (
        <>
            <img src={photoJpg} alt="" srcset="" />

            <img src={require('../../../src/assets/download.jpg')} alt="" srcset="" />
            <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt="" srcset="" />
            <img src={base64} />
        </>

    )
} 