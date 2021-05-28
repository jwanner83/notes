import Navigation from './Navigation'
import { Head } from 'next/document'
import Breadcrumb from './Breadcrumb'

export default function Layout ({ children }) {
  return (
    <div className="container">
      <div className="container__navigation">
        <Navigation />
      </div>
      <div className="container__breadcrumb">
        <Breadcrumb />
      </div>
      <div className="container__content">
        { children }
      </div>

      <style lang="scss" jsx>{`
        .container {
          height: 100%;
          display: grid;
          grid-template-rows: 70px auto;
          grid-template-columns: 1fr 4fr;
          grid-gap: 4px;
          background: var(--border-color);
        }
        
        .container__navigation {
          grid-row-start: 1;
          grid-row-end: 3;
          padding: 60px 45px;
          background: var(--background);
        }
        
        .container__breadcrumb {
           background: var(--background);
           padding: 0 30px;
        }
        
        .container__content {
          padding: 60px 45px;
          background: var(--background);
        }
      `}</style>

      <style jsx global>{`
        :root {
          --background: #171717;
          --border-color: #1C1C1C;
          --text-color: #fff;
          --heading-color: #fff; 
          
          --breadcrumb-color: #4D4D4D;
          
          --navigation-color: #9C9C9C;
          --navigation-color-active: #fff;
          
          --heading-font: 'Inter', sans-serif;
          --font: 'Inter', sans-serif;
        }
        
        html, body, body > div, body > div > div {
          margin: 0;
          height: 100%;
          width: 100%;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: var(--heading-font);
          color: var(--heading-color);
        }
        
        html, body, div, span, button, input, textarea, label, p, a {
          font-family: var(--font);
          color: var(--text-color);
        }
        
        * {
         box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}