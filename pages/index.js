import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/layout";
import { useMediaQuery } from 'react-responsive'
export default function Home() {
    const Example = () => {
        const isDesktopOrLaptop = useMediaQuery({
            query: '(min-width: 1224px)'
        })}
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'})
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return (
      <>

              <link rel="preconnect" href="https://fonts.googleapis.com"/>
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                      <link href="https://fonts.googleapis.com/css2?family=Karla:wght@300&display=swap"
                            rel="stylesheet"/>

          <Layout

          />


      </>


  )
}
