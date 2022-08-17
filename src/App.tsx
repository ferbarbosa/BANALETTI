import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next"
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { motion } from "framer-motion"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

import backgroundgif from './imgs/backgroundgif.gif';
import hokkaidoimg from './imgs/HOKKAIDO.png';
import soonimg from './imgs/soon.png';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "Full Stack": "Full Stack Developer",
          "Presentation": "Hello! my name is Fernando Banaletti, i'm a Full Stack developer with focus in Typescript, React and Node.js.",
          "About": "About",
          "About-text": "You already know about me",
          "Projects": "Projects",
          "Contact": "Contact",
          "Contact name": "Name",
          "Contact email": "Email",
          "Contact message": "Message",
          "Contact send": "Send",
          "Menu home": "Home",
          "Menu about": "About",
          "Menu projects": "Projects",
          "Menu contact": "Contact",
          "Menu skills": "Skills",
          "Wellcome": "Hello...",
          "Contact-text": "If you want to contact me, dm on linkedin and I'll get back to you as soon as possible.",
          "Hokkaido": "Hokkaido is a clothing store project with minimalist and functional design. It's a web application that allows you to buy clothes and accessories from a store.",
          "Skills text": "I have a lot of skills, but the most important ones are:",

        }
      },
      pt: {
        translation: {
          "Full Stack": "Desenvolvedor Full Stack",
          "Presentation": "Olá! Meu nome é Fernando Banaletti, Sou um desenvolvedor Full Stack com foco em Typescript, React e Node.js.",
          "About": "Sobre",
          "About-text": "Comecei na área de programação por hobbie, brincando com html e css. Aos 19 anos entrei para um curso técnico de Desenvolvimento de sistemas, onde dei entrada realmente a programação.",
          "About-text2": "Após um ano de curso técnico, decidi entrar em um curso superior, onde me formei no ano de 2022.",
          "About-text3": "Atualmente estou focando na linguagem Typescript com React e Node.js. Além disso estou em busca da minha primeira oportunidade profissional de trabalhar na area.",
          "Projects": "Projetos",
          "Contact": "Contato",
          "Contact name": 'Nome',
          "Contact email": 'Email',
          "Contact message": 'Mensagem',
          "Contact send": 'Enviar',
          "Menu home": "Inicio",
          "Menu about": "Sobre",
          "Menu projects": "Projetos",
          "Menu contact": "Contato",
          "Menu skills": "Habilidades",
          "Contact-text": "Se você quiser entrar em contato, use o linkedin e eu responderei assim que possivel.",
          "Wellcome": "Olá...",
          "Hokkaido": "Hokkaido é um projeto de uma loja online, com design minimalista e funcional, que tem como objetivo a venda de produtos de diversas categorias, como: camisetas, calças, sapatos, etc. ",
          "Skills text": "Tenho algumas habilidades, destacando:",
        }
      }
    },
    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

function App() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const [page, setPage] = useState<string>('loading');
  const [loaded, setLoaded] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (!loaded) {
      setTimeout(() => {
        setPage('home');
        setLoaded(true);
      }, 2000);
    }

  }, [language, page]);

  const handleLanguageChange = (lang: any) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  }

  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className='background-div'
      >
        <img src={backgroundgif} alt="background" />
      </motion.div>
      <div className="App-header">
        <Container maxWidth="xl">
          {page === 'loading' ?
            <div className="typewriter">
              <h1>{t("Wellcome")}</h1>
            </div>
            :
            <Grid container spacing={1}>
              <Grid item xs={0} md={2}>
                <motion.div
                  className='nav'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                >
                  <motion.button onClick={() => setPage('home')}
                    whileHover={{
                      scale: 1.4,
                      transition: { duration: 1 },
                      animation: "easeInOut"
                    }}
                  >{t("Menu home")}</motion.button>
                  <motion.button
                    onClick={() => setPage('about')}
                    whileHover={{
                      scale: 1.4,
                      transition: { duration: 1 },
                      animation: "easeInOut"
                    }}
                    whileTap={{ scale: 0.9 }}
                  >{t("Menu about")}</motion.button>
                  <motion.button
                    onClick={() => setPage('skills')}
                    whileHover={{
                      scale: 1.4,
                      transition: { duration: 1 },
                      animation: "easeInOut"
                    }}
                    whileTap={{ scale: 0.9 }}
                  >{t("Menu skills")}</motion.button>
                  <motion.button
                    onClick={() => setPage('projects')}
                    whileHover={{
                      scale: 1.4,
                      transition: { duration: 1 },
                      animation: "easeInOut"
                    }}
                  >{t("Menu projects")}</motion.button>
                  <motion.button onClick={() => setPage('contact')}
                    whileHover={{
                      scale: 1.4,
                      transition: { duration: 1 },
                      animation: "easeInOut"
                    }}
                  >{t("Menu contact")}</motion.button>
                  <motion.a 
                    whileHover={{
                      scale: 1.4,
                      transition: { duration: 1 },
                      animation: "easeInOut"
                    }}
                    href="https://github.com/ferbarbosa" target="_blank" style={{ marginTop: '20px' }}
                  >
                    <GitHubIcon fontSize='large' sx={{ color: 'white', marginRight: '20px' }} />
                  </motion.a>
                  <motion.a 
                    whileHover={{
                      scale: 1.4,
                      transition: { duration: 1 },
                      animation: "easeInOut"
                    }}
                    href="https://www.linkedin.com/in/fernandobanalettibarbosa/" target="_blank" style={{ marginTop: '20px' }}>
                    <LinkedInIcon fontSize='large' sx={{ color: 'white', marginRight: '20px' }} />
                  </motion.a>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={10}>

                {page === 'home' ?
                  <div>
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={2}>
                        <div className='logo-mobile'>
                          <h2>Fernando</h2>
                          <h2>Banaletti</h2>
                        </div>
                        <div className='logo'>
                          <h2 className="rotate waviy"><span className='.FLetter'>F</span>ern<span className='.ALetter'>a</span>ndo</h2>
                          <h2 className='rotate'>Banaletti</h2>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={10} className='presentation-area'>
                        <motion.span
                          key={page}
                          initial={{ opacity: 0, y: -100 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -100 }}
                          transition={{ duration: 1 }}
                        >
                          <h3>{t('Full Stack')}</h3>
                          <p>{t('Presentation')}</p>
                        </motion.span>

                      </Grid>
                    </Grid>
                  </div>
                  : null
                }
                {page === 'about' ?

                  <div
                  >
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={2}>
                        <div className='logo'>
                          <h2 className="rotate waviy"><span className='.FLetter'>F</span>ern<span className='.ALetter'>a</span>ndo</h2>
                          <h2 className='rotate'>Banaletti</h2>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={10} className='presentation-area'>
                        <motion.span
                          key={page}
                          initial={{ opacity: 0, y: -100 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -100 }}
                          transition={{ duration: 1 }}
                        >
                          <h3>{t('About')}</h3>
                          <div className="about-txt">
                            <p>{t('About-text')}</p>
                            <p>{t('About-text2')}</p>
                            <p>{t('About-text3')}</p>
                          </div>
                        </motion.span>
                      </Grid>
                    </Grid>
                  </div>
                  : null
                }
                {page === 'projects' ?

                  <div
                  >
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={2}>
                        <div className='logo'>
                          <h2 className="rotate waviy"><span className='.FLetter'>F</span>ern<span className='.ALetter'>a</span>ndo</h2>
                          <h2 className='rotate'>Banaletti</h2>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={10} className='presentation-area'>
                        <motion.span
                          key={page}
                          initial={{ opacity: 0, y: -100 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -100 }}
                          transition={{ duration: 1 }}
                        >
                          <h3>{t('Projects')}</h3>
                          <div className='projects-area'>
                            <div className='project-item'>
                              <motion.img
                                src={hokkaidoimg}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2 }}
                              />
                              <div>
                                <motion.h4
                                  initial={{ opacity: 0, y: -20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 2 }}
                                >HOKKAIDO</motion.h4>
                                <motion.p
                                  initial={{ opacity: 0, y: -20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 2 }}
                                >{t('Hokkaido')}</motion.p>
                                <motion.div
                                  className='tags'
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 2 }}
                                >
                                  <p style={{ borderColor: "#3178C6", color: "#3178C6" }}>TypeScript</p>
                                  <p style={{ borderColor: "#61DAFB", color: "#61DAFB" }}>REACT</p>
                                  <p style={{ borderColor: "#0A7108", color: "#0A7108" }}>Node.js</p>
                                  <p style={{ borderColor: "#13AA51", color: "#13AA51" }}>MongoDB</p>
                                  <p style={{ borderColor: "#2EA1FF", color: "#2EA1FF" }}>Express</p>
                                  <p style={{ borderColor: "rgb(103, 29, 223)", color: "rgb(103, 29, 223)" }}>Axios</p>
                                </motion.div>
                                <motion.div className='item-links'
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 2 }}
                                >
                                  <p className="links-txt">Links: </p>
                                  <a href="https://github.com/ferbarbosa/Hokkaido-API" target="_blank">API</a>
                                  <a href="https://github.com/ferbarbosa/HOKKAIDO" target="_blank" >Front-End</a>
                                  <a href="http://hokkaidostore.netlify.app" target="_blank">Demo</a>
                                </motion.div>
                              </div>
                            </div>
                            <div className='project-item'>
                              <motion.img
                                src={soonimg}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2 }}
                              />
                              <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2 }}
                              >
                                <h4>Soon...</h4>
                                <p>...</p>

                              </motion.div>
                            </div>
                            <div className='project-item'>
                              <motion.img
                                src={soonimg}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2 }}
                              />
                              <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 2 }}
                              >
                                <h4>Soon...</h4>
                                <p>...</p>

                              </motion.div>
                            </div>
                          </div>
                        </motion.span>
                      </Grid>
                    </Grid>
                  </div>
                  : null
                }
                {page === 'contact' ?

                  <div
                  >
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={2}>
                        <div className='logo'>
                          <h2 className="rotate waviy"><span className='.FLetter'>F</span>ern<span className='.ALetter'>a</span>ndo</h2>
                          <h2 className='rotate'>Banaletti</h2>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={10} className='presentation-area'>
                        <motion.span
                          key={page}
                          initial={{ opacity: 0, y: -100 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -100 }}
                          transition={{ duration: 1 }}
                        >
                          <h3>{t('Contact')}</h3>
                          <p className="email-txt">{t('Contact-text')}</p>
                          <form>
                            <TextField id="filled-basic" label={t('Contact name')} InputProps={{ disableUnderline: true }} variant="filled" sx={{ backgroundColor: '#fafbf6', width: '100%', borderRadius: '5px' }} />
                            <TextField id="filled-basic" label={t('Contact email')} variant="filled" InputProps={{ disableUnderline: true }} sx={{ backgroundColor: '#fafbf6', width: '100%', marginTop: '10px', borderRadius: '5px' }} />
                            <TextField id="filled-basic" label={t('Contact message')} variant="filled" InputProps={{ disableUnderline: true }} multiline rows={4} sx={{ backgroundColor: '#fafbf6', width: '100%', marginTop: '10px', borderRadius: '5px' }} />
                            <button type="submit">{t('Contact send')}</button>
                          </form>
                        </motion.span>
                      </Grid>
                    </Grid>
                  </div>
                  : null
                }
                {page === 'skills' ?

                  <div
                  >
                    <Grid container spacing={1}>
                      <Grid item xs={12} md={2}>
                        <div className='logo'>
                          <h2 className="rotate waviy"><span className='.FLetter'>F</span>ern<span className='.ALetter'>a</span>ndo</h2>
                          <h2 className='rotate'>Banaletti</h2>
                        </div>
                      </Grid>
                      <Grid item xs={12} md={10} className='presentation-area'>
                        <motion.span
                          key={page}
                          initial={{ opacity: 0, y: -100 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -100 }}
                          transition={{ duration: 1 }}
                        >
                          <h3>{t('Menu skills')}</h3>
                          <p className='skills-txt'>{t('Skills text')}</p>
                          <div>
                            <p
                              style={{
                                fontFamily: '"Poppins", sans-serif',
                                textTransform: 'uppercase',
                                fontSize: '20px',
                                background: 'linear-gradient(63deg, rgba(23,0,255,0.2) 0%, rgba(255,0,0,0) 100%)',
                                textAlign: 'left',
                                width: '600px',
                                padding: '10px',
                              }}
                            >
                              typescript
                            </p>
                            <p
                              style={{
                                fontFamily: '"Poppins", sans-serif',
                                textTransform: 'uppercase',
                                fontSize: '20px',
                                background: 'linear-gradient(63deg, rgba(252, 220, 0,0.2) 0%, rgba(255,0,0,0) 100%)',
                                textAlign: 'left',
                                width: '600px',
                                padding: '10px',
                              }}
                            >
                              javascript
                            </p>
                            
                            <p
                              style={{
                                fontFamily: '"Poppins", sans-serif',
                                textTransform: 'uppercase',
                                fontSize: '20px',
                                background: 'linear-gradient(63deg, rgba(229, 76, 33,0.2) 0%, rgba(23,0,255,0) 100%)',
                                textAlign: 'left',
                                width: '600px',
                                padding: '10px',
                              }}
                            >
                              HTML5
                            </p>
                            <p
                              style={{
                                fontFamily: '"Poppins", sans-serif',
                                textTransform: 'uppercase',
                                fontSize: '20px',
                                background: 'linear-gradient(63deg, rgba(33, 76, 229,0.2) 0%, rgba(23,0,255,0) 100%)',
                                textAlign: 'left',
                                width: '600px',
                                padding: '10px',
                              }}
                            >
                              CSS
                            </p>
                            <p
                              style={{
                                fontFamily: '"Poppins", sans-serif',
                                textTransform: 'uppercase',
                                fontSize: '20px',
                                background: 'linear-gradient(63deg, rgba(0,247,255,0.2) 0%, rgba(23,0,255,0)',
                                textAlign: 'left',
                                width: '600px',
                                padding: '10px',
                              }}
                            >
                              React
                            </p>
                            <p
                              style={{
                                fontFamily: '"Poppins", sans-serif',
                                textTransform: 'uppercase',
                                fontSize: '20px',
                                background: 'linear-gradient(63deg, rgba(0,194,34,0.2) 0%, rgba(23,0,255,0) 100%)',
                                textAlign: 'left',
                                width: '600px',
                                padding: '10px',
                              }}
                            >
                              Node.js
                            </p>
                            <p
                              style={{
                                fontFamily: '"Poppins", sans-serif',
                                textTransform: 'uppercase',
                                fontSize: '20px',
                                background: 'linear-gradient(63deg, rgba(1,1,1,0.2) 0%, rgba(23,0,255,0) 100%)',
                                textAlign: 'left',
                                width: '600px',
                                padding: '10px',
                              }}
                            >
                              Express
                            </p>
                            <p
                              style={{
                                fontFamily: '"Poppins", sans-serif',
                                textTransform: 'uppercase',
                                fontSize: '20px',
                                background: 'linear-gradient(63deg, rgba(103, 29, 223,0.2) 0%, rgba(23,0,255,0) 100%)',
                                textAlign: 'left',
                                width: '600px',
                                padding: '10px',
                              }}
                            >
                              Axios
                            </p>
                          </div>
                        </motion.span>
                      </Grid>
                    </Grid>
                  </div>
                  : null
                }
              </Grid>
            </Grid>
          }
        </Container>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <p>Teste</p>
        </Modal>

      </div>
    </div >
  );
}

export default App;
