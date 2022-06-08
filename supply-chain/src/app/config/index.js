import Axios from '../../axios';
import { errorHandler } from './errorHandler';
export const Apis = {
    signUp: 'api/User_Signup',
    signIn: 'api/signIn',
};
export const post = async (endPoint, data, token) => {
    try {
        const result = await Axios.post(endPoint, data);
        return result;
    } catch (e) {
        throw errorHandler(e);
    }
};
