import React from 'react';
import DynamicTag from "./DynamicTag";

export default function StaticFamilyTag ({children}) { return (
    <DynamicTag
        emoji={"🌩️"}
        href={"concepts/families/static"}
        name={children}
        title={`A static family named: "${children}"`}
        />
  );}