import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import VariousLogos from '../components/VariousLogos'
import VariousSwag from '../components/VariousSwag'
import '../components/all.css'
import WorkStyles from './work.module.css'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const WorkPageTemplate = ({
  title,
  contentComponent,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,

}) => {
  return (
    <main>
      <section className={WorkStyles.reel}>reel</section>

      <Link to={project1.url}>
        <section className={WorkStyles.project}>
          <div className={WorkStyles.projectImageFullWidth}>
            <PreviewCompatibleImage imageInfo={project1.image1} />
          </div>
        </section>
      </Link>

      <Link to={project2.url}>
        <section className={WorkStyles.project + ' ' + WorkStyles.red}>
          <div className={WorkStyles.projectImage}>
            <PreviewCompatibleImage imageInfo={project2.image2} />
          </div>
        </section>
      </Link>

      <VariousSwag />

      <VariousLogos />

      <Link to={project3.url}>
        <section className={WorkStyles.project}>
          <div className={WorkStyles.projectImage}>
            <PreviewCompatibleImage imageInfo={project3.image3} />
          </div>
        </section>
      </Link>

      <Link to={project4.url}>
        <section className={WorkStyles.project}>
          <div className={WorkStyles.projectImage}>
            <PreviewCompatibleImage imageInfo={project4.image4} />
          </div>
        </section>
      </Link>

      <Link to={project5.url}>
        <section className={WorkStyles.project}>
          <div className={WorkStyles.projectImage}>
            <PreviewCompatibleImage imageInfo={project5.image5} />
            helenvholmes.com
          </div>
        </section>
      </Link>

      <VariousSwag />

      <Link to={project6.url}>
        <section className={WorkStyles.project}>
          <div className={WorkStyles.projectImage}>
            <PreviewCompatibleImage imageInfo={project6.image6} />
            Designing Developer Tools
          </div>
        </section>
      </Link>

      <Link to={project7.url}>
        <section className={WorkStyles.project}>
          <div className={WorkStyles.projectImage}>
            <PreviewCompatibleImage imageInfo={project7.image7} />
            Altitude 2018
          </div>
        </section>
      </Link>

      <VariousSwag />

      <Link to={project3.url}>
        <section className={WorkStyles.project}>
          <div className={WorkStyles.projectImage}>
            <PreviewCompatibleImage imageInfo={project3.image3} />
            Me, Elsewhere
          </div>
        </section>
      </Link>
    </main>
  )
}

WorkPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  project1: PropTypes.shape({
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    background1: PropTypes.string,
    url: PropTypes.string,
  }),
  project2: PropTypes.shape({
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    background2: PropTypes.string,
    url: PropTypes.string,
  }),
  project3: PropTypes.shape({
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    background3: PropTypes.string,
    url: PropTypes.string,
  }),
  project4: PropTypes.shape({
    image4: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    background4: PropTypes.string,
    url: PropTypes.string,
  }),
  project5: PropTypes.shape({
    image5: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    background5: PropTypes.string,
    url: PropTypes.string,
  }),
  project6: PropTypes.shape({
    image6: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    background6: PropTypes.string,
    url: PropTypes.string,
  }),
  project7: PropTypes.shape({
    image7: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    background7: PropTypes.string,
    url: PropTypes.string,
  }),
}

const WorkPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <WorkPageTemplate
        title={post.frontmatter.title}
        content={post.html}
        project1={post.frontmatter.project1}
        project2={post.frontmatter.project2}
        project3={post.frontmatter.project3}
        project4={post.frontmatter.project4}
        project5={post.frontmatter.project5}
        project6={post.frontmatter.project6}
        project7={post.frontmatter.project7}
      />
    </Layout>
  )
}

WorkPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default WorkPage

export const WorkPageQuery = graphql`
  query WorkPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        project1 {
          image1 {
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          background1
          url
        }
        project2 {
          image2 {
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          background2
          url
        }
        project3 {
          image3 {
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          background3
          url
        }
        project4 {
          image4 {
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          background4
          url
        }
        project5 {
          image5 {
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          background5
          url
        }
        project6 {
          image6 {
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          background6
          url
        }
        project7 {
          image7 {
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          background7
          url
        }
      }
    }
  }
`
