import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from '../components/NavBar'
import '@notus-pro/react/tailwind.min.css'

function MyApp({ Component, pageProps }: AppProps) {
  <Router><NavBar></NavBar></Router>
  return <Component {...pageProps} />
}
export default MyApp
