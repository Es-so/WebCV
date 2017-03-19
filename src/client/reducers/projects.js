import { PROJECTS_LOADED, GET_TYPE_LIST } from '../actions/projects';

const loadProjects = (state, action) => {
  const { payload } = action;
  const data = payload;
  const newState = { data };
  return newState;
};

const projects = (state = { data: {} }, action) => {
  switch (action.type) {
  	case PROJECTS_LOADED:
  	  return loadProjects(state, action);
  	case GET_TYPE_LIST: {
  	  	return { ...state, type: action.typeProject };
  	  }
    default:
      return state;
  }
};

export default projects;
 