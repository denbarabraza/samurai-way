import React from 'react';
import s from "./ProfileInfo.module.css";
import {CommonUsersType} from "../ProfileContainer";
import {ProfileStatus} from "./ProfileStatus";


export const ProfileDescription = (props: CommonUsersType) => {
    return (
        <div className={s.descriptionBlock}>
            <div>
                <img src={props.profilePage?.photos.small}/>
            </div>
            <div>
                <div>{props.profilePage?.fullName}</div>
                <div>{props.profilePage?.aboutMe}</div>
                <ProfileStatus {...props}/>
                <div>{props.profilePage?.lookingForAJob}</div>
                <div>{props.profilePage?.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}
