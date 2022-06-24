import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const theme = createTheme();

export default function NewQuestion() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let question = {
            email: user.email,
            userfirst: user.firstname,
            userlast: user.lastname,
            title: data.get('title'),
            description: data.get('description')
        };
        if (localStorage.getItem('questions') == null) {
            localStorage.setItem('questions', JSON.stringify([]));
        }
        let questions = JSON.parse(localStorage.getItem('questions'));
        questions.push(question);
        localStorage.setItem('questions', JSON.stringify(questions));
        navigate('/myquestions');
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth='60%'>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Make your question
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} width='60%'>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="title"
                                    label="Title"
                                    name="title"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="description"
                                    label="Description"
                                    id="description"
                                    multiline
                                    rows={5}
                                />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Send
                                </Button>

                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}