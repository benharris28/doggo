import config from '../config'

const UserApiService = {
    patchPhoto(user_id, photo) {
       
        console.log(JSON.stringify(photo))
        return fetch (`${config.API_ENDPOINT}/user/${user_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(photo),
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res
            )
    },
}

export default UserApiService;