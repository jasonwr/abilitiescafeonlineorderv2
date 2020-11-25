import { firebaseDB, userRef } from '../firebase';

export default ({ email, password }) => {
    firebaseDB
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
            userRef.child(data.user.uid).once('value', (snapshot) => {
                console.log(snapshot.val());
                return snapshot.val();
            });
        })
        .catch((err) => {
            console.log(err.message);
            console.log("User not found and not signed in");
            return err.message;
        });
};