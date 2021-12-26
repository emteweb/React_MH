import React, { Component } from 'react';

class Counter extends Component {

    state = {
        count: 0,
        tags: ['product 1', 'product 2', 'product 3']
    }

    tagList = this.state.tags;

    renderTags = () => {
        if (this.tagList.length > 0) {
            return this.tagList.map(tag => <li key={tag}>{tag}</li>)
        } else {
            return <h1 style={{ color: "red" }}>No tags!!!</h1>
        }

    }

    render() {

        return (
            <>
                <span className={this.assignBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Add product</button>


                {this.tagList.length === 0 && <h1> Please create a new tag! </h1>}
                {this.renderTags()}


            </>
        );
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    formatCount = () => {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }


    assignBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }
}


export default Counter;
