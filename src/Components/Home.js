import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Typography, CardMedia, Grid, Button, Container, AppBar, Toolbar,CssBaseline,Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 700,
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  position: 'relative',
}));

const themeLight = createTheme({
  palette: {
    mode: 'light',
  },
});

const themeDark = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Home = () => {
  const [theme, setTheme] = useState(themeDark);
  
  const toggleTheme = () => {
    setTheme(theme === themeLight ? themeDark : themeLight);
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  const animeData = [
    {
      title: 'JIO AIR FIBER',
      description: 'JioFiber provides the best-in-class service experience for connectivity and entertainment services. However, you can still opt for JioAirFiber as an additional high-quality backup service.',
      image: 'https://sm.mashable.com/mashable_in/seo/3/39969/39969_f2wy.jpg',
    },
    {
      title: 'JIO SAAVN',
      description: 'JioSaavn is an Indian Music streaming service and a digital distributor of Hindi, Marathi, English, Malayalam, Bengali, Kannada, Tamil, Telugu, Bhojpuri',
      image:'https://th.bing.com/th/id/OIP.bk4uZXoVVnVKtFD001taowHaEa?w=263&h=180&c=7&r=0&o=5&pid=1.7'    }, 
    {
      title: 'JIO TV',
      description: 'Welcome to JioTV, Indias most loved Entertainment App!!! Watch your favourite live channels FREE. We recently added the Sun network channels',
      image:"data:image/jpeg;base64,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"    },
    {
      title: 'JIO PHONE',
      description: 'Get your effectively free JioPhone; just pay security deposit of INR 1,500; Unlimited Voice and Data for 28 days | 4G VoLTE with HD voice calls and Video',
      image:'https://th.bing.com/th/id/OIP.BY95HSJBLMXEvLrxvL8bzgHaFP?w=246&h=180&c=7&r=0&o=5&pid=1.7',
    },
    {
      title: 'JIO SIM',
      description: 'Getting a Jio SIM is absolutely free and easy. There are no charges for home delivery, zero activation charges, and no security deposit.',
      image:'https://th.bing.com/th/id/OIP.xHIm5BoNCRVwt54_R-pMdgHaDb?w=335&h=162&c=7&r=0&o=5&pid=1.7',
    }
  ];

  const randomImages = [
    'https://1.bp.blogspot.com/-T9RclNCPhjU/V_c1tusqMFI/AAAAAAAAAHU/p7f9FZAjk0wjgQOo0GS9fjgSRRNxL7DsACLcB/s640/jio-gif%2Bnext4share.gif'
  ];

  const animeWallpapers = [
    'https://jep-asset.akamaized.net/cms/assets/home/ajio-card1.webp',
    'https://jep-asset.akamaized.net/cms/assets/home/hamleys-card2.webp',
    'https://jep-asset.akamaized.net/cms/assets/home/netmeds-card3.webp',
    'https://jep-asset.akamaized.net/cms/assets/home/wifi-mesh-extender.webp',
'https://www.jiomart.com/images/product/original/493071913/jiodive-vr-glass-jd-004-smartphone-based-virtual-reality-headset-for-entertainment-gaming-learning-watch-movies-tv-shows-on-a-100-inch-screen-youtube-360-videos-3d-games-vr-apps-digital-o493071913-p599247236-1-202308241907.jpeg',
'https://www.jiomart.com/images/product/original/493071913/jiodive-vr-glass-jd-004-smartphone-based-virtual-reality-headset-for-entertainment-gaming-learning-watch-movies-tv-shows-on-a-100-inch-screen-youtube-360-videos-3d-games-vr-apps-digital-o493071913-p599247236-2-202308241907.jpeg'  
  ];

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5', minHeight: '100vh' }}>
        <CssBaseline />
        <AppBar position="sticky" color='grey'>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              JIO SERVICES
            </Typography>
            <Button color="inherit" onClick={toggleTheme}>
              Toggle Theme
            </Button>
          </Toolbar>
        </AppBar>
       
        <Container>
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={6} md={8}>
              <Slider {...settings}>
                {animeData.map((anime, index) => (
                  <div key={index}>
                    <StyledCard>
                      <CardMedia component="img" height="140" image={anime.image} alt={anime.title} />
                      <CardContent>
                        <Typography gutterBottom variant="h4">
                          {anime.title}
                        </Typography>
                        <Typography variant="body2">{anime.description}</Typography>
                      </CardContent>
                    </StyledCard>
                  </div>
                ))}
              </Slider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" alignItems="center" justifyContent="center" height="340px" width='750px'>
                <Grid container spacing={0}>
                  {randomImages.map((image, index) => (
                    <Grid item xs={6} key={index}>
                      <img src={image} alt={`Random ${index}`} style={{ width: '100%', height:'307px'}} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="h4" style={{ marginTop: '24px' }}>
            JIO OFFERS
          </Typography>
          <Grid container spacing={2}>
            {animeWallpapers.map((wallpaper, index) => (
              <Grid item xs={12} sm={8} md={4} key={index}>
                <StyledCard>
                  <CardMedia component="img" height="140" image={wallpaper} alt={` FLAT OFFERS  ${index}`} />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      FLAT OFFERS
                    </Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;
