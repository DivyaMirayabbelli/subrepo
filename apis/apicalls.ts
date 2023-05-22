import { Response } from "supertest";
import * as supertest from 'supertest';
import { REQRES_BASE_URI } from "../helpers/Constants";
import { endpoints } from "../helpers/endpoints";

const request = supertest(REQRES_BASE_URI);

export const ecommAPIGETCall = async (endpoint: endpoints | string, payload?: object, headers?: object): Promise<Response> => {
    if (payload && headers) return request.get(endpoint).set(headers).send(payload);
    else if (payload) return request.get(endpoint).send(payload);
    else return request.get(endpoint);
};

export const ecommAPIPOSTCall = async (endpoint: endpoints | string, payload: string | object, headers?: object): Promise<Response> => {
    if (headers) return request.post(endpoint).set(headers);
     return request.post(endpoint).send(payload);
};

export const ecommAPIDELETECall = async (endpoint: endpoints | string, payload?: object): Promise<Response> => {
    if (payload) return request.delete(endpoint).send(payload);
    return request.delete(endpoint);
};