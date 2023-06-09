/*
This code was inspired by the following reference
    GitHub, "olbega/nextjs-crud-mysql" [Online]. Available: https://github.com/oelbaga/nextjs-crud-mysql.
*/
import styles from '../comp/DoorAccessLog.module.css'
import { useState, useEffect } from 'react'

export default DoorAccessLog;

function DoorAccessLog() {
    const [employee1, setEmployeeAccess] = useState([]);

    async function doorAccessGet() {
        const getDoorLog = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        const res = await fetch('https://main.dshngqz5l8v9y.amplifyapp.com/api/crud',
        getDoorLog
        );
        const response = await res.json();
        setEmployeeAccess(response.employee1);
    }

    useEffect(() => {
        doorAccessGet();
    }, []);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.main}>
                    <h1>R&D Door Logs</h1>
                </div>
                <section>
                    <div className={styles.read}>
                        <h2>Database Table</h2>
                        <div className={styles.list}>

                            {employee1.map((item, index) => {
                                return (
                                    <div key={item.timestamp} className={styles.empList}>
                                        <span> Date Stamp: </span> {item.timestamp} |
                                        <span> Name: </span> {item.Name} |
                                        <span> Role: </span> {item.Role} |
                                        <span> Card ID: </span> {item.cardUID} |
                                        <span> Permission: </span> {item.permission}
                                    </div>
                                );
                            })}
                            {!employee1.length ? <>No Data in Table</> : null}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}