import 'systemjs-hot-reloader/default-listener.js';

export function __reload(m) {
  if (m.component.state)
    component.setState(m.component.state);
}

import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from 'jspm-react-component';

let container = document.getElementById('container');
export let component = ReactDOM.render(React.createElement(HelloWorld), container);