# ReduxBasicCounter
A Redux Counter example(without any styling) to demonstarte all the Redux components to take care while creating the React application.Separate files for REDUCERS , ACTIONS have been created. createStorehas been used to link to the REDUCERS so that data can be accessed by them,PROVIDERS have been used so that the store data can be used across the application.A good design pattern used for REDUX.




Redux (React State Management Tool)
Redux for beginners – Dev Ed(Youtube)
•	It is mainly used to manage state properly in React.
•	The issue in React which Redux solves is:
 
o	Imagine there is a React app,  APP with other smaller components like Search, MovieList, Movie and Login.
o	Now the MovieList calls Movie component and passes it’s state data to it. The problem is that state data of Movie component can not be sent back to MovieList or even MovieList can not send it’s state data to Search , Login or even APP.It’s a one way state transfer that happens in React.
o	React solves it by keeping all the Components state data in the APP component and then all other Components  can access it as we pass into them. The problem is we have more components then very tough to manage ; keeping state data of a MovieList component in APP also does not make logical sense. Even we might have to pass functions from APP to MovieList and then delete some data  in MovieList, which should again change state data in APP. Too much complexity!
o	Redux maintains a separate section\Area where every Component can access there own state data independently.
 
•	Will create a new React project ‘learn-redux’ --  npx create-react-app learn-redux .
•	Install redux and redux-react.
•	Inside index.js in a normal React Project
//STORE -- A globalized state , holds all the data for the appliction 

//ACTION -- Describes what we want to do(will build a counter),Increment is the action

//REDUCER -- It checks which action is called and then this modifies the Store above.

//DISPATCH -- Hey Dispatch this ACTION to the REDUCER

//So it is like DISPATCH --> ACTION --> REDUCER --> STORE
•	The main roles are played by DISPATCH  ACTION  REDUCER  STORE defined above.
•	A sample program :
//STORE -- A globalized state , holds all the data for the appliction 
//Created just after 'counter' Reducer
//let store = createStore(counter);

//ACTION -- Describes what we want to do (will build a counter), Increment is the action
const increment = () => {
    return{
        type: 'INCREMENT'
    }
}

const decrement = ()=>{
    return{
        type: 'DECREMENT'
    }
}

//REDUCER -- It checks which action is called and then this modifies the Store above.
const counter = (state = 0, action)=>{
    switch(action.type){
        case 'INCREMENT' : 
                return state + 1;
        case 'DECREMENT' :
                return state - 1;      
    }
  
}

let store = createStore(counter);

//Display in the console
store.subscribe(() => console.log(store.getState()));

//DISPATCH -- Hey Dispatch this ACTION to the REDUCER
store.dispatch(increment());
•	The output of the program is 1 as Increment action is called and it increments the ‘store’ which is counter.
•	We Dispatch an Action , our Reducer will look which Action is Dipatched and then based on the name of the Action and then it will return a piece of State(on the store created) which was, state + 1 is returned.
•	The best design strategy would be to divide the ACTIONS and REDUCER to separate folders and create their files there. Wil do that now.
 
•	We have separate folders for ACTIONS and REDUCERS. Inside Reducers we have a index.js the purpose being it combines all the other reducers together.
import counterReducer from './counter';
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter : counterReducer,
    isLogged : loggedReducer

})

export default allReducers;
•	Finally, only this REDUCER->index.js is imported into the main index.js and used to perform all ACTIONS. A PROVIDER is also used to bring in the store(data) for the REDUCER to use across the application.(below code)
import allReducers from './reducers/index.js'
import {Provider} from 'react-redux'

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

, document.getElementById('root'));
•	The codebase of the Counter APP in Redux is available in LINK section for the Github.


