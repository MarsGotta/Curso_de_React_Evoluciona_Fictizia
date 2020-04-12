import React from "react";

// Material UI Dependencies:
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { green, red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Videocam from "@material-ui/icons/Videocam";
import VideocamOff from "@material-ui/icons/VideocamOff";
import ShareIcon from "@material-ui/icons/Share";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "20%",
    margin: "0 5% 30px 0",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  inactive: {
    backgroundColor: red[500],
  },
  active: {
    backgroundColor: green[500],
  },
}));

const AppFriend = ({ data }) => {
  const classes = useStyles();
  const {
    about,
    age,
    address,
    balance,
    email,
    isActive,
    name,
    phone,
    picture,
  } = data;
  const iconActive = isActive ? <Videocam /> : <VideocamOff />;
  const classActive = isActive ? "active" : "inactive";

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes[classActive]}>
            {iconActive}
          </Avatar>
        }
        title={`${name.first} ${name.last}`}
        subheader={balance}
      />
      <CardMedia
        className={classes.media}
        image={picture}
        title={`${name.first} ${name.last}' Avatar`}
      />
      <CardContent>
        <List>
          <ListItem>
            <ListItemText primary="Edad" secondary={age} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Teléfono" secondary={phone} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Dirección" secondary={address} />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText primary="Info" secondary={about} />
          </ListItem>
        </List>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default AppFriend;
