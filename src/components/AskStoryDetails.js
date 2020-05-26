import React, { useLocation, useEffect, useState } from 'react';

export const AskStoryDetails = ( props ) => {
    const { match } = props;
    let { askstoryId } = match.params;

    return(
        <div>
            <p>done: {askstoryId}</p>
        </div>
    )
 };