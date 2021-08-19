import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/layout";

export default function Home() {
  return (
      <>
          <head>
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                      <link href="https://fonts.googleapis.com/css2?family=Karla:wght@300&display=swap"
                            rel="stylesheet"/>
          </head>
          <body>
                <Layout/>
          </body>

      </>


  )
}
