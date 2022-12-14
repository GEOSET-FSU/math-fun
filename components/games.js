import React from "react";
import styles from "./layout.module.css";
import Infocard from "./infocard";


export default class Games extends React.Component {
    render() {
        return (
            <div className={styles.vertical}>
                <h1>Math Games</h1>
                <div className={styles.infoCardHolder}>
                    <Infocard title="Nim" description="This is about Nim" linkDestination="/activities/nim" />
                    <Infocard title="Nim Variation" description="This is about Nim Variation" linkDestination="/activities/nim2" />
                    <Infocard title="Minesweeper" description="This is about Minesweeper" linkDestination="/activities/mines" />
                    <Infocard title="Card Switching" description="This is about Card Switching" linkDestination="/activities/cards" />
                    {/*
                <Infocard title="Tic Tac Toe (Computer Play needed)" description="This is about Tic Tac Toe" linkDestination="/activities/tictactoe" />

                <div>
                    <Link href="/activities/connect">
                        <a>Connect 4 (Computer Play needed)</a>
                    </Link>
                </div>

                <div>
                    <Link href="/activities/dotbox">
                        <a>Dots and Boxes (Computer Play needed)</a>
                    </Link>
                </div> */}
                </div>
            </div>
        );
    }
}