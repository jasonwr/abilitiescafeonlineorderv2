import {DataB} from '../firebase'

export const getMenuItems = async () => {
  return await DataB.collection("MenuItems").get()

}
