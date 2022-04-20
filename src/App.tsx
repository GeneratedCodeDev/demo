import 'antd/dist/antd.less';
import { BrowserRouter } from 'react-router-dom';

import './config/ReactotronConfig';

import LayoutRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <LayoutRoutes />
    </BrowserRouter>
  );
}

export default App;
