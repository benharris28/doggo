import config from '../config'
import TokenService from './token-service'

const PhotoApiService = {
    uploadImage(fileName, fileType) {
       
        
        return fetch (`${config.API_ENDPOINT}/photo/upload?file-name=${fileName}&file-type=${fileType}`, {
            method: 'GET',
            
            
        })
        .then(res => 
            (!res.ok)
            ? res.then(e => Promise.reject(e))
            : res.json()
            )
    },
    putRequest(file, photo) {
       
        
        return fetch (`${file}`, {
            method: 'PUT',
            body: photo
            
            
        })
        .then(res => 
            (!res.ok)
            ? res.then(e => Promise.reject(e))
            : res
            )
    },
    getImage(fileName) {
       
        
        return fetch (`${config.API_ENDPOINT}/photo/get-image?file-name=${fileName}`, {
            method: 'GET',
            
            
        })
        .then(res => 
            (!res.ok)
            ? res.then(e => Promise.reject(e))
            : res.json()
            )
    },
    updateImageInDB(userId, file) {
                
        return fetch(`${config.API_ENDPOINT}/user/${userId}`, {
            method: 'PATCH',
            headers: {
              'authorization': `bearer ${TokenService.getAuthToken()}`,
              'content-type': 'application/json',
            },
            body: JSON.stringify(file)
            
        })
        
        .then(res => 
         
            
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res
            
        )
        
    },
    getUnsplash(term) {
       
        return fetch (`https://api.unsplash.com/search/photos`, {
            method: 'GET',
            params: {
                query: term
            },
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Client-ID 8WveCpBifl3GHwxtbWb6CW6dB44CryEPAe8bWZuzKVs'

            },
            
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res
            )
    },

}

export default PhotoApiService;