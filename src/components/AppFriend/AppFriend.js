import React, {useState} from "react";

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
import Videocam from "@material-ui/icons/Videocam";
import VideocamOff from "@material-ui/icons/VideocamOff";
import Collapse from '@material-ui/core/Collapse';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useAgeRange from "../../hooks/useAgeRange";

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
  expandOpen: {
    transform: 'rotate(180deg)',
    transition: 'transform ease .3s',
  },
  expandClose: {
    transform: 'rotate(0deg)',
    transition: 'transform ease .3s',
  },
  active: {
    backgroundColor: green[500],
  },
}));

const AppFriend = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
  const styleExpanded = expanded ? "expandOpen" : "expandClose";
  
  const ageRange = useAgeRange(age);

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
            <ListItemText primary="Categoría edad" secondary={ageRange} />
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
          
        </List>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={classes[styleExpanded]}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Mostrar Info"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List>
            <ListItem>
              <ListItemText primary="Info" secondary={about} />
            </ListItem>
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default AppFriend;
