import QuestionList from "../components/QuestionList";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";

function FilteredQuestionList(props) {
    return (
        <Stack alignItems='center'>
            <Typography variant="h3" mt='20px'>
                {props.title}
            </Typography>
            <QuestionList/>
        </Stack>
    );

}

export default FilteredQuestionList;