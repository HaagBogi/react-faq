import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import { logout} from "../features/user";
import {useNavigate} from "react-router-dom";

function Profile() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.value);
    const navigate = useNavigate();


    return (
        <Stack alignItems='center'>
            <Typography variant="h3" mt='20px'>
                Profile
            </Typography>
            <List sx={{ bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary="First name"
                        secondary={
                            user.firstname
                        }
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary="Last name"
                        secondary={
                            user.lastname
                        }
                    />
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary="Email"
                        secondary={
                            user.email
                        }
                    />
                </ListItem>
                <ListItem alignItems="center">
                    <ListItemButton
                        sx={{bgcolor:'primary.main', color:"white"}}
                        onClick={() => {
                            dispatch(logout());
                            localStorage.setItem('logged', '');
                            navigate('/');
                        }}
                    >Logout</ListItemButton>
                </ListItem>
            </List>
        </Stack>
    );

}

export default Profile;