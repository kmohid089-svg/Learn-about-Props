function User({name, age}) {
    //Props ka matlab hai parent component se child component ko data bhejna.
    return (
        <div>
            <h1>Hi there! {name}</h1>
            <p>Age: {age}</p>
        </div>
    );
}

export default User;