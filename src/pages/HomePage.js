import '../styles/HomePage.css' ;



import { click } from "@testing-library/user-event/dist/click";
import React from "react";
const HomePage = (props) => {
    return (
        <header className="showcase">
        <h1>Bienvenidos a Mundo Graffiti</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sit earum obcaecati sapiente quia quibusdam commodi libero tempore vero quaerat nihil nam saepe atque voluptates enim ullam, amet aspernatur aperiam?</p>
        <button onClick={click}>Aprender mas<i class="fas fa-angle-double-right"></i></button>
        </header>
       
    
        );
}
export default HomePage;