import React, { lazy, Suspense, useState, useEffect ,useContext} from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Cookies from "js-cookie";
import { ProfileDetail } from "./helper/context";
import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./component/route/MyRoutes";

import { getTheme, lightTheme, darkTheme } from "./style/themeStyles";
import { getUser } from "./helper/utl";
import { LoginBar } from "./component/user/LoginBar";
import CssBaseline from "@mui/material/CssBaseline";

import { Box, Paper, useTheme } from "@mui/material";
import { pageStyle } from "./style/style";
import lottieflow from "./style/lottieflow.json";
import Lottie from "lottie-react";

const Footer = lazy(() => import("./component/LAYOUT/footer/Footer"));
const Header = lazy(() => import("./component/LAYOUT/header/Header"));
const Loader = lazy(() => import("./component/component/loader/Loader"));

function App() {
  const [lang, setLang] = useState(Cookies.get("i18next"));
  const [langimg, setLangimage] = useState("");
  const [themeMode, setThemeMode] = useState("dark");
  const { activeLang } = useContext(ProfileDetail);

  const userData = getUser();
  let USERSTUTES = userData.userId;
  if (userData.userId === null || userData.userId === undefined) {
    USERSTUTES = false;
  } else {
    USERSTUTES = true;
  }
  const theme = createTheme(getTheme(themeMode));
  const myTheme = useTheme();
   
  // console.log({theme} )

  const style = {
    height: 300,
  };

  
  const extedLightTheme={
    ...lightTheme,
    typography: {
      allVariants: {
        fontFamily: activeLang === "arabic" ? "CB": "latoBold" ,
        textTransform: 'none',
        [theme.breakpoints.up("xs")]: {
          fontSize: ".7rem"
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: ".9rem"
        }

      },
    
  }
  }

  const extedDarkTheme={
    ...darkTheme,
    typography: {
      allVariants: {
        fontFamily: activeLang === "arabic" ? "CB": "latoBold" ,
        textTransform: 'none',
        [theme.breakpoints.up("xs")]: {
          fontSize: ".8rem"
        }
        ,
        [theme.breakpoints.up("sm")]: {
          fontSize: ".9rem"
        }
      },
    
  }
  }




  useEffect(() => {
    if (Cookies.get("i18next") === "ar") {
      document.body.dir = "rtl";
      setLang("ar");
      setLangimage("/assets/locales/en/united-states.png");
      document.title = "خالد نديش";
    } else {
      document.body.dir = "ltr";
      setLang("en");
      setLangimage("/assets/locales/ar/saudi-arabia.png");
      document.title = "khalid nadish";
    }
  }, [Cookies.get("i18next")]);
 
  
  return (
    <>
      <ThemeProvider
        theme={
          themeMode === "dark"
            ? createTheme(extedDarkTheme)
            : createTheme(extedLightTheme)
        }
      >
        <CssBaseline />
        <Suspense fallback={<Loader />}>
            <BrowserRouter>
              <Paper sx={{ backgroundColor: "backGroundColor.main" }}>
                <Box sx={{ ...pageStyle, backgroundColor: "boxColor.main" }}>
                  <LoginBar USERSTUTES={USERSTUTES} userData={userData} />
                  {/* <AboutMeComponent /> */}
                  <Header userData={userData} />
                  <MyRoutes />
                  <Footer
                    setLang1={setLang}
                    langimg={langimg}
                    setLangimage={setLangimage}
                    setThemeMode={setThemeMode}
                    themeMode={themeMode}
                  />
                </Box>
              </Paper>
            </BrowserRouter>
          {/* </ProfileProvider> */}
        </Suspense>
      </ThemeProvider>
    </>
  );
}
export default App;
 {/* <Box sx={{display :"flex",justifyContent:"center",width:"100%",alignItems:"center" }}>

            <Lottie animationData={lottieflow}   height={200}
        width={200} />
            </Box> */}