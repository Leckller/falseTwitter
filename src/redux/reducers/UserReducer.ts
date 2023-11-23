import { AnyAction } from 'redux';
import { USER } from '../actions/ActionUser';

const STATE = {
  user: {},
};

const UserReducer = (state = STATE, action: AnyAction) => {
  switch (action.type) {
    case USER: {
      return { ...state, user: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};

export default UserReducer;
