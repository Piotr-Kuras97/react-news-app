import axios from "axios"

const BASE_URL = 'https://newsdata2.p.rapidapi.com/news'

const options = {
    params: {
        language: 'en'
    },
    headers: {
        'X-RapidAPI-Key': '0a13eea310msh05b908c0d48042cp11462cjsn1d4dc2b46242',
        'X-RapidAPI-Host': 'newsdata2.p.rapidapi.com'
    }
}



export const fetchFromAPI = async(url) => {
    const { data } = await axios.get(`${BASE_URL}?${url}`, options)
    return data
}