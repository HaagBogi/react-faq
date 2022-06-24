import * as React from 'react';
import Stack from '@mui/material/Stack';
import {Pagination} from "@mui/material";

export default function RoundedPagination() {
    return (
        <Stack spacing={2} alignItems="center">
            <Pagination count={5} variant="outlined" shape="rounded" showFirstButton showLastButton />
        </Stack>
    );
}
