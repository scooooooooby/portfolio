import React from "react";
import { Link } from 'gatsby';
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import logo from '../../img/logo-white.svg'
import MenuStyles from "./Menu.module.css"

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query MenuOverlayQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />
          
          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
          <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
          <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

          <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#ff4400" />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>

        <nav className={MenuStyles.menu} id="menuOverlay">
          <Link to="/" className={MenuStyles.navbarItem} title="Logo">
            <img src={logo} alt="Helen V. Holmes" style={{ width: '60px' }} />
          </Link>
          <Link to="/writing">
            Writing
          </Link>
          <Link to="/work">
            Work
          </Link>
          <Link to="/contact">
            Contact Me
          </Link>
        </nav>
      </div>
    )}
  />
)