import React, { Component } from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './List.scss';

class List extends Component {
    setTaskDone(e) {
        e.target.closest('.list').classList.add('list__icons--done');
        e.target.classList.add('list__icons_item--disabled');
    }
    
    render() {
        return (
            <div className="list">{this.props.item}
                <div className="list__icons">
                    <FontAwesomeIcon onClick={this.setTaskDone.bind(this)} className="list__icons_item" icon={faCheck}/>
                    <FontAwesomeIcon onClick={this.props.removeItem} className="list__icons_item" icon={faTrash}/>
                </div>
            </div>
        )
    }
}

export default List;