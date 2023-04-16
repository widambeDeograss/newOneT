import clsx from "clsx";
import * as React from "react";
import {

    Typography,
   
  } from "@material-tailwind/react";


export default function ListItem({
  avatar,
  className,
  subTitle,
  title
}) {
  return (
    <div
      className={clsx(
        "relative flex items-center justify-between px-2 py-3",
        className
      )}
    >
      <div className="flex items-center">
        {avatar && <div className="mr-4">{avatar}</div>}
        <div>
          {title && (
            <Typography bold small>
              {title}
            </Typography>
          )}
          {subTitle && (
            <Typography muted smaller>
              {subTitle}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
}
