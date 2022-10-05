import '../styles/ContactoPage.css';

import React from "react";
import { click } from '@testing-library/user-event/dist/click';
const ContactoPage = (props) => {
    return (

        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form action="" method="" class="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="email" name="" />
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <hr></hr>
            <section className="social">

                <p>SEGUINOS EN NUESTRAS REDES SOCIALES</p>
                <div className="links">
                    <button onClick={click}>
                        <i class="fab fa-facebook-f"></i>
                    </button>
                    <button onClick={click}>
                        <i class="fab fa-twitter"></i>
                    </button>
                    <button onClick={click}>
                        <i class="fab fa-linkedin"></i>
                    </button>

                </div>

            </section>
        </main>
    );
}
export default ContactoPage;