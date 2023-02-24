import axios from 'axios'

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        access_token: 'pk.eyJ1IjoianNhbnRhbXYiLCJhIjoiY2ttc2F1djJsMGZ5cDJ3cTVudDlycGpxMiJ9.6rIHHxV8UqO4rZOJz8n8uA',
        alternatives: false,
        geometries: 'geojson',
        language: 'es',
        overview: 'simplified',
        steps: false,
    }
})

export default directionsApi