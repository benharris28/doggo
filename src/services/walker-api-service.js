import config from '../config'
import TokenService from './token-service'

const WalkerApiService = {
    patchBio(user_id, bio) {
       
        console.log(JSON.stringify(bio))
        return fetch (`${config.API_ENDPOINT}/user/${user_id}`, {
            method: 'PATCH',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(bio),
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res
            )
    },
}

export default WalkerApiService;