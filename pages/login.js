import Head from 'next/head'
import { supabase } from '../supabase/init'
import { useRecoilState } from 'recoil'
import { sessionState, userState } from '../states/user'
import { useState } from 'react'
import Link from 'next/link'

export default function Login () {
    const [user, setUser] = useRecoilState(userState)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const login = async () => {
        const { user, error } = await supabase.auth.signIn({
            email,
            password,
        })

        if (error) {
            console.log('error')
        } else {
            setUser(user)
        }
    }

    return (
        <div className="container">
            <Head>
                <title>Login</title>
            </Head>

            <main>
                <h1>Notes</h1>
                {!user &&
                    <div className="login">
                        <input type={'text'} placeholder={'email'} onChange={handleEmail} />
                        <input type={'password'} placeholder={'password'} onChange={handlePassword} />

                        <button onClick={login}>login</button>
                    </div>
                }

                {user &&
                    <Link href="/home">
                        <a>home</a>
                    </Link>
                }
            </main>
        </div>
    )
}