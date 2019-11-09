'use strict';

console.log("App.js is running");

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    //options: ['Array Item one', 'Array Item two', 'Array item three']
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); // impede que a submissão do form atualize a página
    var option = e.target.elements.option.value; // obtem o valor do form onde name="option" 
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderPage();
    }
};
var selectedItem = -1;

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    selectedItem = -1;
    renderPage();
};

var onMakeDecision = function onMakeDecision() {
    selectedItem = Math.floor(Math.random() * app.options.length);
    renderPage();
};

var renderValue = function renderValue(value, index) {
    if (index !== selectedItem) {
        return React.createElement(
            'li',
            { key: index },
            value
        );
    } else {
        return React.createElement(
            'li',
            { key: index },
            React.createElement(
                'strong',
                null,
                value
            )
        );
    }
};

var renderPage = function renderPage() {
    var approot = document.getElementById("app");
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'button',
            { onClick: onMakeDecision, disabled: app.options.length <= 0 },
            'What should I do?'
        ),
        app.options.length > 0 && React.createElement(
            'p',
            null,
            React.createElement(
                'button',
                { id: 'clear', onClick: onRemoveAll },
                'Remove All'
            )
        ),
        app.options.length > 0 ? React.createElement(
            'p',
            null,
            'Here are your Options'
        ) : React.createElement(
            'p',
            null,
            'No options'
        ),
        '  ',
        app.options.length > 0 && React.createElement(
            'ol',
            null,
            app.options.map(function (value, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    index == selectedItem ? React.createElement(
                        'strong',
                        null,
                        value,
                        "<---- This is what you should do!"
                    ) : value
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, approot);
};

renderPage();
