import styles from '../components/ProfileComponent/ProfileComponent.module.scss'
import ProfileComponent from '../components/ProfileComponent';

const Profile = () => {
  return (
    <div className={styles.profileForm}>
        <ProfileComponent />
    </div>
  )
};

export default Profile