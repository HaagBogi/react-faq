import * as React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import RoundedPagination from "./RoundedPagination";
import Stack from "@mui/material/Stack";
import Question from "./Question";
import { useSelector} from "react-redux";

export default function QuestionList() {
    const filter = useSelector((state) => state.filter.value);
    let questions = JSON.parse(localStorage.getItem('questions'));
    let filtered = [];
    let count = 1;
    if (questions != null) {
        if (filter.email != '') {
            let question;
            for ([,question] of questions.entries()) {
                if (filter.email == question.email) {
                    filtered.push(
                        <Question key={count.toString()} title={question.title} description={question.description}
                                  user={question.userfirst + question.userlast}/>,
                        <Divider key={(-1*count).toString()} variant="inset" component="li"/>
                    );
                    count++;
                }
            }
        } else if (filter.search != '') {
            let question;
            for ([,question] of questions.entries()) {
                if (question.title.includes(filter.value.search)) {
                    filtered.push(
                        <Question key={count.toString()} title={question.title} description={question.description}
                                  user={question.userfirst + question.userlast}/>,
                        <Divider key={(-1*count).toString()} variant="inset" component="li"/>
                    );
                    count++;
                }
            }
        } else {
            let question;
            for ([,question] of questions.entries()) {
                filtered.push(
                    <Question key={count.toString()} title={question.title} description={question.description}
                              user={question.userfirst + question.userlast}/>,
                    <Divider key={(-1*count).toString()} variant="inset" component="li"/>
                );
                count++;
            }
        }
    }

    return (
        <Stack width={'60%'}>
            <List sx={{ bgcolor: 'background.paper' }}>
                {filtered}
            </List>
            <RoundedPagination/>
        </Stack>
    );
}
