import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function ErrorPage() {
    return (<Stack alignItems='center'>
        <Typography variant="h2" mt="20px">404 Error</Typography>
        <Typography variant="h4">The page not found!</Typography>
    </Stack>);
}