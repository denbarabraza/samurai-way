import React from 'react';
import {CommonUsersType} from "./UsersContainer";
import s from './Users.module.css'

export const Users = (props: CommonUsersType) => {

    props.sendUsers([
        {
            id: '1',
            photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Ew488dUE4fi9yDUTTn7H71pW1NjjDIrwdg&usqp=CAU',
            followed: false,
            fullName: 'Denis Bareischev',
            status: 'I want to IT',
            location: {
                city: 'Minsk',
                country: 'Belarus'
            }
        },
        {
            id: '2',
            photoURL: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3045138.png&w=350&h=254',
            followed: true,
            fullName: 'Mike Cala',
            status: 'I like salt',
            location: {
                city: 'Milan',
                country: 'Italy'
            }
        },
        {
            id: '3',
            photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToWu2AgZKpP9kNj1GuOA6-tlFunx36xcFhbg&usqp=CAU',
            followed: true,
            fullName: 'Victor Popov',
            status: 'I am crazy man',
            location: {
                city: 'Moscow',
                country: 'Russia'
            }
        }
    ])

    return (
        <div className={s.wrapper}>
            {props.users.users.map(e => <div key={e.id}>
               <div className={s.items}>
                   <div className={s.item}>
                       <div>
                           <img src={e.photoURL}/>
                       </div>
                       <div>
                           {e.followed
                               ? <button onClick={()=>props.followedHandler(e.id)}>Unfollowed</button>
                               : <button onClick={()=>props.unFollowedHandler(e.id)}>Followed</button>
                           }
                       </div>
                   </div>
                   <div className={s.userInfo}>
                       <div className={s.itemInfo}>
                           <div>
                               {e.fullName}
                           </div>
                           <div>
                               {e.status}
                           </div>
                       </div>
                       <div className={s.itemInfoLoc}>
                           <div>{e.location.city}</div>
                           <div>{e.location.country}</div>
                       </div>
                   </div>
               </div>
            </div>
            )}
        </div>
    );
};
