
import axios from 'axios';
import {getAPIHost} from '../environment/hosts';
import Logger from '../utilities/logger';

const logger = new Logger({name: 'APIClient'});

class APIClient {
  constructor({host}) {
    this._host = host;
    this._headers = {};
  }

  setAccessToken(token) {
    this._headers.accessToken = token;
  }

  async verifyPhoneNumber({country, countryCode, phoneNumber}) {
    const endpoint = '/request-verification';
    const payload = {
      phoneDetails: {
        carrierCode: '',
        countryCallingCode: countryCode,
        country,
        phone: phoneNumber,
        ext: '',
        possible: true,
        valid: true
      }
    };
    logger.info('sending verifyPhoneNumber request', payload);

    return axios.post(this._buildURL(endpoint), payload);
  }

  async verifySMSToken({country, countryCode, phoneNumber, smsCode}) {
    const endpoint = '/verify-token';
    const payload = {
      phoneDetails: {
        carrierCode: '',
        countryCallingCode: countryCode,
        country,
        ext: '',
        phone: phoneNumber,
        possible: true,
        valid: true
      },
      verificationToken: smsCode
    };
    logger.info('sending verifySMSToken request', payload);

    return axios.post(this._buildURL(endpoint), payload);
  }

  _buildURL(path) {
    return `${this._host}${path}`;
  }
}

let client = new APIClient({
  host: getAPIHost()
});

export default client;