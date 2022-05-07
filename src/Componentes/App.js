import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Inputs from './Inputs';
import Outputs from './Outputs';
import Transactions from './Transactions';
import UserContext from './../context/UserContext';

export default function App() {
    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
            <Routes>
                <Route path='/sign-in' element={<SignIn/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/transactions' element={<Transactions/>}/>
                <Route path='/transactions/inputs' element={<Inputs/>}/>
                <Route path='/transactions/outputs' element={<Outputs/>}/>
                <Route />
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    );
}