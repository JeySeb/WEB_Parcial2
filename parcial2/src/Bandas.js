
import React from 'react';
import './Bandas.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import Table from 'react-bootstrap/Table';
import BandasDetail from './BandasDetail';

const { useEffect, useState } = require("react");

function Bandas() {
    const [elementos, setElementos] = useState([]);
    const [bandaAntigua, setBandaAntigua] = useState({});
    useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem("elementos") === null) {
                console.log("Loading...")
                setElementos([]);
            } else {
                console.log("Estoy offlineeeeeeee...")
                setElementos(localStorage.getItem("elementos"));
            }
        } else {
            const URL = "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
            fetch(URL).then(res => res.json()).then(res => {
                setElementos(res);
                localStorage.setItem("elementos", res);
            })
        }
    }, []);
    console.log("app");
    console.log(elementos);


    const GetBandaAntigua = () => {
        if (elementos.length > 0) {
            let bandaTemporal = elementos[0];
            elementos.forEach((banda) => {
                if (bandaAntigua.foundation_year > banda.foundation_year) {
                    bandaTemporal = banda;
                }
            });

            setBandaAntigua(bandaTemporal);
        }
        return (<p><FormattedMessage id='antiguo' /> <b>{bandaAntigua.name}</b> <FormattedMessage id='antiguo2' /> {2022 - bandaAntigua.foundation_year} <FormattedMessage id='antiguo3' /></p>);
    }


    function GetCard() {
        if (!clicked) {
            return (false);
        }
        return (
            <BandasDetail name={actualBanda.name} image={actualBanda.image} descripcion={actualBanda.description}></BandasDetail>
        );
    }

    const [actualBanda, setActualBanda] = useState({});
    const [clicked, setClicked] = useState(false);

    const onClickCard = (ind) => {
        if (!clicked) {
            setClicked(true);
        }
        setActualBanda(elementos[ind]);
        setBandaAntigua(elementos[ind]);
        console.log("clicked");
        console.log(ind);
    };

    return (
        <div className="Bandas">
            <Container className="body_container" style={{ width: "100%" }}>
                <Row style={{ backgroundColor: "#70a6c4", justifyContent: "center", height: "5vw", margin: 0 }} >
                    <Col sm={2} md={2} lg={2} >
                        <img src="https://cdn-icons-png.flaticon.com/512/16/16751.png" className="Header-logo" style={{ width: "20%" }} alt="logo" />

                    </Col>
                    <Col style={{ textAlign: "right" }}>
                        <h1><FormattedMessage id='title' /></h1>
                    </Col>
                </Row>
                <Row style={{ paddingTop: "5%" }}>
                    <Col>
                        <Table striped bordered hover style={{ width: "100%", margin: "auto" }}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th><FormattedMessage id='nombre' /></th>
                                    <th><FormattedMessage id='pais' /></th>
                                    <th><FormattedMessage id='genero' /></th>
                                    <th><FormattedMessage id='fundacion' /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {elementos.map((elemento, i) => (
                                    <tr onClick={() => onClickCard(i)}>
                                        <td>{i + 1}</td>
                                        <td style={{ color: "blue" }}>{elemento.name}</td>
                                        <td>{elemento.country}</td>
                                        <td>{elemento.genre}</td>
                                        <td>{elemento.foundation_year}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <GetBandaAntigua />
                    </Col>
                    <Col style={{ margin: "auto", justifyContent: "center" }}>
                        <GetCard />
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Bandas;