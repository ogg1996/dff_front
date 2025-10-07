import './App.css';

import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import UserInfo from './pages/UserInfo';

import AccessDenied from './components/AccessDenied';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';
import TopButton from './components/TopButton';

function App() {
  const [activeNav, setActiveNav] = useState();

  const now = new Date();
  const today = now.getDay();
  const nowHours = now.getHours();

  // 목요일 0시부터 10시 전까지 사이트 접근을 막는 코드 (OPEN API 점검)
  if (today === 4 && 0 <= nowHours && nowHours < 10)
    return <AccessDenied />;

  return (
    <div className="flex flex-col gap-[20px]">
      <div>
        <HeaderNav activeNav={activeNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/userinfo/:username"
            element={<UserInfo setActiveNav={setActiveNav} />}
          />
        </Routes>
      </div>
      <Footer />
      <TopButton />
    </div>
  );
}

export default App;
