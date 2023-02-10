import React from "react";

class Hello extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }

}

export default Hello;