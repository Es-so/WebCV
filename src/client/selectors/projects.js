import R from 'ramda';
import { createSelector } from 'reselect';

const getArraysOfProjects = (projects, type) => R.values(R.map(R.values, projects));
const getArrayOfProjects = projects => R.reduce((accu, value) => ([ ...accu, ...value ]), [])(projects)
const regexp = filter => new RegExp(filter, 'i');
const match = (filter, target) => R.match(regexp(filter), target);
const matchTags = (tags = [''], project) => R.find(t => R.find(pt => (t ===  pt) , project.tags))(tags);
const filterTags = (tags, projects) => R.filter(p => matchTags(tags, p), projects);
const filterProject = (filter, option, projects) => R.filter(project => match(filter, project[option]).length, projects)

const getVisibleProject = (type = 'all', projects, filter, option = 'title', tags = []) => {
  const allProjects = R.compose(getArrayOfProjects, getArraysOfProjects)(projects);
  if (option === 'tags') return (tags.length ? filterTags(tags ,allProjects) : allProjects);
  return filterProject(filter, option, (type === 'all' ? allProjects : (R.filter(e => (e.categorie === R.toLower(type)), allProjects))))
};

// _______________________________________________________________ \\

const getType = state => state.projects.typeProject;
const getProjects = state => state.projects.data;
const getFilter = state => state.projects.filter;
const getFilterOption = state => state.projects.option;
const getSort = state => state.projects.sort;
const getTags = state => state.projects.tags;

export const getAllProjects = createSelector( // eslint-disable-line
  [getProjects, getType, getFilter, getFilterOption, getTags],
    (projects, type, filter, option, tags) =>
      getVisibleProject(type, projects, filter, option, tags)
)
