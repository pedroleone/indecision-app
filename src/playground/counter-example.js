


// let count = 0;
// const addOne = () => {
//     count++;
//     console.log('addOne');
//     renderCounterApp();
// }
// const minusOne = () => {
//     count--;
//     console.log('minusOne');
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     console.log('resetCount');
//     renderCounterApp();
// }
// const approot = document.getElementById("app");
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
//     ReactDOM.render(templateTwo, approot);
// }
// renderCounterApp();

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleSubtractOne = this.handleSubtractOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    handleAddOne() {
        this.setState((prevState) =>  {return { count : prevState.count + 1}})
    }
    handleSubtractOne() {
        this.setState((prevState) =>  {return { count : prevState.count - 1}})
    }
    handleReset() {
        this.setState((prevState) =>  {return { count : 0}})
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleSubtractOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"));