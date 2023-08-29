import axios from "axios"

const BASE_URL = 'https://newsdata2.p.rapidapi.com/news?apikey=pub_28448ba4ccb6fd552f8c2160e62e7e760e462'

const options = {
    params: {
        language: 'en'
    }
}



export const fetchFromAPI = async(url) => {
    const { data } = await axios.get(`${BASE_URL}${url}`, options)
    return data
}
