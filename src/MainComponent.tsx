import React, {useEffect, useState} from 'react';
import {ItemColor, ShopItem} from "./ShopItem";
import {Col, Container, Form, Row} from "react-bootstrap";
import {ListItemComponent} from "./ListItemComponent";
import {DataServiceInstance} from "./DataService";
import "./MainComponent.scss";

/**
 * Состояние компоненты главная страница
 */
interface MainComponentState {
    items: ShopItem[];
    color: string | null;
}

/**
 * Главная страница
 */
export function MainComponent() {
    let [state, changeState] = useState<MainComponentState>({
        items: [],
        color: null
    });

    useEffect(() => {
        // Один раз загружаем все товары
        DataServiceInstance.getData(state.color).then(value => {
            changeState({
                items: value,
                color: state.color
            });
        });
    }, [state.color]);

    function onColorInputChange(event: React.ChangeEvent<HTMLSelectElement>) {
        let value: string = event.target.value;

        changeState({
            ...state,
            color: value
        });
    }

    let items = state.items;

    return (
        <Container fluid>
                    {
                        items.map((item: ShopItem) => {
                            return (
                                <Row key={item.id}>
                                <Col>
                                    <ListItemComponent item={item}/>
                                </Col>
                                </Row>
                            )
                        })
                    }
        </Container>
    );
}
