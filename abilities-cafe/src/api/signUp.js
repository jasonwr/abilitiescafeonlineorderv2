import { firebaseDB, userRef } from '../firebase';

//my sign up thing
export default ({email, password, firstName, lastName}) => {
    if (!firstName || !lastName) {
        return false;
    }

    firebaseDB
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((userData) => {
            userRef.child(userData.user.uid).set({
                firstName,
                lastName,
                email
            })
            return true;
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
};