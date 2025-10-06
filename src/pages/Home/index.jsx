import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MicIcon from '@mui/icons-material/Mic';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import MessageIcon from '@mui/icons-material/Message';
import styles from './index.module.css';

const Home = () => {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const stats = [
    { number: '150+', label: 'Episódios', icon: MicIcon },
    { number: '50K+', label: 'Ouvintes', icon: PeopleIcon },
    { number: '4.9★', label: 'Avaliação', icon: TrendingUpIcon },
  ];

  const features = [
    {
      icon: PodcastsIcon,
      title: 'Conteúdo de Qualidade',
      description: 'Episódios cuidadosamente produzidos com informações relevantes e insights valiosos sobre tecnologia, inovação e cultura digital.',
    },
    {
      icon: CalendarTodayIcon,
      title: 'Novos Episódios',
      description: 'Episódios semanais com os temas mais atuais e convidados especiais. Nunca fique por fora das novidades do mundo tech.',
    },
    {
      icon: VolumeUpIcon,
      title: 'Áudio Premium',
      description: 'Qualidade de áudio profissional para uma experiência imersiva. Ouça onde e quando quiser, do jeito que você preferir.',
    },
  ];

  const navigateToPodcast = () => {
    // Navegação para página de podcasts
    console.log('Navegando para /podcast');
    // window.location.href = '/podcast';
  };

  const navigateToContact = () => {
    // Navegação para página de contato
    console.log('Navegando para /contato');
    // window.location.href = '/contato';
  };

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Infocast</h1>
          <p className={styles.heroSubtitle}>
            Seu podcast de tecnologia, inovação e futuro digital
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

      {/* Stats Section */}
      <section className={styles.section}>
        <div className={styles.contentContainer}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`${styles.statCard} ${hoveredStat === index ? styles.statCardHover : ''}`}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  onClick={navigateToPodcast}
                >
                  <div className={styles.statIconWrapper}>
                    <Icon sx={{ fontSize: 40 }} />
                  </div>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Features Section */}
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Por que ouvir o Infocast?
              <span className={styles.titleUnderline}></span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Descubra as razões que fazem do Infocast o seu podcast favorito sobre tecnologia
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`${styles.featureCard} ${hoveredFeature === index ? styles.featureCardHover : ''}`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
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

      {/* CTA Section - Explorar Episódios */}
      <section className={styles.section}>
        <div className={styles.contentContainer}>
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Explore Nossos Episódios</h2>
            <p className={styles.ctaText}>
              Descubra conteúdos exclusivos sobre tecnologia, inovação e muito mais
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.btnCtaPrimary} onClick={navigateToPodcast}>
                Ver Todos os Episódios
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

      {/* Final CTA */}
      <section className={`${styles.section} ${styles.sectionFinal}`}>
        <div className={styles.contentContainer}>
          <div className={styles.finalCTA}>
            <h2 className={styles.sectionTitle}>
              Não perca nenhum episódio
              <span className={styles.titleUnderline}></span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Acesse nossa página de podcasts e fique por dentro de todos os episódios
            </p>
            <button className={styles.btnFinal} onClick={navigateToPodcast}>
              Acessar Página de Podcasts
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;