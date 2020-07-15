import React, { useReducer } from 'react';

const initialState = {
  liked: ['MSI', 'Bloodhound Gang', 'Rammstein', 'System Of A Down', 'Linkin Park'],
  disliked: ['Opera', 'U2', 'Justin'],
  friends: [
    {
      name: 'Max',
      lasname: 'Fuck',
    },
    {
      name: 'Oliver',
      lasname: 'Twist',
    },
  ],
};
//
// reducer takes 2 arguments, state and action (we dont have to pass state manually)
// action is an object with data and 'type'... to simplify syntax we used [method,data] pair
// as a second argument instead of {method: method, data: data} object
// reducer returns new state (hello redux, my old friend)
//
const stateReducer = (state, [type, data]) => {
  switch (type) {
    case 'add': {
      const friends = [...state.friends, data];
      return {
        ...state,
        friends,
      };
    }
    case 'remove': {
      const { name } = data;
      const friends = state.friends.filter((elem) => elem.name !== name);
      return { ...state, friends };
    }
    default:
      return state;
  }
};
//
//
// we can also use reducer to handle forms
// though i still prefer useState
//
const inputReducer = (state, [field, value]) => {
  if (field === 'clear') {
    return { name: '', lastname: '' };
  }
  return {
    ...state,
    [field]: value,
  };
};

const UseReducer = () => {
  //
  // useReducer takes two arguments: reducer to use and initial state
  // and returns state and a dispatcher
  // dispatcher takes 'action'(type + data pair) as the only argument
  //
  //
  const [data, setData] = useReducer(stateReducer, initialState);
  const [input, setInput] = useReducer(inputReducer, {
    name: '',
    lastname: '',
  });

  const handleChange = (e) => {
    // name here is 'name' of the input, so 'name' or 'lastname'
    const { name, value } = e.target;
    // our action with 'type' and 'data':
    const action = [name, value];
    // dispatch this bad boy...
    setInput(action);
  };

  const handleSubmit = (e) => {
    //
    // grab 'name' from the button
    // its gonna be either 'add' or 'remove'
    //
    const { name } = e.target;
    // dispatch type 'add' or 'remove' with the payload
    setData([name, input]);
    //
    // default the input
    setInput(['clear']);
  };
  //
  // destructure state for readability
  const { name, lastname } = input;
  //
  const prettyJSON = JSON.stringify(data, null, 2);

  return (
    <>
      <div>
        <form>
          <input name="name" onChange={handleChange} value={name} placeholder="Name" />
          <input name="lastname" onChange={handleChange} valuew={lastname} placeholder="LastName" />
          <button onClick={handleSubmit} name="add" type="button">
            Add friend
          </button>
          <button onClick={handleSubmit} name="remove" type="button">
            Remove friend
          </button>
        </form>
      </div>
      <pre>{prettyJSON}</pre>
    </>
  );
};

export default UseReducer;
