import { Route, Routes } from "react-router-dom";
import { App } from "./App";
import { Auth } from "./auth";


export function Router() {
  return (
    <>
      <Routes >
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  )
}