import React from 'react';
import "./Clock.css"

class ClockFunction extends React.Component {

    constructor() {
        super();
        this.state = { time: new Date() };
    }

    componentDidMount() {
        this.update = setInterval(() => {
            this.setState({ time: new Date() });
        }, 1 * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.update);
    }


    render() {
        const { time } = this.state;
        return (
          <div className="setDate">
            <h1>Добрый день, сегодня у нас</h1>
            <h2>
                {time.toLocaleString()}
            </h2>
        </div>);
    }
}

export default ClockFunction;
