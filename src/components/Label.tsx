import React from "react";

interface LabelProps {
    text: string;
}

const Label: React.FC<LabelProps> = ({text}) => {
  return (
    <div className="text-md p-2 min-w-[70px] flex items-center justify-center rounded-lg bg-gray-700/25 text-white">
        {text}
    </div>
  )
}

export default Label