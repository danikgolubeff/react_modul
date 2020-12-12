import React from 'react';
import Counter from "../сomponents/Counter/Counter";

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            countValue: 0,
        }
    }
handleAdd= () => {
 this.setState(state: { countValue: this.state.countValue + 1};
};
handleRemove= () => {
        this.setState(state: { countValue: this.state.countValue - 1})
    }

    render()    {
        return (
            <Counter counterValue=
                          {this.state.countValue}
                          handleAdd={this.handleAdd}
                          handleRemove={this.handleRemove} />

        );
    }
}

export default CounterContanier;