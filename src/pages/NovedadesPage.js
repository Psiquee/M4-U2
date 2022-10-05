import '../styles/NovedadesPage.css' ;

import { click } from "@testing-library/user-event/dist/click";
import React from "react";
const NovedadesPage = (props) => {
    return (
        <><div className="new-cards">
            <div>
                <img src="https://via.placeholder.com/150" alt=" noticia1" />
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla id illum consequuntur illo recusandae maiores impedit voluptatem earum quisquam incidunt?</p>
                <button onClick={click}>Leer mas <i class="fas fa-angle-double-right"></i></button>
            </div>

            <div>
                <img src="https://via.placeholder.com/150" alt=" noticia2" />
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla id illum consequuntur illo recusandae maiores impedit voluptatem earum quisquam incidunt?</p>
                <button onClick={click}>Leer mas <i class="fas fa-angle-double-right"></i></button>
            </div>

            <div>
                <img src="https://via.placeholder.com/150" alt=" noticia3" />
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla id illum consequuntur illo recusandae maiores impedit voluptatem earum quisquam incidunt?</p>
                <button onClick={click}>Leer mas <i class="fas fa-angle-double-right"></i></button>
            </div>

            <div>
                <img src="https://via.placeholder.com/150" alt=" noticia4" />
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla id illum consequuntur illo recusandae maiores impedit voluptatem earum quisquam incidunt?</p>
                <button onClick={click}>Leer mas <i class="fas fa-angle-double-right"></i></button>
            </div>

        </div>
            <section className="cards-banner-one">
                <div class="content">
                    <h2>Lorem, ipsum dolor.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eius ullam atque similique harum quae sint. Deleniti sunt dolorem culpa!</p>
                    <button onClick={click}>Leer mas <i class="fas fa-angle-double-right"></i></button>

                </div>

            </section>
            <div className="new-cards">
                <div>
                    <img src="https://via.placeholder.com/150" alt=" noticia1" />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla id illum consequuntur illo recusandae maiores impedit voluptatem earum quisquam incidunt?</p>
                    <button onClick={click}> Leer mas <i class="fas fa-angle-double-right"></i></button>
                </div>

                <div>
                    <img src="https://via.placeholder.com/150" alt=" noticia2" />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla id illum consequuntur illo recusandae maiores impedit voluptatem earum quisquam incidunt?</p>
                    <button onClick={click}>Leer mas <i class="fas fa-angle-double-right"></i></button>
                </div>

                <div>
                    <img src="https://via.placeholder.com/150" alt=" noticia3" />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla id illum consequuntur illo recusandae maiores impedit voluptatem earum quisquam incidunt?</p>
                    <button onClick={click}>Leer mas <i class="fas fa-angle-double-right"></i></button>
                </div>

                <div>
                    <img src="https://via.placeholder.com/150" alt=" noticia4" />
                    <h3>Lorem, ipsum dolor.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla id illum consequuntur illo recusandae maiores impedit voluptatem earum quisquam incidunt?</p>
                    <button onClick={click} >Leer mas <i class="fas fa-angle-double-right"></i></button>
                </div>

            </div><section className="cards-banner-two">
                <div class="content">
                    <h2>Lorem, ipsum dolor.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eius ullam atque similique harum quae sint. Deleniti sunt dolorem culpa!</p>
                    <button onClick={click}> Leer mas<i class="fas fa-angle-double-right"></i> </button>

                </div>


            </section></>
    );
}
export default NovedadesPage;