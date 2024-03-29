import React from 'react'
import PropTypes from 'prop-types'
import { WorkPageTemplate } from '../../templates/work-page'

const WorkPagePreview = ({ entry, widgetFor, getAsset }) => (
  <WorkPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    project1={{
      image1: {
        image: getAsset(entry.getIn(['data', 'project1', 'image1', 'image'])),
        alt: entry.getIn(['data', 'project1', 'image1', 'alt']),
      },
      background1: entry.getIn(['data', 'background1']),
      url: entry.getIn(['data', 'url']),
    }}
    project2={{
      image2: {
        image: getAsset(entry.getIn(['data', 'project2', 'image2', 'image'])),
        alt: entry.getIn(['data', 'project2', 'image2', 'alt']),
      },
      background2: entry.getIn(['data', 'background2']),
      url: entry.getIn(['data', 'url']),
    }}
    project3={{
      image3: {
        image: getAsset(entry.getIn(['data', 'project3', 'image3', 'image'])),
        alt: entry.getIn(['data', 'project3', 'image3', 'alt']),
      },
      background3: entry.getIn(['data', 'background3']),
      url: entry.getIn(['data', 'url']),
    }}
  />
)

WorkPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WorkPagePreview
