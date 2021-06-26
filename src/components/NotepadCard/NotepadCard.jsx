import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from '@material-ui/core/List';
import Popover from '@material-ui/core/Popover';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Edit from '@material-ui/icons/Edit';
import DeleteOutline from '@material-ui/icons/DeleteOutline';

import { dates } from '@utilities';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

const NotepadCard = (props) => {
console.log("#AR ~ file: NotepadCard.jsx ~ line 29 ~ NotepadCard ~ props", props);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { gis: { description, owner, created_at } } = props;

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={owner.avatar_url} className={classes.avatar} />
        }
        action={
          <IconButton aria-label="settings" onClick={handlePopoverOpen}>
            <MoreVertIcon />
          </IconButton>
        }
        title={description}
        subheader={dates.toDateFormat(created_at, dates.formats.long)}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <Edit />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DeleteOutline />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </ListItem>
      </List>
      </Popover>
    </Card>
  );
};

export default NotepadCard;