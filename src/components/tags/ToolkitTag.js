import React from 'react';
import DynamicTag from "./DynamicTag";

export default function ToolkitTag ({children}) { return (
    <DynamicTag
        emoji={"⚒️"}
        href={"toolkit"}
        name={children}
        title={`A reference to the Toolkit page`}
        />
  );}