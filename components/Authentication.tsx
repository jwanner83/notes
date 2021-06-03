import { supabase } from '../supabase/init'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'

import { userState } from '../states/user'
import { useRouter } from 'next/router'

export default function Authentication({ children }) {
    const [user, setUser] = useRecoilState(userState)
    const router = useRouter()

    useEffect( () => {
        async function defineUser () {
            const user = await supabase.auth.user()

            if (user) {
                setUser(user)
            }
        }

        defineUser()

        supabase.auth.onAuthStateChange(async (event, session) => {
            if (event === ('SIGNED_OUT' || 'SIGNED_IN' || 'USER_UPDATED')) {
                setUser(session)
            }

            if (event === 'SIGNED_OUT' && router.pathname !== '/login') {
                await router.push('/login')
            }
        })
    }, [])


    return <div>{children}</div>
}
