import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";


/**
 * Компонента с корзиной.
 */
export function CartComponent() {

    return (
        <Container>
            {/*Полная цена*/}
            <h2>Контакты</h2>
            <Row>
                <Col xs={2}>
                    <Card className={"contact-item"} style={{ width:200}}>
                        <Card.Img style={{height:200}} variant="top"
                                  src={"https://st2.depositphotos.com/6708478/10759/v/600/depositphotos_107592380-stock-illustration-icon-of-paper-plane-white.jpg"} />
                        <Card.Body>
                            <Card.Title>
                                Telegram
                            </Card.Title>
                            <Card.Text>
                                t.me/EvgeniyBudin
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={"contact-item"} style={{ width:200}}>
                        <Card.Img style={{height:200}} variant="top"
                                  src={"https://illustoon.com/photo/2751.png"} />
                        <Card.Body>
                            <Card.Title>
                                E-mail
                            </Card.Title>
                            <Card.Text>
                                eabudin@edu.hse.ru
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
