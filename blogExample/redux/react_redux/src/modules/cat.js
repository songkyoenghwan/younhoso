const CAHNGE_NAME = "cat/CHANGE_NAME";

const initial_state = {
	name: "TriplexLab", 
	age: 5
};

// Actions
export const changeName = (name) => ({type: CAHNGE_NAME, name});

//Reducer
export default function reducer(state = initial_state, action = {}){
	switch(action.type){
		case CAHNGE_NAME: {
			return {...state, name: action.name}
		}
		default:
			return state
	}
}
