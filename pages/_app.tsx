import { RecoilRoot } from 'recoil'
import { AppProps } from 'next/app'
import Authentication from '../components/Authentication'
import Layout from '../components/Layout'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Authentication>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Authentication>
        </RecoilRoot>
    )
}
