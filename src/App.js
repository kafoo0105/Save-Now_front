import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [hello, setHello] = useState('');
  useEffect(() => {
    axios.get('http://localhost:8080/api/test')
      .then((res) => {
        setHello(res.data);
      }, []);
  })
  return (
    <div className="App">
      백엔드 데이터: {hello}
      <h1>첫 번째 커밋, 푸시 확인입니다 - 건희</h1>
      <div>커밋</div>
      <div>커밋 이정원</div>
    </div>
  );
}

export default App;
