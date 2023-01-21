import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import appRoutes from "../routes/appRoutes";
import SidebarItem from "../components/nav-section/SidebarItem";
import SidebarItemCollapse from "../components/nav-section/SidebarItemCollapse";
import MenuIcon from '@mui/icons-material/Menu';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const MenuIconDrawer = () => {
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event && event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

    const list = (anchor: Anchor) => (
        <List>
            {appRoutes.map((route, index) =>
                route.sidebarProps ? (
                    route.child ?
                        (<SidebarItemCollapse item={route} key={index} />)
                        :
                        (<SidebarItem item={route} key={index} />)
                ) : null
            )}
        </List>
    );

    return (
        <div>
            {
                (['left'] as const).map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
                        <SwipeableDrawer anchor={anchor} open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                    </React.Fragment>
                ))
            }
        </div>
    );
}

export default MenuIconDrawer;