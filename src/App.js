import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [hello, setHello] = useState('');
  useEffect(() => {
    axios.get('http://localhost:8080/api/test')
      .then((res) => {
        setHello(res.data);
      });
  }, []);

  return (
    <div className="App">
      <div>커밋 이정원</div>
      <div>백엔드 데이터: {hello}</div>
    </div>
  );
}

export default App;
