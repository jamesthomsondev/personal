import axios from 'axios';

export function getSkillsets () {
  return axios.get('/db/skillsets.json');
}

export function getJobs () {
  return axios.get('/db/jobs.json');
}

export function getArticles () {
  return axios.get('/db/articles.json');
}