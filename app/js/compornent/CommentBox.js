import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class CommentBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Card>
                    <CardHeader
                        title="テストタイトル"
                        subtitle="テストサブタイトル"
                        actAsExpander={true}
                        showExpandableButton={true}
                        />
                    <CardText expandable={true}>
                        テスト
                    </CardText>
                </Card>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
}

class CommentList extends React.Component {
    render() {
        return (
            <div className='commentList'>
                Hello, world!I am a CommentList.
            </div>
        );
    }
}

class CommentForm extends React.Component {
    render() {
        return (
            <div className='commentForm'>
                Hello, world!I am a CommentForm.
            </div>
        );
    }
}