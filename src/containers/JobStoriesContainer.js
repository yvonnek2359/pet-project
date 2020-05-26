import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import { getJobStoryIds } from '../services/hnApi';
import { JobStory } from '../components/JobStory';

export const JobStoriesContainer = () => {
    const [ jobStoryIds, setJobStoryIds ] = useState([]);

    useEffect(() => {
        getJobStoryIds().then(data => setJobStoryIds(data));
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
                                        <span>These are jobs at YC startups. See more at <a href="/">Work at a Startup</a>.</span>
                                    </td>
                                </tr>
                                {jobStoryIds.map((jobstoryId, index) => (
                                    <JobStory index={index} jobstoryId={jobstoryId} />
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