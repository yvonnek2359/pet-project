import React, { useEffect, useState } from 'react';
import { getStory } from '../services/hnApi';

import uparrow from '../grayarrow.gif';

import '../styles/Story.scss';

export const Story = ({ index, storyId }) => {
    const[ story, setStory ] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && setStory(data));
    }, []);

    const showMinute = (time) => {
        let minutes = time % 60;
        return minutes;
    }

    return story ? (
        <tr>
            <tr>
                <td align="right" valign="top" className="title">
                    <span>{index+1}</span>
                </td>
                <td><img className="votearrow" src={uparrow} /></td>
                <td className="title">
                    <a href={story.url}>{story.title}</a>
                    {
                        story.url ? <span className="siteurl"><a href="">({story.url})</a></span>
                        : null
                    }
                </td>
            </tr>
            <tr>
                <td colSpan="2"></td>
                <td className="subtext">
                    {story.score} points by <a href="/">{story.by}</a> {showMinute(story.time)} minutes ago
                </td>
            </tr>
        </tr>
    ) : null
};