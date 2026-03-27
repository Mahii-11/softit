import { Outlet } from "react-router";
import Header from "./Header";
import Navbar from "./Navbar";


export default function AppLayout() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}
