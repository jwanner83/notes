interface FolderInterface {
  id: number
  parent_id: number | undefined
  title: string
  description: string | undefined
  user_id: string
}

export default FolderInterface
