import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { LT, GB, RU } from 'country-flag-icons/react/3x2'
import Link from 'next/link'
import { useRouter } from 'next/router'   


export default function FadeMenu() {
  const router = useRouter()
  const { pathname, asPath, query } = router
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {router.locale == 'lt' && <LT title="Lithuanian" className='languageSelectorFlag' />}
        {router.locale == 'en' && <GB title="English" className='languageSelectorFlag' />}
      </Button>
      <Menu
        disableScrollLock={ true }
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        elevation={0}
      >
        <MenuItem style={{background:'none', padding:'5px 0px'}} onClick={handleClose}>
        {/* <Link
              href='/'
              locale={router.locale === 'en' ? 'lt' : 'en'}>
              <button>
                {t('change_locale')}
              </button>
            </Link> */}
            
            
                {/* <Link href='/' locale={router.locale === 'en' ? 'lt' : 'en'}>
                  <Button>
                    {router.locale === 'en' ? <LT title="Lithuanian" className='languageSelectorFlag' /> : <GB title="English" className='languageSelectorFlag' />}
                  </Button>
                </Link> */}
            <div onClick={() => {router.push({ pathname, query }, asPath, { locale:router.locale === 'en' ? 'lt' : 'en' })}}>
            <Button>
              {router.locale === 'en' ? <LT title="Lithuanian" className='languageSelectorFlag' /> : <GB title="English" className='languageSelectorFlag' />}
            </Button>
            </div>
        </MenuItem>
      </Menu>
    </div>
  );
}