import React, { useEffect, useState } from 'react';
import { getTopStory } from '../services/hnApi';

import uparrow from '../grayarrow.gif';

import '../styles/Story.scss';

export const TopStory = ({ index, topstoryId }) => {
    const[ topstory, setTopStory ] = useState({});

    useEffect(() => {
        getTopStory(topstoryId).then(data => data && setTopStory(data));
    }, []);

    const showMinute = (time) => {
        let todaySeconds = new Date().getTime()/1000.0;
        let timeDiff = todaySeconds - time ;
        return Math.floor(timeDiff / 3600);
    }

    return topstory ? (
        <tr>
            <tr>
                <td align="right" valign="top" className="title">
                    <span>{index+1}</span>
                </td>
                <td><img className="votearrow" src={uparrow} /></td>
                <td className="title">
                    <a href={topstory.url}>{topstory.title}</a>
                    { topstory.url ? <span className="siteurl"><a href="">({topstory.url})</a></span>
                    : null
                    }
                </td>
            </tr>
            <tr>
                <td colSpan="2"></td>
                <td className="subtext">
                    {topstory.score} points by <a href="/">{topstory.by}</a> {showMinute(topstory.time)} hours ago
                </td>
            </tr>
        </tr>
    ) : null
};