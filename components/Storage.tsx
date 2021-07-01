import { useRecoilState } from 'recoil'
import { useEffect } from 'react'

import { userState } from '../states/user'
import { useRouter } from 'next/router'
import {supabase} from "../supabase/init";

export default function Storage({ children }) {
    const [folders, setFolders] = useRecoilState(userState)
    const router = useRouter()

    const fetchFolders = async () => {
        const data = await supabase
            .from('folders')
            .select('*')

        setFolders(data.body)
    };

    useEffect(() => {
        fetchFolders()
    }, [])

    return <div>{children}</div>
}
