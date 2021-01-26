import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux'
import { uiOpenModal } from '../../actions/ui'
import { eventClearActiveEvent } from '../../actions/events';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  addIcon: {
      position: "absolute",
      bottom: 10,
      right: 10,
      zIndex: 4,
      backgroundColor: '#2196f3',
    '&:focus': {
        outline: 'none',
      backgroundColor: '#2196f3',

    }
  }
}));

export const  AddNewFab = () => {

  const classes = useStyles();

  const dispatch = useDispatch()

  const handleClickNew = () => {
      dispatch(uiOpenModal())
      dispatch( eventClearActiveEvent() )
  }

  return (
    <div style={{zIndex: 4 }} className="animate__animated animate__bounce">
      <Fab className={`${classes.addIcon} ${classes.root}`}color="primary" aria-label="add" onClick={handleClickNew}>
        <AddIcon />
      </Fab>
    </div>
  );
}