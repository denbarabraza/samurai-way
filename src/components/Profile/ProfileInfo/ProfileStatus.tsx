import React, {ChangeEvent} from 'react';
import {CommonUsersType} from "../ProfileContainer";

export class ProfileStatus extends React.Component<CommonUsersType> {
    state = {
        editMode: false,
        newStatus: this.props.status
    }

    onChangeStatus = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({
            newStatus: e.currentTarget.value
        })
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
        this.props.updateUserStatus(this.state.newStatus)
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ? <input
                        value={this.state.newStatus}
                        onBlur={this.deactivateEditMode}
                        onChange={this.onChangeStatus}
                        autoFocus
                    />
                    : <span onDoubleClick={this.activateEditMode}>
                        {this.props.status || 'No status'}
                </span>
                }
            </>
        )
    }
}