import { useAuth } from 'context'
import React from 'react'

const UserProfile = () => {
    const { firstName, email, lastName } = useAuth();
    return (
        <div>
            <h4>Profile Details</h4>
            <p>Name : {firstName} {lastName}</p>
            <p>Email : {email}</p>
        </div>
    )
}

export { UserProfile }