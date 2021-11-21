import Image from "next/image";
import { Container} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSModule } from "reactstrap";

const Contato = () => {
    return(    
    <Container>        
        <small>Entre com sua mensagem (opcional) e clique "Enviar"</small>
        <div class="wrapper centered corpocarta">
            <article class="letter">
                <div class="side">
                    <h1>Contate-Nos</h1>
                    <p>
                        <textarea placeholder="Sua mensagem"></textarea>
                    </p>
                </div>
                <div class="side">
                    <p>
                        <input type='text' placeholder='Seu nome'></input>
                    </p>
                   
                    <p>
                        <input type="email" placeholder="Seu email" ></input>
                    </p>
                    <p>
                        <button id="sendLetter">Enviar</button>
                    </p>
                </div>
            </article>
            <div class="envelope front"></div>
            <div class="envelope back"></div>
        </div>
        <p class="result-message centered">Obrigado por sua mensagem</p>
    </Container>
    )
    function addClass() {
        document.body.classList.add("sent");
      }      
      sendLetter.addEventListener("click", addClass);
}

export default Contato