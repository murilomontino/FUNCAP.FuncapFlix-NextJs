import React from 'react'

import Img from '@/components/atom/image'

type Props = {
  title: string
  thumbnail: string
  width?: string
  height?: string
  button?: string
  linkDetails?: string
}

const CardSwipper = ({
  title,
  thumbnail,
  width = '100%',
  height = '160px',
  button = 'Assistir',
  linkDetails = '/',
}: Props) => {
  return (
    <div
      className="block-images position-relative"
      style={{
        width: width,
      }}
    >
      <div className="img-box">
        <Img
          image={thumbnail}
          className="img-fluid"
          width="100%"
          height={height}
          alt={`thumbnail de ${title}`}
        />
      </div>
      <div className="block-description">
        <h6 className="iq-title">
          <a href={linkDetails}>{title}</a>
        </h6>
        {/*   <div className="movie-time d-flex align-items-center my-2 iq-ltr-direction">
          <div className="badge badge-secondary p-1 mr-2">13+</div>
          <span className="text-white">2h 30m</span>
        </div> */}
        <div className="hover-buttons">
          <a href={linkDetails} role="button" className="btn btn-hover iq-button">
            <i className="fa fa-play mr-1" aria-hidden="true"></i>
            {button}
          </a>
        </div>
      </div>
      {/* <div className="block-social-info">
        <ul className="list-inline p-0 m-0 music-play-lists">
          <li className="share">
            <span>
              <i className="ri-share-fill"></i>
            </span>
            <div className="share-box">
              <div className="d-flex align-items-center">
                <a
                  href="https://www.facebook.com/sharer?u=https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-ico"
                  tabIndex="0"
                >
                  <i className="ri-facebook-fill"></i>
                </a>
                <a
                  href="https://twitter.com/intent/tweet?text=Currentlyreading"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-ico"
                  tabIndex="0"
                >
                  <i className="ri-twitter-fill"></i>
                </a>
                <a
                  href="#"
                  data-link="https://iqonic.design/wp-themes/streamit_wp/movie/shadow/"
                  className="share-ico iq-copy-link"
                  tabIndex="0"
                >
                  <i className="ri-links-fill"></i>
                </a>
              </div>
            </div>
          </li>
          <li>
            <span>
              <i className="ri-heart-fill"></i>
            </span>
            <span className="count-box">19+</span>
          </li>
          <li>
            <span>
              <i className="ri-add-line"></i>
            </span>
          </li>
        </ul>
      </div> */}
    </div>
  )
}

export default CardSwipper
