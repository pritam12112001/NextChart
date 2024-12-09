import axiosBaseQuery from '@/store/axios/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

export const softwareServiceApi = createApi({
    reducerPath: 'softwareService',
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        // setBesicSoftwareDetails: builder.query<any, void>({
        //     async queryFn(arg, { dispatch, getState }, extraOptions, baseQuery): Promise<any> {
        //         try {
        //             const { data: subscribedSoftwares } = await dispatch(softwareServiceApi.endpoints.getAllSubscribedSoftwaresForClient.initiate());
        //             dispatch(setSubscribedSoftwares(subscribedSoftwares))
        //             const { data: accessibleSoftwares } = await dispatch(softwareServiceApi.endpoints.getAccessibleSoftwareForUser.initiate());
        //             dispatch(setAccessibleSoftwares(accessibleSoftwares))
        //             return { data: "success" };
        //         } catch (error: any) {
        //             return { error: error }
        //         }
        //     },
        // }),
        mapSoftwareName: builder.query<any, void>({
            query: ({ softwareName, version }: any) => {
                return {
                    service: "softwareService",
                    operation: "mapSoftwareName",
                    argumets: [softwareName, version],
                }
            },
        }),
        getAccessibleSoftwareForUser: builder.query<any, any>({
            query: ({ accountId, userId }: any) => {
                return {
                    service: "softwareService",
                    operation: "getAccessibleSoftwareForUser",
                    argumets: [accountId, userId],
                }
            },
        }),
        getAllSubscribedSoftwaresForClient: builder.query<any, any>({
            query: ({ accountId }: any) => {
                return {
                    service: "softwareService",
                    operation: "getAllSubscribedSoftwaresForClient",
                    argumets: [accountId],
                }
            },
        }),
    }),
});

export const {
    useMapSoftwareNameQuery,
    useLazyMapSoftwareNameQuery,
    useGetAccessibleSoftwareForUserQuery,
    useGetAllSubscribedSoftwaresForClientQuery,
    useLazyGetAccessibleSoftwareForUserQuery,
    useLazyGetAllSubscribedSoftwaresForClientQuery,
} = softwareServiceApi; 
