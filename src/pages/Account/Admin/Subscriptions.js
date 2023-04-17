import React from 'react'
import { Typography } from '@material-tailwind/react';

function Subscriptions() {
    const Subscriptions = []
    if (!Subscriptions || !Subscriptions.length) {
        return(
            <div>
            <div className="text-center px-4 py-8">
                <Typography className="mt-2" muted small>
                    There is no Subscriptions made start adding!..
                </Typography>
            </div>
          </div>
        );
      }
    
  return (
    <div>Subscriptions</div>
  )
}


export default Subscriptions