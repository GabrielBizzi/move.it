import { profile } from 'console';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}> 
            <img src="https://avatars.githubusercontent.com/u/44822686?s=460&v=4" alt="Gabriel Bizzi"/>
            <div>
                <strong>Gabriel Bizzi</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}