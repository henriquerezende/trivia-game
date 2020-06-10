import { CHANGE_USER_INFO, CHANGE_SCORE, ADD_ASSERTION } from '../actions/types';

let score = 0;
let name = '';
let gravatarEmail = '';
let assertions = 0;

if (localStorage.getItem('state')) {
  const stt = JSON.parse(localStorage.getItem('state'));
  score = stt.player.score;
  name = stt.player.name;
  gravatarEmail = stt.player.gravatarEmail;
  assertions = stt.player.assertions;
}

const initialState = {
  player: {
    score,
    name,
    gravatarEmail,
    assertions,
  },
};

export default (state = initialState, { type, name, gravatarEmail, score }) => {
  switch (type) {
    case CHANGE_USER_INFO:
      localStorage.setItem('state', JSON.stringify({ player: { ...state.player, name, gravatarEmail } }));
      return { ...state, player: { ...state.player, name, gravatarEmail } };
    case CHANGE_SCORE:
      localStorage.setItem('state', JSON.stringify({ player: { ...state.player, score: state.player.score + score } }));
      return { ...state, player: { ...state.player, score: state.player.score + score } };
    case ADD_ASSERTION:
      localStorage.setItem('state', JSON.stringify({ player: { ...state.player, assertions: state.player.assertions + 1 } }));
      return { ...state, player: { ...state.player, assertions: state.player.assertions + 1 } };
    default:
      return state;
  }
};
