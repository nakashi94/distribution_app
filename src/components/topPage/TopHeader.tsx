import React, {FC} from 'react'
import {AppBar, Toolbar} from '@material-ui/core'

const TopHeader: FC = () => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <h1>Title</h1>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default TopHeader
