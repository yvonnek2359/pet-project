import React, { useEffect, useState } from 'react';
import { getAskStory } from '../services/hnApi';

import uparrow from '../grayarrow.gif';
import { Link } from 'react-router-dom';

export const AskStory = ({ index, askstoryId }) => {
    const[ askstory, setAskJobStory ] = useState({});

    useEffect(() => {
        getAskStory(askstoryId).then(data => data && setAskJobStory(data));
    }, []);

    return askstory ? (
        <tr>
            <tr>
                <td align="right" valign="top" className="title">
                    <span>{index+1}</span>
                </td>
                <td><img className="votearrow" src={uparrow} /></td>
                <td className="title">
                    <Link to={`/item?id=${askstoryId}`}>
                        {askstory.title}
                    </Link>
                </td>
            </tr>
            <tr>
                <td colSpan="2"></td>
                <td className="subtext">
                    {askstory.score} points by <a href="/">{askstory.by}</a>
                </td>
            </tr>
        </tr>
    ) : null
};
