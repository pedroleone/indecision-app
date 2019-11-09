console.log("App.js is running");

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    //options: ['Array Item one', 'Array Item two', 'Array item three']
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault(); // impede que a submissão do form atualize a página
    const option = e.target.elements.option.value; // obtem o valor do form onde name="option" 
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderPage();
    }
}
let selectedItem = -1;

const onRemoveAll = () => {
    app.options = [];
    selectedItem = -1;
    renderPage();
}

const onMakeDecision = () => {
    selectedItem = Math.floor(Math.random()*app.options.length)
    renderPage();
}

const renderValue = (value, index) => {
    if (index !== selectedItem) {
        return <li key={index}>{value}</li>;
    } else {
        return <li key={index}><strong>{value}</strong></li>;
    }
}

const renderPage = () => {
    const approot = document.getElementById("app");
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button onClick={onMakeDecision} disabled={app.options.length<=0}>What should I do?</button>
            {app.options.length>0 && <p><button id="clear" onClick={onRemoveAll}>Remove All</button></p>}
            {app.options.length>0 ? <p>Here are your Options</p> : <p>No options</p>}
            {/* app.options.length>0 && <ol>{app.options.map(renderValue)}</ol> */}  {/* using a function */}
            {app.options.length>0 && <ol>{app.options.map((value, index) => {
                return <li key={index}>{index == selectedItem? <strong>{value}{"<---- This is what you should do!"}</strong> : value}</li>
            })}</ol>}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template,approot);
}

renderPage();


