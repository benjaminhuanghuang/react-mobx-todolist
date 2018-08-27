import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { observable, action } from 'mobx';


class Store {
    cache = {
        queue: []
    }
}

class Bar extends Component {
    static PropTypes = {
        queue: PropTypes.array
    }

    render() {
        const queue = this.props.queue;
        return <span>{queue.length}</span>
    }
}


class Foo extends Component {
    static PropTypes = {
        cache: PropTypes.object
    }

    render() {
        const cache = this.props.cache;
        return (
            <div>
                <Bar queue={cache.queue}></Bar>
            </div>
        )
    }
}