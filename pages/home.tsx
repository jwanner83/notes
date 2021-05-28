export default function Home () {
    return (
        <div className="home">
            <h1 className="home__greeting">Good evening</h1>

            <h3 className="home__title">Return where you left</h3>
            <h3 className="home__title">Frequently used folders</h3>

            <style jsx>{`
              .home__greeting  {
                font-size: 60px;
              }
              
              .home__title {
                font-style: italic;
              }  
            `}</style>
        </div>
    )
}