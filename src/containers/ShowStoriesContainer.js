import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import { getShowStoryIds } from '../services/hnApi';
import { ShowStory } from '../components/ShowStory';

export const ShowStoriesContainer = () => {
    const [ showstoryIds, setShowStoryIds ] = useState([]);

    useEffect(() => {
        getShowStoryIds().then(data => setShowStoryIds(data));
    }, []);

    return(
        <Table borderless>
            <tbody>
                <tr>
                    <td>
                        <Table  borderless size="sm" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td style={{color: '#828282'}}>
                                        <span>Please read the rules. You can also browse the newest Show HNs.</span>
                                    </td>
                                </tr>
                                {showstoryIds.map((showstoryId, index) => (
                                    <ShowStory index={index} showstoryId={showstoryId} />
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