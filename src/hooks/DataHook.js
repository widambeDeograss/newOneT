import axios from "axios";
import { useCallback, useState } from "react";
import { selectCurrentToken } from "../api/auth/AuthSlice";
import { setAlert, toggleAlert, toggleLoading } from "../api/store/appStateSlice";
import { useDispatch, useSelector } from "react-redux";;


export const useToggle = (intitialValue = false) => {
    

    const [state, setState] = useState(intitialValue);

    const toggle = useCallback(() => {
        setState((state) => !state);
    }, []);

    return[state, toggle];
}

export const useDataFetch = () => {
    const dispatch = useDispatch();
    const token = useSelector(selectCurrentToken);

    const fetch = async ({url, response}) => {
        dispatch(toggleLoading());

        const requestHeader = {
            headers: {
                Authorization: "Token "  + token,
              }
            
        }

        let message = "";
        let severity = "info";

        try {
            await axios.get(url, requestHeader)
            .then((res) => {
                if(res.status === 200){
                    response = res.data;
                    message = response.header.responseMessage;
                }
            })
            .catch((error) => {
                message = "Failed to fetch Data. " + error.message;
                severity = "error";
                // dispatch(setAlert({message: message, severity: severity}));
                // dispatch(toggleAlert());
            });
        } catch (error) {
            message = "Failed to fetch Data. Network Error !";
            severity = "warning";
            dispatch(setAlert({message: message, severity: severity}));
            dispatch(toggleAlert());
        };

        dispatch(toggleLoading());        
        return response;
    }

    return { fetch };
}