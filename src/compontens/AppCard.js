import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "20%",
    margin: "0 5% 30px 0",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  checkCircleIconActive: {
    color: "#47b334",
    // color: red[500],
  },
  checkCircleIconInactive: {
    color: red[500],
  },
}));

export default function AppCard({ data }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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

  const classActive = isActive ? "checkCircleIconActive" : "checkCircleIconInactive";

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <CheckCircleIcon className={classes[classActive]}/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name.first}
        subheader={name.last}
      />
      <CardMedia
        className={classes.media}
        image={picture}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Edad: {age}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Address: {address}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Phone: {phone}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {about}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
