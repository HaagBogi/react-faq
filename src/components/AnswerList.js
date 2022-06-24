import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Answer from "./Answer";
import Question from "./Question";

export default function AnswerList(props) {
    let answers = JSON.parse(localStorage.getItem('answers'));
    let filtered = [];
    let count = 1;
    if (answers != null) {
        let answer;
        for ([, answer] of answers.entries()) {
            if (props.title == answer.title) {
                filtered.push(
                    <Answer key={count.toString()} answer={answer.answer} email={answer.email}/>,
                    <Divider key={(-1 * count).toString()} variant="inset" component="li"/>
                );
                count++;
            }
        }
    }

            return (
        <List sx={{ width: '60%', bgcolor: 'background.paper' }}>
            {filtered}
        </List>
    );
}
