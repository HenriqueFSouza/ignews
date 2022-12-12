import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ActiveLink } from '../ActiveLink'
import Image from 'next/image'

export function Header() {
    const { asPath } = useRouter()
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContet}>
                <Image src="/images/logo.svg" alt="ignews" width={110} height={31} />
                <nav>
                    <ActiveLink href='/' activeClassName={styles.active}>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink href='/posts' activeClassName={styles.active}>
                        <a>Posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton />
            </div>
        </header>
    )
}