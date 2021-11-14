import { Col, Container, Row } from "reactstrap";
import Image from "next/image";
import validator from "validator";

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
        <Container className="imglog">
            <Row className="linhalog">
                <Col className="tdlog">
                    <Image src="/log1.jpg" width={370} height={458} />
                </Col>
                <Col >
                    <h1>login</h1>
                    <form className='formulario'>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label-sm">Nome</label>
                            <input type="Nome" name='nome' className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="logNome" placeholder="Digite sem nome" />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label-sm">Senha</label>
                            <input type="password" className="form-control form-control-sm" id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" id="exampleCheck1" className="form-check-input" id="exampleCheck1" />
                            <label for="exampleCheck1" className="form-check-label">Mantenha conectado</label>
                        </div>
                        <div className="d-grid gap-2">
                            <button type="submit" className="btn btn-primary btvejamais lg" onClick={() => valid()}>Entrar</button>
                        </div>
                        <p className="link">
                            <br />Ainda não tem conta?<a href="/cadastrouser">Cadastre-se</a>
                        </p>
                    </form>
                </Col>
            </Row>

        </Container>
    );
};


export default Login;

