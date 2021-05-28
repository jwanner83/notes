import { useRouter } from 'next/router'

export default function Breadcrumb () {
  const router = useRouter()
  const path = router.pathname

  return (
    <div className="breadcrumb">
      <p className="breadcrumb__item">{ path.slice(1) }</p>

      <style jsx>{`
        .breadcrumb {
          height: 100%;
          display: flex;
          align-items: center;
        }
        
        .breadcrumb__item {
          padding: 0;
          margin: 0;
          text-transform: capitalize;
          font-weight: bold;
          color: var(--breadcrumb-color);
        }
      `}</style>
    </div>
  )
}
