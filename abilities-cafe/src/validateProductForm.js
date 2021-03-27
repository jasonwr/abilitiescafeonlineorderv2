/**
 * This function is to validate the fields in the form used to add a new product.
 * @param {Object} values - Holds the form values
 * @param {Object} file - Image file for the product
 * @returns {Object} - Errors for each form field
 */
const validateProductForm = (values, file) => {
  // TODO: add validation: check name for duplicates
  let errors = {
    description: "",
    file: "",
    name: "",
    price: "",
    type: "",
  };
  errors.price = validatePrice(values.price);
  errors.file = validateFile(file);
  return errors;
};

/**
 *
 * @param {float} price - Product price
 * @returns {string} - Pricing error, if any.
 */
const validatePrice = (price) => {
  if (price && parseFloat(price) <= 0.0) {
    return "Please choose a price over $0";
  }
  return "";
};

/**
 *
 * @param {Object} file - Image file for the product
 * @returns {string} - File type error
 */
const validateFile = (file) => {
  const validFileTypes = ["image/png", "image/jpeg"];
  if (file && !validFileTypes.includes(file.type)) {
    return "Please select an image file (png or jpg)";
  }
  return "";
};

export default validateProductForm;
