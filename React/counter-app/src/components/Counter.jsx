import React, { Component } from 'react';

class Counter extends Component {

    //tagList = this.state.tags;

    /* renderTags = () => {
        if (this.tagList.length > 0) {
            return  this.tagList.map(tag => <li key={tag}>{tag}</li>)
        } else {
            return <h1 style={{ color: "red" }}>No tags!!!</h1>
        }
    } */

    render() {
        const { counter } = this.props;
        return (
            <>

                <div className="row">
                    <div className="col-1">
                        <span className={this.assignBadgeClasses()}>{this.formatCount()}</span>
                    </div>

                    <div className="col">

                        <button
                            /* onClick={this.handleIncrement} */
                            onClick={() => this.props.onIncrement(counter)} // in props we pass counter object
                            className='btn btn-secondary btn-sm'>+</button>

                        <button onClick={() => this.props.onDecrement(counter)}
                            className='btn btn-secondary btn-sm m-2'
                            disabled={this.props.counter.value === 0 ? 'disabled' : ''}
                        >-</button>


                        <button onClick={() => this.props.onDelete(counter.id)}
                            className="btn-danger btn-sm">x</button>

                    </div>
                </div>





                {/* 
                {this.tagList.length === 0 && <h1> Please create a new tag! </h1>}
                {this.renderTags()} */}


            </>
        );
    }

    // we delete this method and move it to the parent component
    // (because we got rid of state in this component to have a single source of truth)

    /* handleIncrement = () => {
        this.setState({
            value: this.state.value + 1,
        })
    } */

    formatCount = () => {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

    assignBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
}

export default Counter;
