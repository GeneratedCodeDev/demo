import { Routes, Route } from 'react-router-dom'
import Login from '../../src/pages/Login';
import RevisaodeOPContent from '../../src/pages/RevisaodeOPContent';
const IndexRoutes = () => (
<Routes>
<Route  path='' element={<Login/>} />
<Route  path='login' element={<Login/>} />
<Route  path='revisaode-o-p-content' element={<RevisaodeOPContent/>} />
</Routes>
);
export default IndexRoutes;
