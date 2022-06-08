import { Apis, get, post, put } from '.';
export const Service = {
    signUp: async (obj) => {
        let result = await post(Apis.signUp, obj);
        if (result.status === 201) return result.data;
        else throw result;
    },
    signIn: async (obj) => {
        let result = await post(Apis.signIn, obj);
        if (result.status === 200) return result.data;
        else throw result;
    },

}