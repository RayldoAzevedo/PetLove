import { Col, Container, Row } from "reactstrap";
import Image from "next/image";


const Login = () =>(

    <Container  className="imglog">
    <Row className="linhalog">
      <Col className="tdlog">
        <Image src="/log1.jpg" width={370} height={458} />
        </Col>
        <Col >
            <h1>login</h1>
            <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label-sm">Nome</label>
                <input type="Nome" class="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="logNome" placeholder="Digite sem nome"/>
            </div>

            <div className="mb-3">
                <label for="exampleInputPassword1" class="form-label-sm">Senha</label>
                <input type="password" class="form-control form-control-sm" id="exampleInputPassword1"/>
            </div>

            <div className="mb-3 form-check">
                <input type="checkbox"  id="exampleCheck1"  class="form-check-input" id="exampleCheck1"/>
                <label for="exampleCheck1" class ="form-check-label">Mantenha conectado</label>
            </div>
            <div className="d-grid gap-2">
                <button type="submit" class="btn btn-primary btvejamais lg">Entrar</button>
            </div>  
            <p class="link">
                <br/>Ainda não tem conta?<a href="/cadastrouser">Cadastre-se</a>
            </p>        
            </form>
        </Col>
    </Row>

  </Container>

);

export default Login;

