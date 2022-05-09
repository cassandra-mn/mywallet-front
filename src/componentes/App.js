import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Inputs from './Inputs';
import Outputs from './Outputs';
import EditInput from './EditInput';
import EditOutput from './EditOutput';
import Transactions from './Transactions';
import UserContext from './../context/UserContext';

export default function App() {
    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SignIn/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/transactions' element={<Transactions/>}/>
                <Route path='/transactions/input' element={<Inputs/>}/>
                <Route path='/transactions/output' element={<Outputs/>}/>
                <Route path='/transactions/edit-input/:id' element={<EditInput/>}/>
                <Route path='/transactions/edit-output/:id' element={<EditOutput/>}/>
                <Route />
            </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    );
}