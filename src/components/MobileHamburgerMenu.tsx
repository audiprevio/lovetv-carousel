import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { getSvgUrl } from '../utils/svgLoader';
import Avatar from '@mui/material/Avatar';
export default function MobileHamburgerMenu() {
  const [state, setState] = React.useState({
    right: false,
  });

  const LoveLogo = getSvgUrl('LoveLogo');
  const AvatarJoy = getSvgUrl('Avatar');

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <br/>
        {['Ruby Matthews'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'flex', flexDirection: 'column', fontWeight: 'semibold' }}>
            <ListItemButton className="mb-1 pb-1 flex flex-col justify-center">
              <ListItemIcon className='!min-w-[2rem]'>
                <Avatar className="text-[#d5d5d5] !h-[4rem] !w-[4rem] mb-[1rem]" src={AvatarJoy} />
              </ListItemIcon>
              <ListItemText primary={text} className="text-[#fffafa]" />
            </ListItemButton>
            <List>
            <Divider className='bg-[#222222] !my-[1rem] w-[12.5rem]'/>
            {['Account Settings', 'Billing', 'Log Out'].map((submenuItem) => (
            <ListItem 
                key={submenuItem} 
                className="!mt-[1rem] hover:bg-[#222222] hover:px-2 hover:rounded-lg align-middle" 
                sx={{ justifyContent: 'center' }}
            >
                <Typography component="p" className="text-[#e5e5e5] !font-regular pt-0 mt-0 text-center !font-sm">
                {submenuItem}
                </Typography>
            </ListItem>
            ))}
            <Divider className='bg-[#222222] !my-[1rem] w-[12.5rem]'/>
            {['My List', 'Genres', 'Search'].map((submenuItem) => (
            <ListItem 
                key={submenuItem} 
                className="!mt-[1rem] hover:bg-[#222222] hover:px-2 hover:rounded-lg" 
                sx={{ justifyContent: 'center' }}
            >
                <Typography component="p" className="text-[#e5e5e5] !font-regular pt-0 mt-0 text-center !font-sm">
                {submenuItem}
                </Typography>
            </ListItem>
            ))}
            </List>
        </ListItem>
        ))}
      </List>
      <div className='w-[15.625rem] flex justify-center'>
        <img src={LoveLogo} className='w-[4.76rem] h-[1.675rem] bottom-[2rem] absolute'/> 
      </div>
    </Box>
  );
  
  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className='hover:px-2 hover:py-2 hover:bg-[#222222] hover:bg-opacity-70'><MenuIcon className='text-[#fafafa]' /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{
                '& .MuiPaper-root': {
                  background: 'linear-gradient(180deg, #111111 1%, #060606 100%) !important',
                },
            }}
            >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}