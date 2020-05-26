import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getTopStoryIds } from '../services/hnApi';
import { TopStory } from '../components/TopStory';

import '../styles/StoriesContainer.scss';

export const TopStoriesContainer = () => {
    const [ storyIds, setStoryIds ] = useState([]);

    useEffect(() => {
        getTopStoryIds().then(data => setStoryIds(data));
    }, []);

    return(
        <Table borderless>
            <tbody>
                <tr>
                    <td>
                        <Table  borderless size="sm" cellpadding="0" cellspacing="0">
                            <tbody>
                                {storyIds.map((topstoryId, index) => (
                                    <TopStory index={index} topstoryId={topstoryId} />
                                ))}
                            </tbody>
                        </Table>
                    </td>
                    <td style={{width: "40%"}}></td>
                </tr>
                <tr className="bottomrow">
                    <td colSpan="2">
                        row
                    </td>
                </tr>
            </tbody>
        </Table>
    );
}