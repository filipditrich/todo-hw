import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import usePromise from 'react-promise-suspense';
import { fakePromise } from './utils';

/**
 * Global axios configuration
 * @type {AxiosInstance}
 */
const apiClient: AxiosInstance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
});

/**
 * Uses apiClient with usePromise to trigger React's suspense rendering
 * @param {AxiosRequestConfig} config
 * @return {AxiosResponse<T>}
 */
export const useApiWithSuspense = <T = any>(config: AxiosRequestConfig): AxiosResponse<T> => {
	return usePromise(async (_config: AxiosRequestConfig) => {
		// a little fake delay to demonstrate suspense loading
		await fakePromise(400);
		
		// actual API call with provided config
		return apiClient(_config);
	}, [config]);
}

export default apiClient;
