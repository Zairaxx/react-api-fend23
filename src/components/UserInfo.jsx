export const UserInfo = (props) => {
    return (
      <div>
        <p>Name: {props.name} </p>
        <p>Email: {props.email} </p>
        <p>Address: {props?.address.city} </p>
      </div>
    );
  };
  