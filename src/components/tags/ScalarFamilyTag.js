import React from 'react';
import DynamicTag from "./DynamicTag";

export default function ScalarFamilyTag ({children}) { return (
    <DynamicTag
        emoji={"🌧️"}
        href={"concepts/families/scalar"}
        name={children}
        title={`A scalar family named: "${children}"`}
        />
  );}