import { supabase } from '../supabase/init'
import { useRecoilState } from 'recoil'
import { userState } from '../states/user'
import { useState } from 'react'

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

    const logout = async () => {
        await supabase.auth.signOut()
    }

    return (
      <div className="login">
          <h1>Login</h1>

          {!user &&
            <div className="login">
              <input type={'text'} placeholder={'email'} onChange={handleEmail} />
              <input type={'password'} placeholder={'password'} onChange={handlePassword} />

              <button onClick={login}>Login</button>
            </div>
          }

          {user &&
            <div>
                <p><b>E-Mail:</b> { user.email }</p>
                <button onClick={logout}>Logout</button>
            </div>
          }
      </div>
    )
}