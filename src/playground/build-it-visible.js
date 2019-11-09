console.log("build-it-visible.js is running");

const buttonDetails = {
    label: "Show Details",
    hidden: true,
    details: "Here are some details from this object."
}

const toggleDetails = () => {
    buttonDetails.hidden = !buttonDetails.hidden;
    renderPage();
}

const renderPage = () => {
    const approot = document.getElementById("app");
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleDetails}>{buttonDetails.hidden ? 'Hide Details' : 'Show Details'}</button>
            {!buttonDetails.hidden && <p>{buttonDetails.details}</p>}
        </div>
    );
    ReactDOM.render(template,approot);
}

renderPage();