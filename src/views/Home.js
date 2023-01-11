import React from "react";
import Todolist from "../components/Todolist";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TodoAnalytics from "./TodoAnalytics";

function Home() {
  return (
    <div>
        <NavBar />
        <section>
            <Todolist />
        </section>
        <Footer />
        <TodoAnalytics />
    </div>
  )
} 

export default Home;