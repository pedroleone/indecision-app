class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: []
        };
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
    
    handleDeleteOptions() {
        this.setState(()=> ({options: []}));
    }

    handlePickOption() {
        alert(this.state.options[Math.floor(Math.random()*this.state.options.length)]);
    }

    handleDeleteOption(option) {
        console.log('handleDeleteOption: ',option)
        this.setState((prevState)=>({options: prevState.options.filter((e,i)=>i!=option)}));
    }

    handleAddOption(option){
        if (!option) {
            return "Enter a valid value";
        } else if (this.state.options.indexOf(option) > -1 ) {
            return "This value already exists";
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }


    render() {
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length>0}
                    handlePickOption={this.handlePickOption}    
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

// class Header extends React.Component {
    
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

const Header = (props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        );
}

Header.defaultProps = {
    title: 'Indecision'
};

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePickOption} disabled={!this.props.hasOptions}>What should I do?</button>
//             </div>
//         ); 
//     }
// }
const Action = props => {
         return (
             <div>
                 <button onClick={props.handlePickOption} disabled={!props.hasOptions}>What should I do?</button>
             </div>
         ); 
   
}
// class Options extends React.Component {
//     render() {
//         return (
//         <div>
//             <button onClick={this.props.handleDeleteOptions} disabled={this.props.options.length === 0}>Remove All Options</button>
//             {this.props.options.map((v,i)=><Option option={v} key={i}/>)}
//         </div>);
//     }
// }

const Options = props => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions} disabled={props.options.length === 0}>Remove All Options</button>
            {props.options.map((option,index) => (
                <Option 
                    option={option} 
                    key={index} 
                    indexArray={index}
                    handleDeleteOption={props.handleDeleteOption}
                />) )}
        </div>
    );
}

// class Option extends React.Component {
//     render() {
//         return <p>{this.props.option}</p>
//     }
// }
const Option = props => (<p>{props.option} 
    <button 
        onClick={(e)=> {props.handleDeleteOption(props.indexArray)}}
        >
        remove
    </button>
    </p>);

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
          error: undefined  
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        e.target.elements.option.value = "";
        this.setState(()=>({error}));
    }   
    render() {
        return (
        <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
        </div>);
    }
}


ReactDOM.render((<IndecisionApp />),document.getElementById('app'))