import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Authentication() {
  const router = useRouter()
  const links: Array<string> = ['home', 'login', 'folders', 'note']

  return (
    <nav className="navigation">
      <h1 className="navigation__title">Notes.</h1>

      {links.map((link, index) => {
        return (
          <div className="navigation__item" key={ link }>
            <Link href={link}>
              <a className={`${router.pathname === '/' + link ? 'active' : ''} link`}>
                { link }
              </a>
            </Link>
          </div>
        )
      })}

      <style jsx>{`
        .navigation {
          height: 100%;
        }
        
        .navigation__title {
          margin: 0;
          padding-bottom: 60px;
          font-size: 40px;
        }
        
        .navigation__item {
          font-weight: bold;
          font-size: 24px;
          padding-bottom: 16px;
        }
        
        .navigation__item .link {
          cursor: pointer;
          text-decoration: none;
          text-transform: capitalize;
          color: var(--navigation-color);
        }
        
        .navigation__item .active {
          color: var(--navigation-color-active);
        }
      `}</style>
    </nav>
  )
}
