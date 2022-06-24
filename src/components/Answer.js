import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import Typography from "@mui/material/Typography";
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import {IconButton} from "@mui/material";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";

export default function Answer(props) {
    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
                primary={
                    <React.Fragment >
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {props.email}
                        </Typography>
                        {" — " + props.answer}
                    </React.Fragment>
                }
                secondary={
                    <Stack direction='row' justifyContent='flex-end' >
                        <IconButton color="primary" aria-label="like" component="span">
                            <Badge
                                badgeContent={4} color="success"
                            >
                                <ThumbUpOutlinedIcon />
                            </Badge>
                        </IconButton>
                        <IconButton color="primary" aria-label="dislike" component="span">
                            <Badge
                                badgeContent={1} color="error"
                            >
                                <ThumbDownOutlinedIcon />
                            </Badge>
                        </IconButton>
                    </Stack>
                }
            />
        </ListItem>
    );
}