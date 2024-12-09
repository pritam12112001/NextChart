import axiosBaseQuery from '@/store/axios/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';
import sha512 from 'crypto-js/sha512';

export const loginServiceApi = createApi({
    reducerPath: 'loginService',
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        login: builder.mutation<any, any>({
            query({ userName, password }) {
                return {
                    service: "loginService",
                    operation: "login",
                    arguments_: [userName, sha512(password).toString()],
                    isTicketRequried: false
                }
            },
            // async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            //     try {
            //         const { data } = await queryFulfilled;
            //         dispatch(setGlobalTicket(data.ticket))
            //         const { data: accountDetails } = await dispatch(loginServiceApi.endpoints.getAccountTree.initiate());
            //         dispatch(setGlobalAccountId(accountDetails?.ACCOUNT_ID))
            //         const { data: userDetails } = await dispatch(loginServiceApi.endpoints.getLoggedInUserProfile.initiate());
            //         dispatch(setProfile(userDetails))
            //         // const { data: subscribedSoftwares } = await dispatch(softwareServiceApi.endpoints.getAllSubscribedSoftwaresForClient.initiate({ accountId: accountDetails?.ACCOUNT_ID }));
            //         // dispatch(setSubscribedSoftwares(subscribedSoftwares))
            //         // const { data: accessibleSoftwares } = await dispatch(softwareServiceApi.endpoints.getAccessibleSoftwareForUser.initiate({ accountId : accountDetails?.ACCOUNT_ID, userId : userDetails?.USER_ID }));
            //         // dispatch(setAccessibleSoftwares(accessibleSoftwares))
            //     } catch (error: any) {
            //         throw new Error(error);
            //     }
            // }
        }),
        forgotPassword: builder.mutation<any, any>({
            query({ userName }) {
                return {
                    service: "loginService",
                    operation: "resetPassword",
                    arguments_: [userName],
                    isTicketRequried: false
                }
            },
        }),
        validateOTP: builder.mutation<any, any>({
            query({ temporaryTicket, otp }) {
                return {
                    service: "loginService",
                    operation: "validateOTP",
                    arguments_: [temporaryTicket, otp],
                    isTicketRequried: false
                }
            },
        }),
        logout: builder.mutation<any, any>({
            query({ }) {
                return {
                    service: "loginService",
                    operation: "logout",
                    arguments_: null
                }
            },
        }),
        getLoggedInUserProfile: builder.query<any, void>({
            query: () => {
                return {
                    service: "loginService",
                    operation: "getLoggedInUserProfile",
                }
            },
            keepUnusedDataFor: 0.0001
        }),
        getAccountTree: builder.query<any, void>({
            query: () => {
                return {
                    service: "accountService",
                    operation: "getAccountTree",
                }
            },
            keepUnusedDataFor: 0.0001
        }),
    }),
});

export const { useLoginMutation, useGetLoggedInUserProfileQuery, useGetAccountTreeQuery, useLazyGetAccountTreeQuery, useLazyGetLoggedInUserProfileQuery, useValidateOTPMutation, useForgotPasswordMutation, useLogoutMutation } = loginServiceApi; 
