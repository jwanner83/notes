import { supabase } from '../supabase/init'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'

import { userState } from '../states/user'

export default function Authentication({ children }) {
    const [user, setUser] = useRecoilState(userState)

    useEffect( () => {
        async function defineUser () {
            const user = await supabase.auth.user()

            if (user) {
                setUser(user)
            }
        }

        defineUser()

        supabase.auth.onAuthStateChange((event, session) => {
            if (event === ('SIGNED_OUT' || 'SIGNED_IN' || 'USER_UPDATED')) {
                setUser(session)
            }
        })
    }, [])


    return <div>{children}</div>
}
