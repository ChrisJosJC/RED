import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
let clientId = uuidv4() ?? Math.random()*100;

export default function createUser(){
    let isUser = localStorage.getItem("clientId")
    if (isUser) return localStorage.getItem("clientId")
    localStorage.setItem("clientId", clientId)
    return clientId
}


