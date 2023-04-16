import clsx from "clsx";
import React from "react";
import {

    Typography,
   
  } from "@material-tailwind/react";



export default function ProgressCircle({
  className,
  value = 20
}) {
  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center overflow-hidden rounded-full",
        className
      )}
    >
      <svg className="w-20 h-20">
        <circle
          className="text-gray-200"
          strokeWidth={8}
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
        <circle
          className="text-blue-500"
          strokeWidth={8}
          strokeDasharray={30 * 2 * Math.PI}
          strokeDashoffset={`${
            30 * 2 * Math.PI - (value / 100) * 30 * 2 * Math.PI
          }`}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
      </svg>
      <Typography className="absolute" bold small>{`${value}%`}</Typography>
    </div>
  );
}
