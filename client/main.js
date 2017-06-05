import React from 'react';
import Loadable from 'react-loadable';
import { render } from 'react-dom';

// works.
// import Editor from '/imports/editor';

// doesn't.
const Editor = Loadable({ loader: () => import('/imports/editor'), LoadingComponent: () => <div>Loading...</div> })

render(<Editor />, document.getElementById('root'));