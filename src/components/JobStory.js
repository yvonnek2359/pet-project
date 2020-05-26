import React, { useEffect, useState } from 'react';
import { moment } from 'moment';
import { getJobStory } from '../services/hnApi';

export const JobStory = ({ jobstoryId }) => {
    const[ jobstory, setJobStory ] = useState({});

    useEffect(() => {
        getJobStory(jobstoryId).then(data => data && setJobStory(data));
    }, []);

    const showDays = (time) => {
        // var myDate = new Date( time*1000);
        // var utc = myDate.toLocaleString()
        // var nd = new Date(utc + (3600000*time));
        // return utc;
         
        let todaySeconds = new Date().getTime()/1000.0;
        let secsDiff = todaySeconds - time;
        var d = Math.floor(secsDiff / (3600*24));
        return d;
    }

    return jobstory ? (
        <tr>
            <tr>
                <td className="title">
                    <a href={jobstory.url}>{jobstory.title}</a>
                    {
                        jobstory.url ? <span className="siteurl"><a href="">({jobstory.url})</a></span>
                        : null
                    }
                    
                </td>
            </tr>
            <tr>
                <td className="subtext">
                    {showDays(jobstory.time)} days ago
                </td>
            </tr>
        </tr>
    ) : null
};