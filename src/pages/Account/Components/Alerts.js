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
                className="  max-w-screen-md"
                style={{position:'relative', margin:"auto",zIndex:'10', width:'300px'}}
                show={state}
                color={severity === 'success'?'green':severity === 'warning'?'gray':'red'}
                onClose={handleAlertState}
                dismissible={{
                    onClose: () => handleAlertState(),
                    action: (
                      <Button variant="text" color="white" size="sm">
                        x
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