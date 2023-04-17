import { useState } from "react"
import { selectCurrentToken } from "../api/auth/AuthSlice";
import { setAlert, toggleAlert, toggleLoading } from "../api/store/appStateSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

export const useFormManager =  (initialState) => {
    const [formState, setFormState] = useState(initialState);

    const changeHandler = (event) => {
        setFormState({
            ...formState,
            [event.target.name] : event.target.value
        })
    }

    const elementChangeHandler = (name, value) => {
        setFormState({
            ...formState,
            [name] : value
        })
    }

    const reset = () => setFormState(initialState);

    return { changeHandler, elementChangeHandler, reset, formState };
}


export const useFormPost = () => {
    const dispatch = useDispatch();
    const token = useSelector(selectCurrentToken);
   
 
    const post = async ({url, response, data}) => {

        const requestHeader = {
            // timestamp: new Date().getMilliseconds(),
            headers: {
                Authorization: "Token "  + token,
              }
            
        }

        const requestBody = {

            data: data,
            // userId: userId
        }
        const request = {
            // header: requestHeader,
            body: requestBody
        }

        dispatch(toggleLoading());
        let message = "";
        let severity = "info";

        try {
            await axios.post(url, data, requestHeader)
            .then((res) => {
                if(res.status === 200){
                    response = res.data;
                    severity = response.header.responseStatus;
                    message = response.header.responseMessage;
                }
            })
            .catch((error) => {
                message = "Request Failed: " + error.message;
                severity = "error";
            });
        } catch (error) {
            message = "Request Failed. Network Error.";
            severity = "warning";
        }

        dispatch(toggleLoading());
        dispatch(setAlert({message: message, severity: severity}));
        dispatch(toggleAlert());
        return response;
    }

    return { post } 
 }