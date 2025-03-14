import {Routes, Route} from 'react-router-dom';
import MainDefault from './MainDefault';
import '../styles/Main.css';
import Login from './Login';
import Join from './Join';
import BList from './BList';
import MList from './MList';
import MyInfo from './MyInfo';


export default function Main({onLoginSubmit}) {
    return (
        <div>
            <Routes>
                <Route path='/' element={<MainDefault />} />
                <Route path='/login' element={<Login onLoginSubmit={onLoginSubmit} />} />
                <Route path='/join' element={<Join />} />
                <Route path='/boardList' element={<BList />} /> 
                               
                <Route path='/memberList' element={<MList />} />
                <Route path='/MyInfo' element={<MyInfo />} />
            </Routes>
        </div>
    ); //return
}