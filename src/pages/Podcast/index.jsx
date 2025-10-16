import React, { useState } from 'react';
import { Typography, Container } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MessageIcon from '@mui/icons-material/Message';
import styles from './index.module.css';
import banner_cast from '../../assets/banner_cast.jpeg'; // IMAGEM IMPORTADA AQUI

// --- PASSO 1: IMPORTE AS IMAGENS AQUI ---
import logoPrincipal from '../../assets/logo_cast.png';
import imagem1 from '../../assets/estrutura/1.png';
import imagem2 from '../../assets/estrutura/2.png';
import imagem3 from '../../assets/estrutura/3.png';
import imagem4 from '../../assets/estrutura/4.png';
import imagem5 from '../../assets/estrutura/5.png';
import imagem6 from '../../assets/estrutura/6.png';
import imagem7 from '../../assets/estrutura/7.png';
import imagem8 from '../../assets/estrutura/8.png';

const Podcast = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // --- PASSO 2: USE AS VARIÁVEIS IMPORTADAS NO ARRAY ---
  const images = [
    imagem1,
    imagem2,
    imagem3,
    imagem4,
    imagem5,
    imagem6,
    imagem7,
    imagem8,
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

  return (
    <div className={styles.podcastPage}>
      {/* Hero Section with Logo */}
      <section className={styles.heroSection} style={{ backgroundImage: `url(${banner_cast})` }}>
        <div className={styles.heroOverlay}></div> {/* Div para o filtro azulado */}
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <img src={logoPrincipal} alt="InfosferaCast Logo" className={styles.logo} />
          </div>
          <Typography variant="h2" className={styles.heroTitle}>
            InfosferaCast
          </Typography>
          <Typography variant="h5" className={styles.heroSubtitle}>
            Boas Práticas em Gestão da Informação na Esfera Pública
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
            <div className={styles.videoPlaceholder}>
              <YouTubeIcon sx={{ fontSize: 80, color: '#f39c12' }} />
              <Typography variant="h6" sx={{ marginTop: 2, color: '#666' }}>
                Vídeo de Apresentação
              </Typography>
              <Typography sx={{ color: '#999', marginTop: 1 }}>
                Cole aqui o embed do YouTube ou iframe do vídeo
              </Typography>
            </div>
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

      {/* Structure Carousel Section */}
      <section className={styles.structureSection}>
        <Container maxWidth="lg">
          <div className={styles.sectionHeader}>
            <Typography variant="h3" className={styles.sectionTitle}>
              Nossos Formatos
              <span className={styles.titleUnderline}></span>
            </Typography>
            <Typography className={styles.sectionSubtitle}>
              Conheça os diferentes tipos de conteúdo que produzimos
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