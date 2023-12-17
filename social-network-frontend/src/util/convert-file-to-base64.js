export const convertFileToBase64 = (file, callback) => {
    const reader = new FileReader();

    reader.onloadend = () => {
        const base64String = reader.result;
        callback(base64String);
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}