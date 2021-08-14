// import React, { Component } from 'react';

// class MyName extends Component {
//     static defaultProps = {
//         name: 'default name'
//     }
//     render() {
//         return (
//             <div>
//                 Hi. My name is <b>{this.props.name}</b>.
//             </div>
//         )
//     }
// }

import React from "react";

const MyName = ({name}) => {
    return (
        <div>
            Hi. My name is <b>{name}</b>.
        </div>
    )
}

export default MyName;