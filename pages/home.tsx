import { useRecoilState } from 'recoil'
import { foldersState } from '../states/folders'
import { useState } from 'react'
import { supabase } from '../supabase/init'

export default function Home () {
  const [folders] = useRecoilState(foldersState)
  const [recentFolders, setRecentFolders] = useState([])

  const getRecentFolders = async () => {
    const data = await supabase
      .from('folders')
      .select('*')

    setRecentFolders(data.body)
  }

  return (
    <div className="home">
      <h1 className="home__greeting">Good evening</h1>

      <h3 className="home__title">Return where you left</h3>
      <h3 className="home__title">Frequently used folders</h3>

      <style jsx>{`
        .home__greeting  {
          font-size: 60px;
        }
        
        .home__title {
          font-style: italic;
        }  
      `}</style>
    </div>
  )
}