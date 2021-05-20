import { supabase } from '../supabase/init'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'

import { userState } from '../states/user'

export default function Authentication({ children }) {
    const [setUser] = useRecoilState(userState)

    useEffect(async () => {
        const user = await supabase.auth.user()

        if (user) {
            setUser(user)
        }

        supabase.auth.onAuthStateChange((event, session) => {
            if (event === ('SIGNED_OUT' || 'SIGNED_IN' || 'USER_UPDATED')) {
                setUser(session)
            }
        })
    }, []);


    return <div>{children}</div>
}
