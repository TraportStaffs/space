// api.js
import axios from 'axios';

export async function getGitHubIssues(state, sort) {
  const API_ENDPOINT = 'https://api.github.com/repos/facebook/react/issues';
  const API_VERSION = '2022-11-28';
  const YOUR_TOKEN = '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'; // GitHub Personal Access Token을 여기에 입력하세요
  
  try {
    const response = await axios.get(API_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${YOUR_TOKEN}`,
        'X-GitHub-Api-Version': API_VERSION,
      },
      params: {
        state: state,
        sort: sort,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
