import React, { FC } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const TopHeader: FC = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <h2>Title</h2>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default TopHeader
