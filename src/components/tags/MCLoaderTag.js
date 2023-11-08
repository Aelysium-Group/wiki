import React from 'react';
import DynamicTag from "./DynamicTag";

export default function MCLoaderTag ({children}) { return (
    <DynamicTag
        emoji={"📦"}
        href={"concepts/loader"}
        name={children}
        title={`A reference to the MCLoader page`}
        />
  );}