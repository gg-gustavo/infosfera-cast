import { useState } from 'react';
// Imports de UI e Grid
import { Typography, Container, Box, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// Ícones
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MessageIcon from '@mui/icons-material/Message';
// Ícones para a nova seção
import TrackChangesIcon from '@mui/icons-material/TrackChanges'; // Para Missão
import VisibilityIcon from '@mui/icons-material/Visibility';   // Para Visão
import StarIcon from '@mui/icons-material/Star';               // Para Valores

import styles from './index.module.css';
import banner_cast from '../../assets/banner_cast.jpeg';

/*import logoPrincipal from '../../assets/logo_cast.png';*/
import imagem1 from '../../assets/estrutura/1.png';
import imagem2 from '../../assets/estrutura/2.png';
import imagem3 from '../../assets/estrutura/3.png';
import imagem4 from '../../assets/estrutura/4.png';
import imagem5 from '../../assets/estrutura/5.png';
import imagem6 from '../../assets/estrutura/6.png';
import imagem7 from '../../assets/estrutura/7.png';
import imagem8 from '../../assets/estrutura/8.png';
import imagem9 from '../../assets/estrutura/9.png';

import videoLoop from '../../assets/video/1.mp4';

const Podcast = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    imagem1,
    imagem2,
    imagem3,
    imagem4,
    imagem5,
    imagem6,
    imagem7,
    imagem8,
    imagem9,
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com/@InfosferaCast', '_blank');
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:infosferacast@infosfera.inf.br';
  };

  // Lista de valores para o card
  const valores = [
    "Compromisso com a informação de qualidade",
    "Ética e responsabilidade no que diz respeito ao conteúdo",
    "Abordagem interdisciplinar e de caráter inovador",
    "Promoção da inclusão e diversidade de vozes",
    "Acesso aberto e democrático ao conhecimento"
  ];

  return (
    <div className={styles.podcastPage}>
      <section className={styles.heroSection} style={{ backgroundImage: `url(${banner_cast})` }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <Typography variant="h2" className={styles.heroTitle}>
            InfosferaCast
          </Typography>
          <Typography variant="h5" className={styles.heroSubtitle}>
            Seu podcast sobre Boas Práticas em Gestão da Informação na Esfera Pública
          </Typography>
          <button
            className={styles.youtubeButton}
            onClick={handleYouTubeClick}
          >
            <YouTubeIcon sx={{ fontSize: 28 }} />
            Acesse no YouTube
          </button>
        </div>
      </section>

      {/* Video Trailer Section */}
      <section className={styles.trailerSection}>
        <Container maxWidth="lg">
          <div className={styles.sectionHeader}>
            <Typography variant="h3" className={styles.sectionTitle}>
              Conheça o Projeto
              <span className={styles.titleUnderline}></span>
            </Typography>
            <Typography className={styles.sectionSubtitle}>
              Descubra o que torna o InfosferaCast único
            </Typography>
          </div>
          <div className={styles.videoContainer}>
            <video
              className={styles.videoPlayer}
              src={videoLoop}
              autoPlay
              loop
              muted
            >
              Seu navegador não suporta a tag de vídeo.
            </video>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <Container maxWidth="lg">
          <div className={styles.sectionHeader}>
            <Typography variant="h3" className={styles.sectionTitle}>
              O que é o InfosferaCast?
              <span className={styles.titleUnderline}></span>
            </Typography>
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.aboutCard}>
              <Typography className={styles.aboutText}>
                O <strong>InfosferaCast</strong> é o podcast oficial do projeto Infosfera, voltado à disseminação de conhecimento e ao fortalecimento das melhores práticas de gestão da informação na esfera pública. Com uma abordagem interdisciplinar e acessível, buscamos democratizar o conhecimento na área.
              </Typography>
              <Typography className={styles.aboutText}>
                A cada episódio, exploramos temas atuais e estratégicos como governança digital, proteção de dados, inteligência artificial e ética no setor público, transparência governamental e segurança informacional. Conectamos teoria e prática por meio do diálogo com especialistas, gestores públicos e pesquisadores.
              </Typography>
              <Typography className={styles.aboutText}>
                Nossa missão é disseminar a reflexão crítica sobre a gestão da informação, conectando especialistas, gestores, pesquisadores e a sociedade civil por meio de debates aprofundados para o desenvolvimento de uma sociedade mais informada, transparente e democrática.
              </Typography>
            </div>
          </div>
        </Container>
      </section>
      
      {/* ================================================================ */}
      {/* ======================= SEÇÃO ATUALIZADA ======================= */}
      {/* ================================================================ */}
      <Box className={styles.section}>
        <Container maxWidth={"md"} sx={{maxWidth:"80%", display:"flex", justifyContent:"center", alignItems:"center"}} >
          <Box className={styles.contentContainer}>
            <Grid container spacing={4} sx={{ maxWidth:"100%", display:"flex", justifyContent:"center",alignItems:"center"}}>

              <Grid sx={{margin:"5% auto"}}>
                <Card className={`${styles.infoCard} ${styles.visible}`}>
                  <Box className={styles.cardAccentBar} />
                  <CardContent>
                    <Box className={styles.cardHeader}>
                      <Box className={`${styles.cardIconWrapper} ${styles.iconPrimary}`}><TrackChangesIcon fontSize="large" /></Box>
                      <Typography variant="h3" className={styles.cardTitle}>Nossa Missão</Typography>
                    </Box>
                    <Typography className={styles.cardText}>
                      Disseminar e democratizar o conhecimento e reflexão crítica sobre a gestão da informação na esfera pública, conectando especialistas, gestores, pesquisadores e sociedade civil, por meio de conversas e debates aprofundados, qualificados e inspiradores.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid  sx={{margin:"5% auto"}}>
                <Card className={`${styles.infoCard} ${styles.visible}`}>
                  <Box className={`${styles.cardAccentBar} ${styles.accentSecondary}`} />
                  <CardContent>
                    <Box className={styles.cardHeader}>
                      <Box className={`${styles.cardIconWrapper} ${styles.iconSecondary}`}><VisibilityIcon fontSize="large" /></Box>
                      <Typography variant="h3" className={styles.cardTitle}>Nossa Visão</Typography>
                    </Box>
                    <Typography className={styles.cardText}>
                      O InfosferaCast tem como visão a consolidação como um dos principais canais brasileiros de reflexão e debate sobre o ecossistema da gestão da informação no âmbito da esfera pública, tornando-se referência nacional em podcasts a respeito desta temática, que unifica debates sobre informação, tecnologia e governança pública.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid  sx={{margin:"5% auto" , minWidth:"100%"}} >
                <Card sx={{height:"75%" }} className={`${styles.infoCard} ${styles.visible}`}>
                  <Box className={styles.cardAccentBar} />
                  <CardContent>
                    <Box className={styles.cardHeader}>
                      <Box className={`${styles.cardIconWrapper} ${styles.iconPrimary}`}><StarIcon fontSize="large" /></Box>
                      <Typography variant="h3" className={styles.cardTitle}>Nossos Valores</Typography>
                    </Box>
                    <List className={styles.valueList}>
                      {valores.map((valor, index) => (
                        <ListItem key={index}>
                          <ListItemIcon className={styles.valueListIcon}>
                            <StarIcon sx={{ fontSize: 16 }} />
                          </ListItemIcon>
                          <ListItemText primary={valor} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              
            </Grid>
          </Box>
        </Container>
      </Box>

      <section className={styles.structureSection}>
        <Container maxWidth="lg">
          <div className={styles.sectionHeader}>
            <Typography variant="h3" className={styles.sectionTitle}>
              Galeria de Fotos
              <span className={styles.titleUnderline}></span>
            </Typography>
          </div>
          <div className={styles.carouselContainer}>
            <button className={styles.carouselButton} onClick={prevImage}>
              <ArrowBackIcon />
            </button>
            <div className={styles.carouselImageWrapper}>
              <img
                src={images[currentImage]}
                alt={`Formato ${currentImage + 1}`}
                className={styles.carouselImage}
              />
              <div className={styles.carouselIndicators}>
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`${styles.indicator} ${index === currentImage ? styles.indicatorActive : ''}`}
                    onClick={() => setCurrentImage(index)}
                  ></span>
                ))}
              </div>
            </div>
            <button className={styles.carouselButton} onClick={nextImage}>
              <ArrowForwardIcon />
            </button>
          </div>
        </Container>
      </section>

      {/* Contact CTA Section */}
      <section className={styles.ctaSection}>
        <Container maxWidth="md">
          <div className={styles.ctaContent}>
            <Typography variant="h3" className={styles.ctaTitle}>
              Quer participar do InfosferaCast?
            </Typography>
            <Typography className={styles.ctaText}>
              Entre em contato conosco para parcerias, sugestões de pautas ou para ser nosso próximo convidado!
            </Typography>
            <button className={styles.contactButton} onClick={handleContactClick}>
              <MessageIcon />
              Fale Conosco
            </button>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Podcast;