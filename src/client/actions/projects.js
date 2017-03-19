import { projects } from '../utils/projects';

export const LOAD_PROJECTS = 'projects/loadProjects';
export const PROJECTS_LOADED = 'projects/projectsLoaded';
export const FILTER_PROJECT_LIST = 'projects/filterProjectList';
export const SORT_PROJECT_LIST = 'projects/sortProjectList';
export const GET_TYPE_LIST = 'projects/getTypeList';

export const getTypeList = type => ({
  type: GET_TYPE_LIST,
  typeProject: type,
});

export const projectsLoaded = projects => ({
  type: PROJECTS_LOADED,
  payload: projects,
});

export const loadProjects = () => (dispatch) => {
  const allProjects = projects;
  dispatch(projectsLoaded(projects));
}