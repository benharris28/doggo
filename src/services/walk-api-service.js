import config from '../config';

const WalkApiService = {
    getAllWalksForUserId(user_id) {
        return fetch(`${config.API_ENDPOINT}/walk/all/${user_id}`, {
            headers: {
              //'authorization': `bearer ${TokenService.getAuthToken()}`,
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
                  //'authorization': `bearer ${TokenService.getAuthToken()}`,
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
    }

    export default WalkApiService;