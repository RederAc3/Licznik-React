var Counter = React.createClass({
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function () {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik: ' + this.state.counter),
            React.createElement('div', { className: 'buttons' },
                React.createElement('div', { className: 'increment', onClick: this.increment }, ' + '),
                React.createElement('div', { className: 'decrement', onClick: this.decrement }, ' - ')
            )
        );
    },

    componentDidMount: function () {
        console.log('Połączenie z serwerem pobranie danych np. API')
    },

    componentWillReceiveProps: function () {
        console.log('po kliknięciu w przycisk zmiana wartości licznika')
    },

    componentWillUpdate: function () {
        console.log('zaktualizowanie licznika')
    },

    componentDidUpdate: function() {
        console.log('po zaktualizowaniu możliwośc ingerowania w DOM, wysyłąnie wartości do serwera')
    }

});

var element = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
);
ReactDOM.render(element, document.getElementById('app'));