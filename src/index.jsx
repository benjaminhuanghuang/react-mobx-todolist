import { observable, action } from 'mobx';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import PropTypes from 'prop-types';
import { PropTypes as ObservablePropTypes, observer } from 'mobx-react';

class Store {
    @observable cache = { queue: [] };
    @action.bound refresh() {
        this.cache.queue.push(1);
    }
};

const store = new Store();
console.log(store);

@observer
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
                <button onClick={this.props.refresh} >Add</button>
                <Bar queue={cache.queue}></Bar>
            </div>
        )
    }
}

ReactDom.render(<Foo cache={store.cache} refresh={store.refresh} />, document.querySelector("#root"));

