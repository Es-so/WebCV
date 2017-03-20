import {
  PROJECTS_LOADED,
  GET_TYPE_LIST,
  GET_FILTERING,
  GET_TAGS,
} from '../actions/projects';

const projects = (state = { data: {} }, action) => {
  const {
    type = '',
    typeProject,
    filter,
    option = 'Title',
    tags = [],
    payload,
  } = action;

  switch (type) {
  	case PROJECTS_LOADED:
  	  return { ...state, data: payload };
  	case GET_TYPE_LIST:
  	  	return { ...state, typeProject };
    case GET_FILTERING:
      return { ...state, filter, option };
    case GET_TAGS:
      return { ...state, tags };
    default:
      return state;
  }
};

export default projects;
