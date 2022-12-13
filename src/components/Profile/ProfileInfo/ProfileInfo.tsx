import React from 'react';
import s from './ProfileInfo.module.css';
import {CommonUsersType} from "../ProfileContainer";
import {Preloader} from "../../common/Preloader";


export const ProfileInfo:React.FC<CommonUsersType> = (props) => {
    if(!props.profilePage){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.profIMG} src={"https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"}/>
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profilePage.photos.small}/>
                </div>
                <div>
                    <div>{props.profilePage.fullName}</div>
                    <div>{props.profilePage.aboutMe}</div>
                    <div>{props.profilePage.lookingForAJob}</div>
                    <div>{props.profilePage.lookingForAJobDescription}</div>
                </div>
            </div>
        </div>
    )
}
