import React from 'react'
import "./ProductGallery.scss";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import mobile1 from "../../../assets/images/mobile.png"
import mobile2 from "../../../assets/images/mobile1.png"
import mobile3 from "../../../assets/images/mobile2.png"

const ProductGallery = () => {
    const images = [
  {
    original: mobile1,
    thumbnail: mobile1,
  },
  {
    original: mobile2,
    thumbnail: mobile2,
  },
  {
    original: mobile3,
    thumbnail: mobile3,
  },
];
  return (
      <ImageGallery items={images} showFullscreenButton={false} showPlayButton={false} />
  )
}

export default ProductGallery