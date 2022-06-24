import QuestionList from "../components/QuestionList";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";

function AllQuestionsPage() {

    return (
        <Stack alignItems='center'>
                <Typography variant="h3" mt='20px'>
                    All Questions
                </Typography>
                <QuestionList/>
        </Stack>
    );

}

export default AllQuestionsPage;