import * as React from "react";

export class UseStateExample extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { count: 0 }
    }

    changeCount(val: any) {

        this.setState((prevState: any) => ({ count: prevState.count + val }))
    }

    resetCount() {
        this.setState({ count: 0 })
    }

    render(): React.ReactNode {
        return (
            <>
                <span> {this.state.count}</span>
                <button onClick={() => this.changeCount(1)}>+</button>
                <button onClick={() => this.changeCount(-1)}>-</button>
                <button onClick={() => this.resetCount()}>Reset</button>
            </>
        )
    }

}