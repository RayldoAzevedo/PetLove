import React from 'react';
// import Top from '../components/Top';
import TopLogin from '../components/TopLogin';
import CatServico from '../components/CatServico'
import Footer from '../components/Footer'
import { Row, Col} from "reactstrap";
import Image from "next/image";
import Styles from "../styles/User.module.css"

export default function Home() {
  return (
    <div >
        {/* <Top/>  */}
        <TopLogin/> 
        <div className="container ">
            <h1 className="d-flex justify-content-center">Cadastro de usuário</h1>

            <Row className={Styles.borda}> 
            <Col ><Image src="/pegadas.png" alt="dogCadastro" width={256} height={105} /></Col>               
            <Col ><Image src="/cadastroDog.png" alt="dogCadastro" width={170} height={240} /></Col>                  
            </Row>

            <div className="card">
                <div className="card-header text-center">
                    <h2>Cadastre seu usuário</h2>
                </div>
                <div className="card-body">

                    <div className={'text-center'}><p className={Styles.text}>Coloque seus dados abaixo para cadastrar seu usuário:</p></div>

                    <form action="" method="post" >

                        <div className="row">

                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="form-floating mb-3">



                                    <input type="text"
                                        className="form-control"
                                        id="floatingInputNome"
                                        placeholder="Seu nome"
                                    />


                                    <label htmlFor="floatingInputNome">Seu nome</label>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInputSobrenome" placeholder="Seu sobrenome" />
                                    <label htmlFor="floatingInputSobrenome">Seu sobrenome</label>
                                </div>
                            </div>

                        </div>

                        <div className="row my-3">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInputEndereco" placeholder="Endereço" />
                                    <label htmlFor="floatingInputEndereco">Endereço</label>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInputBairro" placeholder="Bairro" />
                                    <label htmlFor="floatingInputBairro">Bairro</label>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInputCidade" placeholder="Cidade" />
                                    <label htmlFor="floatingInputCidade">Cidade</label>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="form-floating">
                                    <select name="estado" className="form-select" id="floatingSelectEstado">
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
                                    <label htmlFor="floatingSelectEstado">Estado</label>
                                </div>
                            </div>
                        </div>


                        <div className="row my-3">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInputEmail" placeholder="Seu e-mail" />
                                    <label htmlFor="floatingInputEmail">Seu e-mail</label>
                                </div>
                            </div>
                        </div>

                        <div className="row my-3">
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingInputSenha" placeholder="Sua senha" />
                                    <label htmlFor="floatingInputSenha">Sua senha</label>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6">
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingInputConfirmaSenha" placeholder="Confirme senha" />
                                    <label htmlFor="floatingInputConfirmaSenha">Confirme senha</label>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
                <div className="card-footer">
                    <div className="container d-flex justify-content-center">
                        <button className={Styles.btregistrar} onClick={'#'}>Cadastrar</button>
                    </div>
                </div>
            </div>

        </div>
        <CatServico/>
        <Footer/>
    </div>
  )
}
