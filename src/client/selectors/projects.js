import R from 'ramda';
import { createSelector } from 'reselect';


const getArraysOfProjects = (projects, type) => R.values(R.map(R.values, projects));
const getArrayOfProjects = projects => R.reduce((accu, value) => ([ ...accu, ...value ]), [])(projects)

const getVisibleProject = (type, projects) => {
  const allProjects = R.compose(getArrayOfProjects, getArraysOfProjects)(projects);
  if (type && type !== 'all') 
  	return R.filter(e => (e.categorie === R.toLower(type)))(allProjects)
  return allProjects;
};

// _______________________________________________________________ \\

const getType = state => state.projects.type;
const getProjects = state => state.projects.data;
const getFilter = state => state.projects.filter;
const getSort = state => state.projects.sort;

export const getAllProjects = createSelector( // eslint-disable-line
  [getProjects, getType],
    (projects, type) =>
      getVisibleProject(type, projects)
)
