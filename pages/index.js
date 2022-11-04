import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/react'
import dynamic from "next/dynamic";
import { useState,useEffect } from 'react';

function inter(val,settestCounter,testCounter) {
  setInterval(() => {
    settestCounter(testCounter+1)
  }, val);
}

export default function Home(children) {

  console.log('children.props')
  console.log(children.testc)

  const EsriMap = dynamic(()=> import ("../components/EsriMap/EsriMap"), {
    ssr: false,
  });

  return (
    <Box h='100vh' bg='green'  >
      <Box h='50%' w='50%' bg='green'  >
        <EsriMap />
      </Box>
      <Box h='50%' w='50%' bg='red'>{children.testc}</Box>
    </Box>
    
  )
}
