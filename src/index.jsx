import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {PropTypes as ObservablePropTypes} from 'mobx-react';
import { observable, action } from 'mobx';


class Store {
    @observable cache = {
        queue: []
    }
};

const store = new Store();
console.log(store);


class Bar extends Component {
    static propTypes = {
        queue: ObservablePropTypes.observableArray
    }

    render() {
        const queue = this.props.queue;
        return <span>{queue.length}</span>;
    }
}


class Foo extends Component {
    static propTypes = {
        cache: ObservablePropTypes.observableObject
    }

    render() {
        const cache = this.props.cache;
        console.log(cache);
        return (
            <div>
                <Bar queue={cache.queue}></Bar>
            </div>
        )
    }
}

ReactDom.render(<Foo cache={store.cache}/>, document.querySelector("#root"));

