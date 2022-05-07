import {BrowserRouter, Routes, Route} from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Transactions from './Transactions';
import Inputs from './Inputs';
import Outputs from './Outputs';

export default function App() {
    return (
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
    );
}