import axiosBaseQuery from '@/store/axios/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

export const processRuntimeServiceAPI = createApi({
    reducerPath: 'processRuntimeService',
    baseQuery: axiosBaseQuery(),
    endpoints: (builder) => ({
        getMyInstancesV2: builder.query<any, void>({
            query: ({ processName, predefinedFilters, processVariableFilters, taskVariableFilters, mongoWhereClause, projections, allInstances }: any) => {
                return {
                    service: "processRuntimeService",
                    operation: "getMyInstancesV2",
                    argumets: [processName, predefinedFilters, processVariableFilters, taskVariableFilters, mongoWhereClause, projections, allInstances],
                }
            },
        }),
        getMyInstancesV4: builder.query<any, void>({
            query: ({ accountId, softwareId, processName, predefinedFilters, processVariableFilters, taskVariableFilters, mongoWhereClause, projections, allInstances }: any) => {
                return {
                    accountId,
                    softwareId,
                    service: "processRuntimeService",
                    operation: "getMyInstancesV2",
                    argumets: [processName, predefinedFilters, processVariableFilters, taskVariableFilters, mongoWhereClause, projections, allInstances],
                }
            },
        }),
        mapProcessName: builder.query<any, void>({
            query: ({ processName, accountId, softwareId }: any) => {
                return {
                    accountId,
                    softwareId,
                    service: "processRuntimeService",
                    operation: "mapProcessName",
                    argumets: [processName, accountId],
                }
            },
        }),
        startProcessV2: builder.mutation<any, void>({
            query: ({ processId, data, processIdentifierFields, accountId, softwareId }: any) => {
                return {
                    accountId,
                    softwareId,
                    service: "processRuntimeService",
                    operation: "startProcessV2",
                    argumets: [processId, data, processIdentifierFields],
                }
            },
        }),
        invokeAction: builder.mutation<any, void>({
            query: ({ taskId, transitionName, data, processInstanceIdentifierField, accountId, softwareId }: any) => {
                return {
                    accountId,
                    softwareId,
                    service: "processRuntimeService",
                    operation: "invokeAction",
                    argumets: [taskId, transitionName, data, processInstanceIdentifierField],
                }
            },
        })
    }),
});

export const {
    useGetMyInstancesV2Query,
    useGetMyInstancesV4Query,
    useLazyGetMyInstancesV2Query,
    useLazyGetMyInstancesV4Query,
    useInvokeActionMutation,
    useLazyMapProcessNameQuery,
    useMapProcessNameQuery,
    useStartProcessV2Mutation
} = processRuntimeServiceAPI; 
