import Head from 'next/head'
import { useRecoilState } from 'recoil'
import { userState } from '../states/user'
import { supabase } from '../supabase/init'
import { useRouter } from 'next/router'

export default function Home () {
    const [ user ] = useRecoilState(userState)
    const router = useRouter()

    const logout = async () => {
        await supabase.auth.signOut()
    }

    return (
        <div className="home">
            <Head>
                <title>Home</title>
            </Head>

            <main>
                user { user.email }

                <button onClick={logout}>logout</button>
            </main>
        </div>
    )
}