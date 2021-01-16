import MockAdapter from './mockAdapter';
import axios from '../services';
import auth from './auth';

const delayResponse = process.env.REACT_APP_MOCKAPI_DELAY || 1000;

const mock = new MockAdapter(axios, { delayResponse });
auth(mock);
