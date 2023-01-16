import React, { useState } from "react";
import Todolist from "../components/Todolist";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TodoAnalytics from "./TodoAnalytics";

function Home(props) {
  const [todos,setTodos] = useState([
        {
            "id": 1,
            "title": "learn React",
            "description": "intro to react",
        },
        {
            "id": 2,
            "title": "go to the market",
            "description": "buy groceries for nyanyez",
        },
        {
          "id": 3,
          "title": "go to the gym",
          "description": "grow thinner",
      }        
    ])
  return (
    <div>
        <NavBar />
        <section>
            <Todolist todos={todos} />
        </section>
        <Footer />
        <TodoAnalytics />
    </div>
  )
} 

export default Home;