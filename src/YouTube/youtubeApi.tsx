import axios from 'axios';
const KEY = 'AIzaSyDdAeqMeth3r8h54FvAR4cspTa8IiSoSwI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})