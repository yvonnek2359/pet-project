import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getStoryIds } from '../services/hnApi';
import { Story } from '../components/Story';

import '../styles/StoriesContainer.scss';

export const StoriesContainer = () => {
    const [ storyIds, setStoryIds ] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data));
    }, []);

    return(
        <Table borderless>
            <tbody>
                <tr>
                    <td>
                        <Table  borderless size="sm" cellpadding="0" cellspacing="0">
                            <tbody>
                                {storyIds.map((storyId, index) => (
                                    <Story index={index} storyId={storyId} />
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