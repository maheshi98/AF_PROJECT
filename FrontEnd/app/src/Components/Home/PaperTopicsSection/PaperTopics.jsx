import React, { Component } from 'react';
import './PaperTopicsStyles.css';

export default class MainSection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelected: false,
        }
    }

    componentDidMount() {
        this.setState({ isSelected: true })
    }

    render() {
        return (
            <div>
                <h1>Call for Papers</h1>
                <p>Dulya Perera</p>
                <p>Dulya Perera</p>
                <p>Dulya Perera</p>
                <p>Dulya Perera</p>
            </div>
        );
    }
}