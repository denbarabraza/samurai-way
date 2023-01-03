import React from 'react';
import {CommonUsersType} from "../ProfileContainer";

export class ProfileStatus extends React.Component<CommonUsersType> {
    state = {
        editMode: false,
        title: 'Yo'
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ? <input
                        value={this.props.profilePage?.aboutMe}
                        onBlur={this.deactivateEditMode}
                        autoFocus
                    />
                    : <span onDoubleClick={this.activateEditMode}>
                        {this.props.profilePage?.aboutMe}
                </span>
                }
            </>
        )
    }
}