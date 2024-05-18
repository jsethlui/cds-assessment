import { useState } from 'react'
import { useSearchParams } from "react-router-dom";
import './App.css'

import Nonprofit from './components/Nonprofit.tsx'
import Admin from './components/Government.tsx'

function App() {

  const [searchParams, setSearchParams] = useSearchParams();
  const isUser = searchParams.get("user_type") === "user" ? true : false

  return (
    <>
      <button className="absolute top-5 right-5"
              onClick={() => localStorage.clear()}>
        Clear Local Storage
      </button>
      {isUser ? <Nonprofit /> : <Admin />}
    </>
  )
}

export default App
