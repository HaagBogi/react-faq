import {Avatar, Box, Button, Chip, TextField, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import * as React from "react";
import AnswerList from "../components/AnswerList";
import SendIcon from '@mui/icons-material/Send';
import {useParams} from 'react-router-dom';
import Question from "../components/Question";
import Divider from "@mui/material/Divider";
import {useSelector} from "react-redux";

export default function QuestionPage() {
    const user = useSelector((state) => state.user.value);
    const params = useParams();

    const title = params.questionTitle;
    let oneQuestion;
    let questions = JSON.parse(localStorage.getItem('questions'));
    //let count = 1;
    if (questions != null) {
        let question;
        for ([,question] of questions.entries()) {
            if (question.title == title) {
                oneQuestion = question;
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Valasz mentve');

        const data = new FormData(event.currentTarget);
        let answer = {
            email: user.email,
            title: oneQuestion.title,
            answer: data.get('newAnswer')
        };
        if (localStorage.getItem('answers') == null) {
            localStorage.setItem('answers', JSON.stringify([]));
        }
        let answers = JSON.parse(localStorage.getItem('answers'));
        answers.push(answer);
        localStorage.setItem('answers', JSON.stringify(answers));
    };


    return (
        <Stack alignItems='center' mt='20px' mb='30px'>
            <Typography variant='div' width='60%' mt={'40px'}>
                <Stack direction={'row'} spacing={2} mb={'10px'}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Typography variant='h4'>{oneQuestion.title}</Typography>
                </Stack>
                {oneQuestion.description}
            </Typography>
            <AnswerList title={oneQuestion.title}/>
            <Box
            width='60%'
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            >
                <TextField
                id="newAnswer"
                name="newAnswer"
                label="Write here your answer..."
                multiline
                fullWidth
                rows={5}
                />
                <Button sx={{ float: 'right'}} type={'submit'}><Chip icon={<SendIcon />} label="Send" variant="outlined" color="primary" clickable
                              sx={{padding: '2px 4px', marginTop: '5px', textAlign: 'right'}}/></Button>
            </Box>
        </Stack>

    );
}