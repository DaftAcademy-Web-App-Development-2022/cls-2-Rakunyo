import React from "react";

import { User, Form } from "~/components/index";
import userData from "~/data/userData.json"

import styles from "./Sidebar.module.css";

const Sidebar = () => {

    const handleLogout = () => {
        console.log("Logout");
    } 

    return (
        <div className={styles.root}>
            <div className={styles.top}>
                <User 
                    name={userData.name} 
                    email={userData.email}
                    image={userData.url}
                    logout={handleLogout}
                />
            </div>

            <div className={styles.center}>
                <Form />
            </div>
        </div>
    )
}

export default Sidebar