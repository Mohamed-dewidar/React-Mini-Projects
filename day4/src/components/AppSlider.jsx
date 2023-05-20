import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../css/slider.css'
export default function AppSlider() {
  return (
   <Carousel className='slider mt-2'>
      <Carousel.Item className='img-cont'>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0410/1370/6909/products/vcnd_top2_600x600_18cd5de9-aaf1-4de5-b1e8-5f038dbd599c.jpg?v=1637941495"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://hips.hearstapps.com/hmg-prod/images/gettyimages-724321399-1585329828.png?crop=0.598xw:0.898xh;0.230xw,0.0278xh&resize=1200:*"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8uj0E0Lrow4VWJ5GuGrDM2mHK5naycXJt8A&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
