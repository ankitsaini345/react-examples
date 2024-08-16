import * as React from "react";

export class UseEffectClassEx extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { width: window.innerWidth, text: 'text' }
    }

    updateWidth = () => {
        this.setState({ width: window.innerWidth })
        // console.log(window.innerWidth);

    }

    componentDidMount(): void {
        window.addEventListener('resize', this.updateWidth);
    }

    componentWillUnmount(): void {
        window.removeEventListener('resize', this.updateWidth)
    }

    render(): React.ReactNode {
        return (
            <>
                Width: {this.state.width} <br />
                Text: {this.state.text}
            </>
        )
    }


}