import axios from 'axios'

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        //proximity: '',
        language: 'es',
        access_token: 'pk.eyJ1IjoianNhbnRhbXYiLCJhIjoiY2ttc2F1djJsMGZ5cDJ3cTVudDlycGpxMiJ9.6rIHHxV8UqO4rZOJz8n8uA'
    }
})

export default searchApi