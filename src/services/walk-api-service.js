import config from '../config';
import TokenService from './token-service'

const WalkApiService = {
    getAllWalksForUserId(user_id) {
        return fetch(`${config.API_ENDPOINT}/walk/all/user/${user_id}`, {
            headers: {
              'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
          })
            .then(res =>
              (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
            )
        },
        getAllWalksForWalkerId(user_id) {
            return fetch(`${config.API_ENDPOINT}/walk/all/walker/${user_id}`, {
                headers: {
                  'authorization': `bearer ${TokenService.getAuthToken()}`,
                },
              })
                .then(res =>
                  (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
            },
        getWalkById(walk_id) {
            return fetch(`${config.API_ENDPOINT}/walk/${walk_id}`, {
                headers: {
                  'authorization': `bearer ${TokenService.getAuthToken()}`,
                },
              })
                .then(res =>
                  (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
            },
            updateWalk(walk_id, walk_status) {
                
                return fetch(`${config.API_ENDPOINT}/walk/${walk_id}`, {
                    method: 'PATCH',
                    headers: {
                      'authorization': `bearer ${TokenService.getAuthToken()}`,
                      'content-type': 'application/json',
                    },
                    body: JSON.stringify(walk_status)
                    
                })
                
                .then(res => 
                 
                    
                    (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res
                    
                )
                
            },
            createWalk(newWalk) {
                return fetch(`${config.API_ENDPOINT}/walk`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(newWalk)
                })
                .then(res => 
                    (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
                )
            },
    }

    export default WalkApiService;