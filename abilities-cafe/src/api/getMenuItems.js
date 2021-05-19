import {db} from '../firebase'

export const getMenuItems = async () => {
  return await db.collection("MenuItems")
    .get()
    .then((querySnapshot) => {
      debugger
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
}
