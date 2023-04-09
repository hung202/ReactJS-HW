import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import styles from './style.module.css'

export default function BT1() {

    return (
        <div className={styles.layout}>
            <Sidebar />
            <Content />
        </div>
    )
}