import React, { useState } from 'react';
import { Typography, Container } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MessageIcon from '@mui/icons-material/Message';
import styles from './index.module.css';

// --- PASSO 1: IMPORTE AS IMAGENS AQUI ---
import logoPrincipal from '../../assets/logo.png'; // Supondo que seu logo também está em assets
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
    console.log('Abrindo YouTube...');
    // window.open('URL_DO_YOUTUBE', '_blank');
  };

  const handleContactClick = () => {
    console.log('Navegando para /contato');
    // window.location.href = '/contato';
  };

  // OBS: Havia uma variável 'isPulsing' faltando no seu botão, removi por enquanto para evitar erros.
  // Também corrigi o caminho do logo para usar a variável importada.
  return (
    <div className={styles.podcastPage}>
      {/* Hero Section with Logo */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.logoContainer}>
            <img src={logoPrincipal} alt="Infocast Logo" className={styles.logo} />
          </div>
          <Typography variant="h2" className={styles.heroTitle}>
            Infocast
          </Typography>
          <Typography variant="h5" className={styles.heroSubtitle}>
            Tecnologia, Inovação e Futuro Digital
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
        {/* ... (o resto do seu código permanece o mesmo) ... */}
        <Container maxWidth="lg">
          <div className={styles.sectionHeader}>
            <Typography variant="h3" className={styles.sectionTitle}>
              Assista ao Trailer
              <span className={styles.titleUnderline}></span>
            </Typography>
            <Typography className={styles.sectionSubtitle}>
              Descubra o que torna o Infocast único
            </Typography>
          </div>
          <div className={styles.videoContainer}>
            <div className={styles.videoPlaceholder}>
              <YouTubeIcon sx={{ fontSize: 80, color: '#f39c12' }} />
              <Typography variant="h6" sx={{ marginTop: 2, color: '#666' }}>
                Vídeo do Trailer
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
              O que é o Infocast?
              <span className={styles.titleUnderline}></span>
            </Typography>
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.aboutCard}>
              <Typography className={styles.aboutText}>
                O <strong>Infocast</strong> é o seu podcast de referência sobre tecnologia, inovação e o futuro digital. 
                Criado para entusiastas, profissionais e curiosos da área tech, nosso podcast traz discussões profundas, 
                entrevistas exclusivas e análises sobre as tendências que estão moldando o mundo.
              </Typography>
              <Typography className={styles.aboutText}>
                A cada episódio, exploramos temas como inteligência artificial, desenvolvimento de software, 
                startups, cibersegurança, e muito mais. Nossa missão é democratizar o conhecimento tecnológico 
                e inspirar pessoas a criarem o futuro.
              </Typography>
              <Typography className={styles.aboutText}>
                Com uma produção profissional e conteúdo de alta qualidade, o Infocast é o companheiro perfeito 
                para quem quer se manter atualizado e inspirado no universo da tecnologia.
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
              Nossa Estrutura
              <span className={styles.titleUnderline}></span>
            </Typography>
            <Typography className={styles.sectionSubtitle}>
              Conheça o estúdio e equipamentos que tornam tudo possível
            </Typography>
          </div>
          <div className={styles.carouselContainer}>
            <button className={styles.carouselButton} onClick={prevImage}>
              <ArrowBackIcon />
            </button>
            <div className={styles.carouselImageWrapper}>
              <img 
                src={images[currentImage]} 
                alt={`Estrutura ${currentImage + 1}`} 
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
              Quer participar do Infocast?
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