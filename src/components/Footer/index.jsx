import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styles from './index.module.css'; // 1. Verifique se a importação está correta

const Footer = () => {
  return (
    <Box component="footer" className={styles.footer}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" color="inherit">
            {/* 2. GARANTA QUE O className={styles.iconButton} ESTÁ AQUI */}
            <IconButton color="inherit" aria-label="LinkedIn" className={styles.iconButton}>
              <LinkedInIcon />
            </IconButton>
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" color="inherit">
            {/* E AQUI */}
            <IconButton color="inherit" aria-label="Instagram" className={styles.iconButton}>
              <InstagramIcon />
            </IconButton>
          </Link>
          <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" color="inherit">
            {/* E AQUI TAMBÉM */}
            <IconButton color="inherit" aria-label="YouTube" className={styles.iconButton}>
              <YouTubeIcon />
            </IconButton>
          </Link>
        </Box>

        <Typography variant="body2" align="center" gutterBottom>
          Infosfera. Gestão da Informação na Esfera Pública
        </Typography>
        <Typography variant="caption" align="center" display="block">
          ©{new Date().getFullYear()}. INFOJUS. Núcleo de Pesquisa em Informação, Direito e Sociedade.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;