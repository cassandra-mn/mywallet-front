import {BrowserRouter, Routes, Route} from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Transactions from './Transactions';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/sign-in' element={<SignIn/>}/>
                <Route path='/sign-up' element={<SignUp/>}/>
                <Route path='/transactions' element={<Transactions/>}/>
            </Routes>
        </BrowserRouter>
    );
}