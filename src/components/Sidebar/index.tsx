import * as Icon from 'phosphor-react'
import Avatar from '../Avatar'
import Poster from '../../assets/poster.png'
import styles from './style.module.scss'

interface SidebarProps {
	isOpen: boolean;
}

const user = {
	avatar_url: 'https://en.gravatar.com/userimage/221952240/1f48c295029265db95bdc00a82b43988.jpg',
	firstName: 'Saromon',
	role:  'Frontend dev.'
}

function Sidebar({ isOpen }:SidebarProps) {
  return (
    <div className={[
			styles["sidebar__container"],
		  isOpen ? styles.show : ''
		].join(' ')}>
			<img src={Poster} className={styles.poster}/>
			<div>
				<Avatar src={user.avatar_url} />
				<h6>
					{user.firstName}
					<p>{user.role}</p>
				</h6>
			</div>
			<div>
				<button>
					<Icon.Pen size={20} />
					Edit profile
				</button>
			</div>
    </div>
  )
}

export default Sidebar
