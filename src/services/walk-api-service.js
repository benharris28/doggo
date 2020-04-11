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
    }

    export default WalkApiService;