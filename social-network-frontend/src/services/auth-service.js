const _api = "http://localhost:8080/";

const authorization = async (formData) => {
    return await fetch(`${_api}auth/login`, _requestOptionsPOST(formData))
        .then(response => response.json());
}

const registration = async (formData) => {
    return await fetch(`${_api}auth/signup`, _requestOptionsPOST(formData))
        .then(response => response.json());
}

const _requestOptionsPOST = (formData) => {
    return {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: formData
    }
}
export {
    authorization,
    registration
};
