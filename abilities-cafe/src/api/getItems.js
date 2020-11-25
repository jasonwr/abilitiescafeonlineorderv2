import { postRef } from "../firebase";

export default () => {
    console.log("into the function");
    postRef.once('value', snap => { // do not limit to show everything
        return snap.val();
    });
};