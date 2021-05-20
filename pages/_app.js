import { RecoilRoot } from 'recoil'
import Authentication from '../components/Authentication'

export default function MyApp({ Component, pageProps }) {
    return (
        <RecoilRoot>
            <Authentication>
                <Component {...pageProps} />
            </Authentication>
        </RecoilRoot>
    )
}
