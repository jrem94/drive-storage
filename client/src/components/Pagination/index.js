import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class Pagination extends Component {
  render () {
    return (
      <Fragment>
        <nav>
          <ul className='pagination'>
            {new Array(this.props.totalPages).fill(0).map((e, i) => i + 1).map((page, index) => {
              return (
                <li
                  key={index}
                  className={`page-item ${
                    this.props.currentPage === index ? 'active' : ''
                  }`}
                >
                  <a
                    className='page-link'
                    // href='#'
                    onClick={() => this.props.setPage(index)}
                  >
                    {page}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </Fragment>
    )
  }
}

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  setPage: PropTypes.func
}

export default Pagination
