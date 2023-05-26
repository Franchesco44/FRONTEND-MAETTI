import React, { useState } from 'react';
import styles from "./NavBarDinamica.module.css"
import Link from 'next/link';

const NavBarDinamica = () => {
    const [activeSection, setActiveSection] = useState(1);
    

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <nav className={styles.nav}>
            <ul>
                <li className={activeSection === 1 ? styles.active : ''}>
                <a onClick={() => handleSectionChange(1)}>Inicio</a>
                </li>
                <li className={activeSection === 2 ? styles.active : ''}>
                <a onClick={() => handleSectionChange(2)}>Acerca</a>
                </li>
            </ul>
            <div className={styles.line} style={{ left: `${(activeSection - 1) * 50}%` }}></div>
        </nav>
    );
}

export default NavBarDinamica