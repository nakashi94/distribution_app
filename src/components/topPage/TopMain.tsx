import React, { FC } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import pencil from '../../assets/images/pencil.jpg';

const useStyle = makeStyles(() =>
  createStyles({
    background: {
      backgroundImage: `url(${pencil})`,
      backgroundSize: 'cover',
      height: '100vh',
    },

    paper: {
      position: 'relative',
      marginLeft: "auto",
      marginRight: "auto",
      top: "33%",
      width: "45%",
    }
  }),
)

const TopMain = () => {
  const classes = useStyle();
  return (
    <div className={classes.background}>
      <Paper className={classes.paper}>
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
        <InputBase
          placeholder="無料素材を検索"
        />
      </Paper>
    </div>
  )
}

export default TopMain
