import config from '../config'

const PhotoApiService = {
    putUrl(Key, ContentType) {
       
        
        return fetch (`${config.API_ENDPOINT}/photo/upload?Key=${Key}&ContentType=${ContentType}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            
        })
        .then(res => 
            (!res.ok)
            ? res.then(e => Promise.reject(e))
            : res
            )
    },
}

export default PhotoApiService;