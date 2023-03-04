function ProfileCard({title, handle}) {
    //different ways to use props when they are passed as (props)
    
    //const title = props.title;
    //const handle = props.handle;

    //const {title, handle} = props;

    return(
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    )
}

export default ProfileCard;