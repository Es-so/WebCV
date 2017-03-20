import tags from '../utils/projects';

export const TAGS_LOADED = 'projects/getSort';

export const tagsLoaded = tags => ({
  type: TAGS_LOADED,
  payload: tags,
});

export const loadTags = () => (dispatch) => {
  const allTags = tags;
  dispatch(tagsLoaded(allTags));
}
