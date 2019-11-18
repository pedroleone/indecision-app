class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleDetails = this.handleToggleDetails.bind(this);
        this.state = {
            buttonLabel: "Show Details",
            hidden: true,
            details: "Here are some details from this object"
        }
    }
    handleToggleDetails() {
        console.log(this.state.buttonLabel);
        this.setState((prevState) => {
            if (prevState.hidden)
            {return {
                hidden: false,
                buttonLabel: "Hide Details"
            }} else {
                return {
                    hidden: true,
                    buttonLabel: "Show Details"
                }
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleDetails}>{this.state.buttonLabel}</button>
                {!this.state.hidden && <p>{this.state.details}</p>}
                
            </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById("app"))


// console.log("build-it-visible.js is running");

// const buttonDetails = {
//     label: "Show Details",
//     hidden: true,
//     details: "Here are some details from this object."
// }

// const toggleDetails = () => {
//     buttonDetails.hidden = !buttonDetails.hidden;
//     renderPage();
// }

// const renderPage = () => {
//     const approot = document.getElementById("app");
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleDetails}>{buttonDetails.hidden ? 'Hide Details' : 'Show Details'}</button>
//             {!buttonDetails.hidden && <p>{buttonDetails.details}</p>}
//         </div>
//     );
//     ReactDOM.render(template,approot);
// }

// renderPage();

