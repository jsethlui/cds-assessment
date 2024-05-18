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
      {isUser ? <Nonprofit /> : <Admin />}
    </>
  )
}

export default App
