import React from "react";
import {
    Alert,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { toggleAlert } from '../../../api/store/appStateSlice';
import { useDispatch, useSelector } from 'react-redux';

export const CustomAlertBar = () => {
    const dispatch = useDispatch();
    const message = useSelector((state) => state.appState.message);
    const state = useSelector((state) => state.appState.alertState);
    const severity = useSelector((state) => state.appState.severity);
    const handleAlertState = () => {
        dispatch(toggleAlert());
    }
    console.log(message);
    console.log(state);
    return(
        <React.Fragment>
            <Alert
                style={{position:'fixed!important',left:'0px', top:'0px',zIndex:'1000'}}
                show={state}
                color={severity === 'success'?'green':severity === 'error'?'red':'red'}
                onClose={handleAlertState}
                dismissible={{
                    onClose: () => handleAlertState(),
                    action: (
                      <Button variant="text" color="white" size="sm">
                        Close
                      </Button>
                    ),
                  }
                
                }            
            >
                    {message}
            </Alert>
        </React.Fragment>
    );
}