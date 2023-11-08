<meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
import '../styles/globals.css'
import type {AppProps} from 'next/app'
import { Layout } from '@/components/communs/Layout'


export default function App({Component, pageProps}: AppProps){
    return <Layout>
     <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <Component {...pageProps} />
    </Layout>
}