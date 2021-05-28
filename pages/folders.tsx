import { supabase } from '../supabase/init'
import { useRecoilState } from 'recoil'
import { useEffect, useState } from 'react'
import { foldersState } from '../states/folders'
import { userState } from '../states/user'

export default function Folders () {
  const [user] = useRecoilState(userState)
  const [folders, setFolders] = useRecoilState(foldersState)

  const [title, setTitle] = useState('')

  const handleTitle = (event) => {
    setTitle(event.target.value)
  }

  const createFolder = async () => {
    const { data, error } = await supabase
      .from('folders')
      .insert([
        {
          title,
          user_id: user.id
        }
      ])

    fetchFolders()
  }

  const fetchFolders = async () => {
    const data = await supabase
      .from('folders')
      .select('*')

    setFolders(data.body)
  }

  useEffect(() => {
    fetchFolders()
  }, [])

  return (
    <div>
      <h1>Folders</h1>
      <p onClick={fetchFolders}>Reload</p>

      {folders && folders.map((folder, index) => {
        return (
          <div className="folder" key={ folder.id }>
            { folder.title }
          </div>
        )
      })}

      <h3>Create Folder</h3>
      <input type="text" onChange={handleTitle} placeholder="set title" />
      <button onClick={createFolder}>Create Folder</button>
    </div>
  )
}