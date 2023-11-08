import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Dropdown } from '@mui/base/Dropdown';
import { MenuButton } from '@mui/base/MenuButton';
import { Menu } from '@mui/base/Menu';
import { Button } from '@mui/base';
import { MenuItem } from '@mui/base/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import MobileDropdownMenu from './MobileHamburgerMenu';
import { getSvgUrl } from '../utils/svgLoader';
import Avatar from '@mui/material/Avatar';
import MobileHamburgerMenu from './MobileHamburgerMenu';
interface NavbarProps {
    className?: string;
}

const LoveLogo = getSvgUrl('LoveLogo');
const AvatarJoy = getSvgUrl('Avatar');

const Navbar: React.FC<NavbarProps> = ({ className }) => {

    const createHandleMenuClick = (menuName: string) => {
        return () => {
          console.log(`Clicked on ${menuName}`);
        };
      };

    return (
      <div className={`text-[#fafafa] py-[0.25rem] h-[4rem] w-[100vw] flex justify-between items-center ${className}`}>
        <div>
        <img src={LoveLogo} className='ml-[1rem] xs:w-[2rem] xs:h-[2rem] sm:w-[3rem] sm:h-[3rem] lg:w-[3rem] lg:h-[3rem]' />
        </div>
        <div>
        </div>  
        <div className='lg:gap-2 xl:gap-4 lg:mr-[0.75rem] xl:mr-[1.5rem] sm:hidden xs:hidden md:hidden lg:flex xl: flex'>
          <Button className='transition-all duration-200  ease-in-out hover:bg-[#111111] hover:bg-opacity-50 hover:px-2 hover:py-1 hover:rounded-lg xl:px-2 lg:px-1 py-1 rounded-lg first-letter: antialiased'>
              Home
          </Button>
          <Button className='transition-all duration-200  ease-in-out hover:bg-[#111111] hover:bg-opacity-50 hover:px-2 hover:py-1 hover:rounded-lg xl:px-2 lg:px-1 py-1 rounded-lg first-letter: antialiased'>
              Search
          </Button>
          <Dropdown>
              <MenuButton className='flex items-center transition-all duration-200 ease-in-out hover:bg-[#111111] hover:bg-opacity-50 hover:px-2 hover:py-1 hover:rounded-lg xl:px-2 lg:px-1 py-1 rounded-lg first-letter: antialiased'>
                  Genres</MenuButton>
              <Menu className='!w-[12rem] p-[1rem] bg-[#111111] bg-opacity-90 text-center justify-center rounded-lg z-50'>
                  <MenuItem onClick={createHandleMenuClick('Profile')} className='cursor-pointer duration-200  ease-in-out hover:bg-[#e5e5e5] hover:mx-1 hover:bg-opacity-10 hover:px-6 hover:py-1 hover:rounded-lg px-6 py-1 text-[#fafafa]'
                  >Heartbreaking</MenuItem>
                  <MenuItem onClick={createHandleMenuClick('Settings')} className='cursor-pointer duration-200  ease-in-out hover:bg-[#e5e5e5] hover:mx-1 hover:bg-opacity-10 hover:px-6 hover:py-1 hover:rounded-lg px-6 py-1  text-[#fafafa]'>
                  K-Drama
                  </MenuItem>
                  <MenuItem onClick={createHandleMenuClick('Log out')} className='cursor-pointer duration-200  ease-in-out hover:bg-[#e5e5e5] hover:mx-1 hover:bg-opacity-10 hover:px-6 hover:py-1 hover:rounded-lg px-6 py-1  text-[#fafafa]'
                  >Western</MenuItem>
                  <MenuItem onClick={createHandleMenuClick('Log out')} className='cursor-pointer duration-200  ease-in-out hover:bg-[#e5e5e5] hover:mx-1 hover:bg-opacity-10 hover:px-6 hover:py-1 hover:rounded-lg px-6 py-1  text-[#fafafa]'
                  >Blockbuster</MenuItem>
                  <MenuItem onClick={createHandleMenuClick('Log out')} className='cursor-pointer duration-200  ease-in-out hover:bg-[#e5e5e5] hover:mx-1 hover:bg-opacity-10 hover:px-6 hover:py-1 hover:rounded-lg px-6 py-1  text-[#fafafa]'
                  >Indonesian</MenuItem>
                  <MenuItem onClick={createHandleMenuClick('Log out')} className='cursor-pointer duration-200  ease-in-out hover:bg-[#e5e5e5] hover:mx-1 hover:bg-opacity-10 hover:px-6 hover:py-1 hover:rounded-lg px-6 py-1  text-[#fafafa]'
                  >Coming of Age</MenuItem>
              </Menu>
          </Dropdown>
          <Button className='transition-all duration-200  ease-in-out hover:bg-[#111111] hover:bg-opacity-50 hover:px-2 hover:py-1 hover:rounded-lg xl:px-2 lg:px-1 py-1 rounded-lg first-letter: antialiased'>
              My List
          </Button>
          <Dropdown>
              <MenuButton className='cursor-pointer flex items-center transition-all duration-200 ease-in-out hover:bg-[#111111] hover:bg-opacity-50 hover:px-2 hover:py-1 hover:rounded-lg xl:px-2 lg:px-1 py-1 rounded-lg first-letter: antialiased'>
                  <Avatar className='mr-2 !w-[1.5rem] !h-[1.5rem]' src={AvatarJoy} />Ruby M.</MenuButton>
              <br />
              <Menu className='!w-[8rem] !mr-[2rem] p-[1rem] bg-[#111111] bg-opacity-90 text-center justify-center rounded-lg z-50'>
                  <MenuItem onClick={createHandleMenuClick('Profile')} className='cursor-pointer duration-200  ease-in-out hover:bg-[#e5e5e5] hover:mx-1 hover:bg-opacity-10 hover:px-4 hover:py-1 hover:rounded-lg px-4 py-1 text-[#fafafa]'>Profile</MenuItem>
                  <MenuItem onClick={createHandleMenuClick('Settings')} className='cursor-pointer duration-200  ease-in-out hover:bg-[#e5e5e5] hover:mx-1 hover:bg-opacity-10 hover:px-4 hover:py-1 hover:rounded-lg px-4 py-1  text-[#fafafa]'>
                  Settings
                  </MenuItem>
                  <MenuItem onClick={createHandleMenuClick('Log out')} className='cursor-pointer first-letter:duration-200  ease-in-out hover:bg-[#e5e5e5] hover:mx-1 hover:bg-opacity-10 hover:px-4 hover:py-1 hover:rounded-lg px-4 py-1  text-[#fafafa]'>Log out</MenuItem>
              </Menu>
          </Dropdown>
        </div>
        <div className='sm:flex xs:flex md:flex lg:hidden xl:hidden'>
          <MobileHamburgerMenu/>
        </div>
      </div>
    )
  }
  
export default Navbar