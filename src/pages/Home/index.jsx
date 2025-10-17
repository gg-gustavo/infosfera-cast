import { useState, useEffect, useRef } from 'react'

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MicIcon from '@mui/icons-material/Mic';
import PeopleIcon from '@mui/icons-material/People';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import MessageIcon from '@mui/icons-material/Message';
import styles from './index.module.css';
import banner_cast from '../../assets/banner_cast.jpeg';
import { Typography, Box, Grid, Card, } from '@mui/material';

const realizacaoLogos = Object.values(import.meta.glob('../../assets/realizacao/*.jpg', { eager: true, query: '?url', import: 'default' }));
const apoioLogos = Object.values(import.meta.glob('../../assets/apoio/*.jpg', { eager: true, query: '?url', import: 'default' }));

// Ícones para a seção de Temáticas
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import TableBarIcon from '@mui/icons-material/TableBar';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Home = () => {

  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardId = entry.target.dataset.id;
          setVisibleCards((prev) => new Set(prev).add(cardId));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    cardRefs.current.forEach((card) => { if (card) observer.observe(card); });
    return () => observer.disconnect();
  }, []);

  const tematicas = [
    { title: 'Entrevistas com especialistas', icon: <InterpreterModeIcon fontSize="large" /> },
    { title: 'Mesas redondas temáticas', icon: <TableBarIcon fontSize="large" /> },
    { title: 'Cortes com trechos de reflexão', icon: <EmojiObjectsIcon fontSize="large" /> },
    { title: 'Edição especial do Congresso Infosfera 2025', icon: <AutoAwesomeIcon fontSize="large" /> },
  ];

  const features = [
    {
      icon: MicIcon,
      title: 'Conteúdo Especializado e de Qualidade',
      description: 'Debates aprofundados sobre governança digital, proteção de dados, IA, ética e outros temas estratégicos para a gestão da informação no setor público.',
    },
    {
      icon: PeopleIcon,
      title: 'Abordagem Interdisciplinar e Diversa',
      description: 'Conectamos especialistas, gestores públicos, pesquisadores e a sociedade civil, promovendo a diversidade de vozes e a união entre teoria e prática.',
    },
    {
      icon: PodcastsIcon,
      title: 'Acesso Aberto e Democrático',
      description: 'Nossa missão é democratizar o conhecimento sobre a gestão da informação na esfera pública, fortalecendo uma sociedade mais transparente e informada.',
    },
  ];

  const navigateToPodcast = () => {
    // Navegação para página de podcasts
    console.log('Navegando para /podcast');
    // window.location.href = '/podcast';
  };

  const navigateToContact = () => {
    // Abre o cliente de e-mail com o endereço de contato
    window.location.href = 'mailto:infosferacast@infosfera.inf.br';
  };

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: `url(${banner_cast})` }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>InfosferaCast</h1>
          <p className={styles.heroSubtitle}>
            Seu podcast sobre Boas Práticas em Gestão da Informação na Esfera Pública
          </p>
          <div className={styles.heroCTA}>
            <button className={styles.btnPrimary} onClick={navigateToPodcast}>
              <PlayArrowIcon />
              Ouvir Agora
            </button>
            <button className={styles.btnSecondary} onClick={navigateToPodcast}>
              Ver Episódios
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.section}>
        <div className={styles.contentContainer}>
          {/*<div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Por que ouvir o InfosferaCast?
              <span className={styles.titleUnderline}></span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Seja referência em gestão da informação, tecnologia e governança pública
            </p>
          </div>*/}

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={styles.featureCard}
                  onClick={navigateToPodcast}
                >
                  <div className={styles.featureAccent}></div>
                  <div className={styles.featureIcon}>
                    <Icon sx={{ fontSize: 28 }} />
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      <Box className={`${styles.section} ${styles.sectionLight}`}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Nosso Formato</h2>
          </Box>
          <Grid container spacing={4} rowGap={10} columns={{ xs: 1, md: 12 }}>
            {tematicas.map((item, index) => (
              <Grid size={{ xs: 1, md: 3 }} key={item.title}>
                <Card
                  ref={(el) => (cardRefs.current[7 + index] = el)}
                  data-id={`tematica-${item.title.replace(/\s+/g, '-')}`}
                  className={`${styles.themeCard}`}
                >
                  <Box sx={{ display: "flex", justifyContent: "center", background:"linear-gradient(135deg,#2d2e82,#3d3e92)",padding:"20px",borderRadius:"15px !important", color:"white"}}>{item.icon}</Box>
                  <Typography variant="h6" sx={{textAlign:"center",marginTop:"20px"}} className={styles.themeCardTitle}>
                    {item.title}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      {/* CTA Section - Explorar Episódios */}
      <section className={styles.section}>
        <div className={styles.contentContainer}>
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Explore Nossos Episódios</h2>
            <p className={styles.ctaText}>
              O lançamento oficial está previsto para 2025. Acompanhe as novidades em nosso site e redes sociais.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.btnCtaPrimary} onClick={navigateToPodcast}>
                Conheça os Temas
                <ArrowForwardIcon />
              </button>
              <button className={styles.btnCtaSecondary} onClick={navigateToContact}>
                <MessageIcon />
                Entre em Contato
              </button>
            </div>
          </div>
        </div>
      </section>

      <Box className={styles.section}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Realização</h2>
          </Box>
          <Grid container spacing={4} columns={{ xs: 1, md: 4 }} className={styles.logoGridContainer}>
            {realizacaoLogos.map((logo, index) => (
              <Grid size={{ xs: 1, md: 1 }} key={index}>
                <Box className={styles.logoWrapper}>
                  <img src={logo} alt={`Logo Realização ${index + 1}`} className={styles.logoImage} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>

      <Box className={`${styles.section} ${styles.sectionLight}`}>
        <Box className={styles.contentContainer}>
          <Box className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Apoio</h2>
          </Box>
          <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }} className={styles.logoGridContainer}>
            {apoioLogos.map((logo, index) => (
              <Grid spacing={1} size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                <Box className={styles.logoWrapper}>
                  <img src={logo} alt={`Logo Apoio ${index + 1}`} className={styles.logoImage} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Home;