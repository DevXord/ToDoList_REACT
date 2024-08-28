import axios from "axios";
import { urls } from "../util/urls";

const webApi = axios.create({
    baseURL: urls.apiURL,
    timeout: 20000,
    //headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': '*',
    //     'Access-Control-Allow-Credentials': 'true',
    //     'Access-Control-Allow-Methods': '*',
    //     'Content-Type': 'application/json',
    //     'Allow': 'GET, POST, HEAD, OPTIONS',
    //     'Vary': 'Accept'

    //},
    withCredentials: true
})

 

export {webApi}