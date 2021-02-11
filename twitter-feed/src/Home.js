import React from 'react';


function Header(props) {
    return (
        <header>
            {props.children}
        </header>
    )
}

export default class Home extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <Header>
                <div className="btn-primary">Tweet</div>
                <div className="btn-secondary">Tweet</div>
            </Header>
        )
    }

}