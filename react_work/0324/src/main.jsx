import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test from './Test.jsx'


/*태그를 사용하게 되면 그 안에 있는 함수가 호출되면서 return 되는 내용이 렌더링 됩니다.*/
/*StrictMode 태그가 있으면 렌더링이 2번 일어난다.(?)*/
createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <Test />
  // </StrictMode>,
)
