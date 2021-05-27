import { RecoilRoot } from 'recoil'
import { AppProps } from 'next/app'
import Authentication from '../components/Authentication'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <Authentication>
                <Component {...pageProps} />
            </Authentication>
        </RecoilRoot>
    )
}
