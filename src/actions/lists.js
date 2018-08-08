import { getColor, getMulticolor, getArtifacts, getNonBasicLand } from '../mtg'

export const GET_LISTS_START = 'GET_LISTS_START';
export const GET_LISTS = 'GET_LISTS';
export const MOVE_CARD = 'MOVE_CARD';
export const MOVE_LIST = 'MOVE_LIST';
export const TOGGLE_DRAGGING = 'TOGGLE_DRAGGING';

export function getLists(quantity) {
  return dispatch => {
    dispatch({ type: GET_LISTS_START, quantity });
    //FIXME this Timeout function takes too long!
    setTimeout(() => {

      //TODO toggle on/off rares
      
      var categories = [ 
        { name: "Multicolor", cards: getMulticolor()}, 
        { name: "White",      cards: getColor("White")},
        { name: "Blue",       cards: getColor("Blue")},
        { name: "Black",      cards: getColor("Black")},
        { name: "Red",        cards: getColor("Red")},
        { name: "Green",      cards: getColor("Green")},
        { name: "Artifact",   cards: getArtifacts()},
        { name: "Land",       cards: getNonBasicLand()}
      ];

      const lists = [];
      let count = 0;
      for (let i = 0; i < categories.length; i++) {
        const cards = [];
        for (let ic = 0; ic < categories[i].cards.length; ic++) {
          cards.push({
            id: categories[i].cards[ic].multiverseid,
            name: categories[i].cards[ic].name,
            type: categories[i].cards[ic].type
          });
          count = count + 1;
        }
        lists.push({
          id: i,
          name: categories[i].name,
          cards
        });
      }
      dispatch({ type: GET_LISTS, lists, isFetching: true });
    }, 1000); // fake delay
    dispatch({ type: GET_LISTS_START, isFetching: false });
  };
}

export function moveList(lastX, nextX) {
  return (dispatch) => {
    dispatch({ type: MOVE_LIST, lastX, nextX });
  };
}

export function moveCard(lastX, lastY, nextX, nextY) {
  return (dispatch) => {
    dispatch({ type: MOVE_CARD, lastX, lastY, nextX, nextY });
  };
}

export function toggleDragging(isDragging) {
  return (dispatch) => {
    dispatch({ type: TOGGLE_DRAGGING, isDragging });
  };
}
