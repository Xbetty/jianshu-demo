import * as constants from './constants';
export const searchFocus = () => ({
    type: constants.SEARCH_FOCUS,
    focused: true
});
export const searchBlur = () => ({
    type: constants.SEARCH_BLUR,
    focused: false
});