import { Col, Container, Row } from "reactstrap";
import Image from "next/image";
import validator from "validator";
import Styles from "../../styles/Pet.module.css"

const Login = () => {

    const valid = () => {
        const formulario = document.querySelector('.formulario');
        formulario.addEventListener('submit', e => {
            e.preventDefault();
            const el = e.target;
            const nomeInput = el.querySelector('input[name=nome]');
            let error = false;

            if (!validator.isEmail(nomeInput.value)) {
                alert('EMail invlaido');
                error = true;
            }
            if (!error) el.submit();
        });
    };

    return (
        <div className="container paddingbotton" >
            <div className="row">
                {/* imagem */}
                <div className="col-sm-8 col-lg-5 tdlog">
                    <Image src="/log1.jpg" width={370} height={458} />
                </div>

                {/* formulario */}
                <div className="col-sm-8 col-md-auto col-lg-6 card-formulario" >
                    <div className="card" >

                        <div className="card-header text-center">
                            <h2>Entrar</h2>
                        </div>

                        <div className="card-body">
                            <form action="" method="post" >
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com" />
                                    <label htmlFor="floatingInputEmail">Seu e-mail</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Sua senha" />
                                    <label htmlFor="floatingPassword">Sua senha</label>
                                </div>
                            </form>
                        </div>

                        <div className="card-footer">
                            <div className="mb-3 form-check d-flex justify-content-center" >
                                <input type="checkbox" id="exampleCheck1" className="form-check-input" id="exampleCheck1" />
                                <label for="exampleCheck1" className="form-check-label">Mantenha conectado</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="d-grid gap-2 text-center  paddingbotton">
                                <button type="submit" className="btn btn-primary btvejamais lg justify-content-center" onClick={() => valid()}>Entrar</button>
                            </div>
                            <div className="link">
                                <br />Ainda não tem conta?<a href="/cadastrouser">Cadastre-se</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login;

