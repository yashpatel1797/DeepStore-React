import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from "./Profile.module.css"
import classes from "styles/grid.module.css"
import { useDocumentTitle } from 'hooks/useDocumentTitle'
const Profile = () => {
    useDocumentTitle("Profile")
    return (
        <>
            <h1 className={styles.header}>My Profile</h1>
            <div className={styles["profile-container"]}>
                <ul className={styles.sidebar__links}>
                    <li>
                        <NavLink
                            to="/profile"
                            className={({ isActive }) => `${styles.sidebar__link_item} ${isActive ? styles.active__link : ""
                                }`}
                        >
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/profile/address"
                            className={({ isActive }) => `${styles.sidebar__link_item} ${isActive ? styles.active__link : ""
                                }`}
                        >
                            Address
                        </NavLink>
                    </li>
                </ul>
                <div><Outlet /></div>
            </div>
        </>
    )
}

export { Profile }