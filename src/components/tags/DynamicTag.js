import React from 'react';

export default function DynamicTag (props) { return (
    <a
        style={{
            textDecoration: "none",
            display: "inline-block",
            background: "rgba(255, 255, 255, 0.1)",
            padding: "0px 8px 0px 5px",
            borderRadius: "20px",

            "&:hover": {
              background: "rgba(255, 255, 255, 0.5)"
            },
        }}
        href={`/rusty-connector/docs/${props.href}`}
        title={props.title}
    >
        <span style={{paddingRight:"2px"}}>{props.emoji}</span>
        <span style={{}}>{props.name}</span>
    </a>
  );}