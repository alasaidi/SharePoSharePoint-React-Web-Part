import * as React from "react";
import styles from "./Sci.module.scss";
import type { ISciProps } from "./ISciProps";
import { escape } from "@microsoft/sp-lodash-subset";

const Sci: React.FC<ISciProps> = (props) => {
  return (
    <div className={styles.sci}>
      <header className={styles.header}>
        <h1>IT Department</h1>
        <p>{escape(props.description)}</p>
      </header>

      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>To ensure effective communication and support for IT services.</p>
      </section>

      <section className={styles.section}>
        <h2>Team Members</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img src="/path-to-image.jpg" alt="Member Name" />
            <h3>Member Name</h3>
            <p>Role in the department</p>
          </div>
          {/* Repeat for more team members */}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Contact us at it@yourcompany.com</p>
      </footer>
    </div>
  );
};

export default Sci;
