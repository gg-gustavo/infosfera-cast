import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MicIcon from '@mui/icons-material/Mic';
import PeopleIcon from '@mui/icons-material/People';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import MessageIcon from '@mui/icons-material/Message';
import styles from './index.module.css';
import banner_cast from '../../assets/banner_cast.jpeg'; // IMAGEM IMPORTADA AQUI

const Home = () => {

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
            Boas Práticas em Gestão da Informação na Esfera Pública
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
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Por que ouvir o InfosferaCast?
              <span className={styles.titleUnderline}></span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Seja referência em gestão da informação, tecnologia e governança pública
            </p>
          </div>

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

      {/* CTA Section - Explorar Episódios */}
      <section className={styles.section}>
        <div className={styles.contentContainer}>
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Explore Nossos Futuros Episódios</h2>
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

      {/* Final CTA */}
      <section className={`${styles.section} ${styles.sectionFinal}`}>
        <div className={styles.contentContainer}>
          <div className={styles.finalCTA}>
            <h2 className={styles.sectionTitle}>
              Não perca a estreia
              <span className={styles.titleUnderline}></span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Acesse nossa página de podcasts e fique por dentro de todos os preparativos para o lançamento.
            </p>
            <button className={styles.btnFinal} onClick={navigateToPodcast}>
              Acessar Página do Podcast
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;