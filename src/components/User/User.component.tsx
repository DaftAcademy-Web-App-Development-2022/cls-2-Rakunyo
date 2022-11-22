import React from "react";
import Image from "next/image"

import styles from "./User.module.css"

interface Props {
  name: string;
  email: string;
  image?: string;
  logout: () => void;
}

const User = ({ name, email, image, logout }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.user}>
        <div>
          {image ? (
            <Image
              className={styles.image}
              src={image}
              alt="User Avatar"
              width={40}
              height={40}
            />
          ) : (
            <span className={`${styles.image} ${styles.placeholder}`} />
          )}
        </div>

        <div className={styles.details}>
          <p className={styles.name}>{name}</p>
          <p className={styles.email}>{email}</p>
        </div>
      </div>

      <button
        type="button"
        onClick={logout}
        className={styles.button}
      > Logout </button>
    </div>
  );
};

export default User;