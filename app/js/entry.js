import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import CommentBox from './compornent/CommentBox'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const muiTheme = getMuiTheme({
});

ReactDOM.render(
    <div>
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <AppBar title = "Test" />
                <CommentBox />
            </div>
        </MuiThemeProvider>
    </div>
    ,
    document.getElementById("content")
);

