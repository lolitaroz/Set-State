import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            r: Math.random() * 1000

        }

        this.Add100 = this.Add100.bind(this)
        this.Add10 = this.Add10.bind(this)
        this.Add1 = this.Add1.bind(this)
        this.Sub1 = this.Sub1.bind(this)
        this.Sub10 = this.Sub10.bind(this)
        this.Sub100 = this.Sub100.bind(this)
        this.Reset = this.Reset.bind(this)
    }

    check() {
        if (this.state.count < this.state.r) console.log("Too Low")
        if (this.state.count > this.state.r) console.log("Too High")
        if (this.state.count == this.state.r) console.log("You got it! Please Reset")
    }

        Add100() {
        this.setState(prevState => {
            return {
                count: prevState.count + 100
            }
        this.check()
        })
    }

        Add10() {
        this.setState(prevState => {
            return {
                count: prevState.count + 10
            }
        this.check()
        })
    }

        Add1() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        this.check()
        })
    }

        Sub1() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        this.check()
        })
    }

        Sub10() {
        this.setState(prevState => {
            return {
                count: prevState.count - 10
            }
        this.check()
        })
    }

        Sub100() {
        this.setState(prevState => {
            return {
                count: prevState.count - 100
            }
        this.check()
        })
    }

        Reset() {
            this.setState({count: 0})
            this.setState({r: Math.random * 1000})
        }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.Add100}>+100</button>
                <button onClick={this.Add10}>+10</button>
                <button onClick={this.Add1}>+1</button>
                <button onClick={this.Sub1}>-1</button>
                <button onClick={this.Sub10}>-10</button>
                <button onClick={this.Sub100}>-100</button>
                <button onClick={this.Reset}>Reset</button>
            </div>
        )
    }
}

export default App
