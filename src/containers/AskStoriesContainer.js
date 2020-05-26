import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import { getAskStoryIds } from '../services/hnApi';
import { AskStory } from '../components/AskStory';

export const AskStoriesContainer = () => {
    const [ askstoryIds, setAskStoryIds ] = useState([]);

    useEffect(() => {
        getAskStoryIds().then(data => setAskStoryIds(data));
    }, []);

    return(
        <Table borderless>
            <tbody>
                <tr>
                    <td>
                        <Table  borderless size="sm" cellpadding="0" cellspacing="0">
                            <tbody>
                                {askstoryIds.map((askstoryId, index) => (
                                    <AskStory index={index} askstoryId={askstoryId} />
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

