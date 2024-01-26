const _api = "http://localhost:8080/";
const authorization = async (formData) => {
    return await fetch(`${_api}auth/login`, _requestOptionsPOST(formData))
        .then(response => response.json());
}

const registration = async (formData) => {
    return await fetch(`${_api}auth/signup`, _requestOptionsPOST(formData))
        .then(response => response.json());
}

const createNewPost = async (formData, token) => {
    return await fetch(`${_api}post/create`, _requestOptionsPOST(formData, token))
        .then(response => response.json());
}

const getUserData = async (token) => {
    return await fetch(`${_api}user/userForProfile`, _requestOptionsGET(token))
        .then(response => response.json());
}

const getMorePosts = async (token, page) => {
    return await fetch(`${_api}user/userForProfile/morePosts?page=${page}`, _requestOptionsGET(token))
        .then(response => response.json());
}

const _requestOptionsPOST = (formData, token = "") => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);
    return {
        method: "POST",
        headers: myHeaders,
        body: formData
    }
}

const _requestOptionsGET = (token = "") => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    return {
        method: "GET",
        headers: myHeaders,
    }
}

export {
    authorization,
    registration,
    createNewPost,
    getUserData,
    getMorePosts
};
