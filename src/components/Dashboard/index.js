import {Link} from "react-router-dom";
import styles from './style.module.css';


const Dashboard = ({children}) => {
    return (
        <>
            <div className={styles.sidebar}>
                <ul>
                    <li>
                        <Link to={"/home/encrypt"}>
                            <span className={styles.section} >Encrypt</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/home/decrypt"}>
                            <span className={styles.section} >Decrypt</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/home/graph-list"}>
                            <span  className={styles.section}>Graph list</span>
                        </Link>
                    </li>

                </ul>
            </div>
            <div className={styles.content}>
                {children}
            </div>

        </>
    )
}

export default Dashboard;