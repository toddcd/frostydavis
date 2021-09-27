import * as React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { Button, Menu, MenuItem, Toolbar, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Obituary from './components/Obituary';
import Home from './components/Home';
import Photos from './components/Photos';
import './App.css';

function App() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        return <Link to="/">Home</Link>;
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button'
                    }}
                >
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <MenuItem onClick={handleClose}>Home</MenuItem>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/obituary">
                        <MenuItem onClick={handleClose}>Obituary</MenuItem>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/photos">
                        <MenuItem onClick={handleClose}>Photos</MenuItem>
                    </Link>
                </Menu>
            </div>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/obituary'} component={Obituary} />
                <Route exact path={'/photos'} component={Photos} />
            </Switch>
        </div>
    );
}

export default App;
