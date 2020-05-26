import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newTopStoriesUrl = `${baseUrl}topstories.json`;
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const askStoriesURL = `${baseUrl}askstories.json`;
export const showStoriesURL = `${baseUrl}showstories.json`;
export const jobStoriesURL = `${baseUrl}jobstories.json`;

export const getTopStoryIds = async() => {
    const result = await axios.get(newTopStoriesUrl).then(({ data }) => data);

    return result;
}

export const getTopStory = async(topstoryId) => {
    const result = await axios
    .get(`${storyUrl + topstoryId}.json`)
    .then(({ data }) => data);

    return result;
}

export const getStory = async(storyId) => {
    const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data);

    return result;
}

export const getStoryIds = async() => {
    const result = await axios.get(newStoriesUrl).then(({ data }) => data);

    return result;
}

// ASK
export const getAskStory = async(askjobId) => {
    const result = await axios.get(`${storyUrl + askjobId}.json`).then(({ data }) => data);
    return result;
}
export const getAskStoryIds = async () => {
    const result = await axios.get(askStoriesURL).then(({ data }) => data );

    return result;
}

export const getShowStory = async(showjobId) => {
    const result = await axios.get(`${storyUrl + showjobId}.json`).then(({ data }) => data);
    return result;
}

export const getShowStoryIds = async () => {
    const result = await axios.get(showStoriesURL).then(({ data }) => data );

    return result;
}

export const getJobStory = async(jobId) => {
    const result = await axios.get(`${storyUrl + jobId}.json`).then(({ data }) => data);
    return result;
}

export const getJobStoryIds = async () => {
    const result = await axios.get(jobStoriesURL).then(({ data }) => data );

    return result;
}