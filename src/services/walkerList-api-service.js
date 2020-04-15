import config from '../config';
import TokenService from './token-service'

const WalkerListApiService = {
    getAllWalkers() {
        return fetch(`${config.API_ENDPOINT}/walker`, {
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
}

export default WalkerListApiService;

