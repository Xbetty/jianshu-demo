const defaultState = {
    focused: false
};

export default (state=defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if (action.type === 'search_focus') {
        newState.focused = action.focused;
        return newState
    }
    if (action.type === 'serach_blur') {
        newState.focused = action.focused;
        return newState
    }
    return state
}