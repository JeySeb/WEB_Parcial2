
import React from 'react';
import './Bandas.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BandasDetail(props) {


    return (
        <div className="BandasDetail">
            <Col key="bandaDetail" className="cards_container_space" style={{width:"20vw"}}>
                <Card className="card_space">
                    <Card.Img variant="top" src={props.image}
                        className="card_img_space" style={{
                            borderRadius:
                                "2%", filter: "brightness(100%)"
                        }} />

                    <Card.Body className='card_body'>
                        <Row>
                            <Col>
                                <Card.Title style={{ textAlign: "center" }}>
                                    <b className='cyan_format'>{props.name}</b>
                                </Card.Title>
                            </Col>
                        </Row>
                        <Card.Text style={{ textAlign: "center" }}>
                            <div className='normal_format_space'> {props.descripcion} </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}

export default BandasDetail;