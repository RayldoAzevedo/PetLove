import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button } from "reactstrap";
import Image from "next/image";

const CadUser = () => (
    <Container>
        <Row>
            <Col>
                <Row>
                    <Col>
                        <h1 className="cadastroUser">Cadastrar usuário?</h1>
                    </Col>
                    <Col >
                        <div className="topCadUser">
                            <Image src="/pegadas.png" width={256} height={105} />
                        </div>
                    </Col>
                </Row>
            </Col>
            
        <Row>
            <Col>
                <Row>
                    <Col>
                    <form method="post" action="" id="userdados">
                        <h1>Cadastro</h1>
                        <p>
                        <label for="nome_cad">Seu nome</label>
                        <input id="nome_cad" name="nome_cad" required="required" maxLength="25" minLength="2" type ="text" placeholder="nome" />
                        </p>
                        
                        <p>
                        <label for="sobrenome_cad">Sobrenome</label>
                        <input id="sobrenome_cad" name="sobrenome_cad" required="required" maxLength ="40" minLength="2" type ="text" placeholder="sobrenome" />
                        </p>

                        <p>
                        <label for="endereco_cad">Endereço</label>
                        <input id="endereco_cad" name="endereco_cad" required="required" maxLength="50" minLength="2" type ="text" placeholder="endereço" />
                        </p>

                        <p>
                        <label for="complemento_cad">Complemento</label>
                        <input id="complemento_cad" name="complemento_cad" maxLength="25" minLength="2" required="required" type ="text"
                        placeholder="complemento" />
                        </p>

                        <p>
                        <label for="bairro_cad">Bairro</label>
                        <input id="bairro_cad" name="bairro_cad" required="required" maxLength="20" minLength="2" type ="text" placeholder="bairro" />
                        </p>

                        <p>
                        <label for="cidade_cad">Cidade</label>
                        <input id="cidade_cad" name="cidade_cad" required="required" maxLength="25" minLength="2" type ="text" placeholder="cidade" />
                        </p>

                        <p class="trespacamento">
                        <tr>
                        <td>
                            <label for="estado">Estado:</label>
                        </td>
                        <td align="left">
                            <select name="estado"> 
                            <option value="ac">Acre</option> 
                            <option value="al">Alagoas</option> 
                            <option value="am">Amazonas</option> 
                            <option value="ap">Amapá</option> 
                            <option value="ba">Bahia</option> 
                            <option value="ce">Ceará</option> 
                            <option value="df">Distrito Federal</option> 
                            <option value="es">Espírito Santo</option> 
                            <option value="go">Goiás</option> 
                            <option value="ma">Maranhão</option> 
                            <option value="mt">Mato Grosso</option> 
                            <option value="ms">Mato Grosso do Sul</option> 
                            <option value="mg">Minas Gerais</option> 
                            <option value="pa">Pará</option> 
                            <option value="pb">Paraíba</option> 
                            <option value="pr">Paraná</option> 
                            <option value="pe">Pernambuco</option> 
                            <option value="pi">Piauí</option> 
                            <option value="rj">Rio de Janeiro</option> 
                            <option value="rn">Rio Grande do Norte</option> 
                            <option value="ro">Rondônia</option> 
                            <option value="rs">Rio Grande do Sul</option> 
                            <option value="rr">Roraima</option> 
                            <option value="sc">Santa Catarina</option> 
                            <option value="se">Sergipe</option> 
                            <option value="sp">São Paulo</option> 
                            <option value="to">Tocantins</option> 
                        </select>
                        </td>
                        </tr>
                        </p>

                        <p>
                        <label for="email_cad">Seu e-mail</label>
                        <input id="email_cad" name="email_cad" required="required" maxLength="50" minLength="2" type ="email"
                        placeholder="contato@petlove.com" />
                        </p>

                        <p>
                        <label for="senha_cad">Sua senha</label>
                        <input id="senha_cad" name="senha_cad" required="required" type ="password" maxLength="15" minLength="2" placeholder="ex. 1234" />
                        </p>

                        <p>
                        <input type ="submit" value="Cadastrar" class="btvejamais" />
                        </p>

                        <p class ="link">
                            Já tem conta? <a href="/login"> Ir para Login </a>
                        </p>

                    </form>
                    </Col>
                </Row>   
            </Col>
        </Row >
        </Row>
    </Container >

);

export default CadUser;