import React, { useEffect, useState } from 'react';
import uparrow from '../grayarrow.gif';
import { getShowStory } from '../services/hnApi';

export const ShowStory = ({ index, showstoryId }) => {
    const[ showstory, setShowStory ] = useState({});

    useEffect(() => {
        getShowStory(showstoryId).then(data => data && setShowStory(data));
    }, []);

    const showMinute = (time) => {
        let hour = Math.floor(time / 60 / 60);
        return hour;
    }

    return showstory ? (
        <tr>
            <tr>
                <td align="right" valign="top" className="title">
                    <span>{index+1}</span>
                </td>
                <td><img className="votearrow" src={uparrow} /></td>
                <td className="title">
                    <a href={showstory.url}>{showstory.title}</a>
                    { showstory.url ? <span className="siteurl"><a href="">({showstory.url})</a></span>
                    : null
                    }
                </td>
            </tr>
            <tr>
                <td colSpan="2"></td>
                <td className="subtext">
                    {showstory.score} points by <a href="/">{showstory.by}</a> {showMinute(showstory.time)} hours ago
                </td>
            </tr>
        </tr>
    ) : null
}