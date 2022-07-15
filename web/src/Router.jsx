import { Route, Routes } from "react-router-dom";
import { Auth } from "./auth";
import { Home } from "./home";


export function Router() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Auth />} />
        {/* <Route path="/auth" element={<Auth />} /> */}
      </Routes>
    </>
  )
}