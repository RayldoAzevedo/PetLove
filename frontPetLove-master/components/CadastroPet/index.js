import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button } from "reactstrap";
import Image from "next/image";

const CadPet = () => (
    <Container>
        <Row>
            <Col>
                <Row>
                    <Col>
                        <h1 className="">Adicione seu pet para adoção</h1>
                    </Col>
                    <Col >
                        <div className="">
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
                        <h1>Pet</h1>
                        <p>
                        <label for="nome_pet">Nome</label>
                        <input id="nome_pet" name="nome_pet" required="required" maxLength="25" minLength="2" type ="text" placeholder="nome do pet" />
                        </p>
                        <div className="tablespace">
                            <th><label for="especie">Espécie</label></th>
                            <tr>
                                <select name="especie"> 
                                    <option value="sel">Selecione</option>
                                    <option value="canino">Canino</option> 
                                    <option value="felino">Felino</option> 
                                </select>
                            </tr>
                        </div>
                        <div className="tablespace">
                        <label for="raca">Raça</label>
                        <input id="raca" name="raca" required="required" maxLength ="40" minLength="2" type ="text" placeholder="raça" />
                        </div>

                        <div className="tablespace">
                            <tr>
                                <th><label for="sexo">Sexo</label></th>
                            </tr>
                            <tr>
                                <select name="sexo"> 
                                    <option value="sel">Selecione</option>
                                    <option value="ma">Macho</option> 
                                    <option value="fe">Fêmea</option> 
                                </select>
                                </tr>
                        </div>
                        <div className="tablespace">
                            <tr>
                                <th><label for="porte">Tamanho</label></th>
                            </tr>
                            <tr>
                                <select name="porte"> 
                                    <option value="sel">Selecione</option>
                                    <option value="pequeno">Pequeno</option> 
                                    <option value="medio">Médio</option> 
                                    <option value="grande">Grande</option> 
                                </select>
                            </tr>

                        </div>
                        <div className="tablespace">
                            <tr>
                                <th><label for="comportamento">Comportamento</label></th>
                            </tr>
                            <tr>
                                <select name="comportamento">
                                    <option value="sel">Selecione</option>
                                    <option value="docil">Dócil</option>
                                    <option value="bravo">Bravo</option>
                                    <option value="bipolar">Bipolar</option>
                                    <option value="desconhecido">Desconhecido</option>
                                </select>
                            </tr>
                        </div>
                        <div className="tablespace">
                            <tr>
                                <th><label>Origem*</label></th>  
                            </tr>
                            <tr>
                                <td>
                                    <input type="radio" value="pessoa" />
                                    <label>Pessoa</label> 
                                </td>
                                <td>
                                    <input type="radio" value="ong" />
                                    <label>ONG</label> 
                                </td>
                                <td>
                                    <input type="radio" value="abrigo" />
                                    <label>Abrigo</label> 
                                </td>  
                            </tr>                   
                                                                                 
                        </div>
                       
                        <p>
                        <input type ="submit" value="Adicionar" class="btvejamais" />
                        </p>

                      

                    </form>
                    </Col>
                </Row>   
            </Col>
        </Row >
        </Row>
    </Container >

);

export default CadPet;