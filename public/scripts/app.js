'use strict';

console.log("App.js is running");

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer.',
    options: ['Array Item one', 'Array Item two', 'Array item three']

    // JSX - Javascript XML
};var template = React.createElement(
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
    app.options.length > 0 ? React.createElement(
        'p',
        null,
        'Here are your Options'
    ) : React.createElement(
        'p',
        null,
        'No options'
    ),
    app.options.length > 0 && React.createElement(
        'ol',
        null,
        app.options.map(function (value, index) {
            return React.createElement(
                'li',
                { key: index },
                value
            );
        })
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    console.log('addOne');
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    console.log('minusOne');
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    console.log('resetCount');
    renderCounterApp();
};

var approot = document.getElementById("app");

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count : ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );
    ReactDOM.render(templateTwo, approot);
};

renderCounterApp();
