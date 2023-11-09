import React from 'react';

export default function MenuItem (props) { return (
<article class="col col--6 margin-bottom--lg">
    <a href={`/rusty-connector/docs/${props.href}`} class="card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module">
        <h2 class="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module">{props.title}</h2>
        <p class="text--truncate cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module">{props.description}</p>
    </a>
</article>
  );}