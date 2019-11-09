console.log("App.js is running");

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: ['Array Item one', 'Array Item two', 'Array item three']
}

// JSX - Javascript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length>0 ? <p>Here are your Options</p> : <p>No options</p>}
        {app.options.length>0 && <ol>{app.options.map((value,index)=>{return <li key={index}>{value}</li>})}</ol>}
    </div>
);

let count = 0;
const addOne = () => {
    count++;
    console.log('addOne');
    renderCounterApp();
}
const minusOne = () => {
    count--;
    console.log('minusOne');
    renderCounterApp();
}
const reset = () => {
    count = 0;
    console.log('resetCount');
    renderCounterApp();
}




const approot = document.getElementById("app");


const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
    ReactDOM.render(templateTwo, approot);
}

renderCounterApp();
