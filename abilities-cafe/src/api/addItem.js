import { postRef } from "../firebase";

export default (uid, content) => {
    console.log("into function");
    postRef.push({
        createdBy: uid,
        content
    });
};