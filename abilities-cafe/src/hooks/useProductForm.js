import { useState, useEffect } from "react";
import { projectFirestore, projectStorage } from "../firebase";
import validateProductForm from "../validateProductForm";

/**
 * Hook for uploading form data to Firebase
 * @param {function} callback
 * @returns
 */
const useProductForm = (callback) => {
  const [errors, setErrors] = useState({});
  const [file, setFile] = useState("");
  const [values, setValues] = useState({
    description: "",
    image: "",
    name: "",
    price: "",
    type: "",
  });

  /**
   * Watches the form for any changes and sets the states that will be used to upload to Firebase
   * @param {*} e
   */
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFile(files[0]);
    }
    setValues({ ...values, [name]: value });
  };

  /**
   * Performs final validation and performs the actions required to upload to Firebase
   * @param {*} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(errors);
    for (var key in errors) {
      if (errors[key]) {
        return;
      }
    }
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("products");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        // could show a progress here
        console.log(snap);
      },
      (error) => {
        alert("There was an error uploading the form");
      },
      async () => {
        const imageUrl = await storageRef.getDownloadURL();
        setValues({ ...values, "image": imageUrl });
        await collectionRef.add(values);
      }
    );
  };

  // The form is validated as it changes
  useEffect(() => {
    setErrors(validateProductForm(values, file));
  }, [values, file]);

  return { handleChange, handleSubmit, values, file, errors };
};

export default useProductForm;
