import { BASE_API_URL } from '@/config/url';
import axiosInstance from '@/store/axios/axiosInstance';
import { logoutSuccessful } from '@/store/redux/slices/globalsSlice';
import { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'sonner';

const axiosBaseQuery =
    ({ baseUrl }: { baseUrl: string } = { baseUrl: BASE_API_URL }) =>
        async ({ service, operation, arguments_, accountId, softwareId, locale, isTicketRequried = true }: any, api: any): Promise<any | null> => {
            try {
                const queryParams = new URLSearchParams({
                    inZip: String(false),
                    outZip: String(true),
                    inFormat: "freejson",
                    outFormat: "freejson",
                    service: service,
                    operation: operation,
                });
                const globalAccountId = api.getState()?.globals?.globalAccountId;
                if (accountId || globalAccountId) {
                    queryParams.append('activeAccountId', accountId || globalAccountId);
                }

                const currentSoftwareId = api.getState()?.globals?.currentSoftwareId;
                if (softwareId || currentSoftwareId) {
                    queryParams.append('softwareId', softwareId || currentSoftwareId);
                }

                if (locale) {
                    queryParams.append('locale', locale);
                }

                console.log(isTicketRequried)
                if (isTicketRequried) {
                    const globalTicket = api.getState()?.globals?.globalTicket;
                    //const globalTicket = localStorage["ticket"];
                    console.log(globalTicket)
                    if (globalTicket) {
                        queryParams.append('ticket', globalTicket);
                    }
                }

                const contentType = 'application/x-www-form-urlencoded; charset=UTF-8;';

                const requestData = JSON.stringify(arguments_);

                const result: AxiosResponse<any> = await axiosInstance({
                    method: 'POST',
                    url: `${baseUrl}?${queryParams.toString()}`,
                    headers: { 'Content-Type': contentType },
                    data: { arguments: requestData },
                    responseType: 'json'

                });
                if (result?.data?.message) {
                    toast(result.data.message, {
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                        }
                    })
                }
                return { data: result.data };
            } catch (axiosError) {
                const error = axiosError as AxiosError<any>;
                const { status } = error;
                if (!error.response) {
                    toast("Network error. Please check your internet connection.");
                    throw new Error("Network error. Please check your internet connection.")
                } else {
                    const errMsg = error.response?.data?.message;
                    console.warn('Error Message', errMsg, status);
                    switch (status) {
                        case 400:
                            toast(errMsg ?? "Bad Request. Please check your input.");
                            break;
                        case 401:
                            toast(errMsg ?? "Unauthorized. Please login again.");
                            api.dispatch(logoutSuccessful());
                            break;
                        case 403:
                            toast(errMsg ?? "Forbidden. You do not have permission.");
                            break;
                        case 404:
                            toast(errMsg ?? "Not Found. The requested resource could not be found.");
                            break;
                        case 500:
                            toast(errMsg ?? "Server error. Please try again later.");
                            break;
                        default:
                            toast(errMsg ?? "An error occurred. Please try again.");
                    }
                    throw new Error(errMsg)
                    
                }

            }
        };

export default axiosBaseQuery;
