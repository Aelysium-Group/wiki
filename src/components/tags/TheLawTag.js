import React from 'react';
import DynamicTag from "./DynamicTag";

export default function ScalarFamilyTag ({children}) { return (
    <DynamicTag
        emoji={"📜"}
        href={"the_law"}
        name={children}
        title={`A reference to the RC law: ${children}`}
        />
  );}