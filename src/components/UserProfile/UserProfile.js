import { useAuth } from 'context'
import React from 'react'
import styles from "./UserProfile.module.css"
const UserProfile = () => {
    const { firstName, email, lastName } = useAuth();
    return (
        <div className={styles.profile}>
            <h4 className={styles.details}>Profile Details</h4>
            <p>Name : {firstName} {lastName}</p>
            <p>Email : {email}</p>
        </div>
    )
}

export { UserProfile }