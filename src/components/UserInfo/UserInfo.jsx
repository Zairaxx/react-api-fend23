import styles from './UserInfo.module.css'

export const UserInfo = (props) => {
    return (
      <div className={styles.border}>
        <p>Name: {props.name} </p>
        <p>Email: {props.email} </p>
        <p>Address: {props.address?.city} </p>
      </div>
    );
  };
  