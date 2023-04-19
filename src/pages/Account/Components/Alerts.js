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
    return(
        <React.Fragment>
            <Alert
               
                style={{position:'-webkit-sticky', margin:"auto",zIndex:'10', width:'300px', height:'30vh'}}
                show={state}
                color={severity === 'success'?'green':severity === 'warning'?'gray':'red'}
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