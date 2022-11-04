import React, { useRef, useEffect,useState } from "react";
import { ThemeProvider,theme,CSSReset } from '@chakra-ui/react'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  const [testc, settestc] = useState(0)
    const interval = setInterval(() => {
      // to delete for prod==-===================
      settestc(testc+1)

    }, 1*5*1000);

  return(
    <ThemeProvider theme={theme}>
    <CSSReset />
    <Component {...{pageProps}} {...{testc}}/>
    </ThemeProvider>
  ) 
}

export default MyApp
