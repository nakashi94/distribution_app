import React, {FC} from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Paper, IconButton, InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import pencil from '../../assets/images/pencil.jpg';

const useStyle = makeStyles(() =>
    createStyles({
        background: {
            backgroundImage: `url(${pencil})`,
            backgroungSize: 'cover',
            height: '100vh',
        },

        paper: {
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            top: '33%',
            width: "45%",
        },
    }),
)


const TopMain: FC = () => {
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
