import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './index.module.css';
import logo from '../../assets/logo.png';

const Header = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    /*{ label: 'Categorias e Regulamentos', path: '/categorias' },*/
    { label: 'Podcast', path: '/podcast' },
    /*{ label: 'Galeria', path: '/galeria' },*/
    { label: 'Contato', path: '/contato' },
  ];

  // Lógica para controlar o menu mobile
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <header>
      <AppBar position="static" className={styles.appBar} elevation={0}>
        <Toolbar sx={{ padding: { xs: '0 16px', md: '0 24px' } }}>
          {/* Logo do site */}
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img src={logo} alt="Logo Infosfera" className={styles.logo} />
            </Link>
          </Box>
          
          {/* Links de navegação para DESKTOP */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.label} color="inherit" component={Link} to={item.path}>
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Botão de menu para MOBILE */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {navItems.map((item) => (
                <MenuItem key={item.label} onClick={handleClose} component={Link} to={item.path}>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;