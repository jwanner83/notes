import FolderInterface from '../interfaces/FolderInterface'

export default class FolderModel implements FolderInterface {
  public id: number
  public parent_id: number | undefined
  public title: string
  public description: string | undefined
  public user_id: string
  public children: Array<FolderInterface>

  constructor (folder: FolderInterface) {
    this.id = folder.id
    this.title = folder.title
    this.description = folder.description
    this.user_id = folder.user_id
  }

  public addChild (folder: FolderModel) {
    this.children.push(folder)
  }
}