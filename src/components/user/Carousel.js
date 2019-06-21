import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './Home.css'

const items = [
  {
    src: 'https://scifanatic-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/multieyesaru-head.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: 'http://cdn8.dissolve.com/p/D1830_1_017/D1830_1_017_0004_600.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: 'https://video-images.vice.com/articles/5a9430c02b1974000632c116/lede/1519661250353-shutterstock_59480047.jpeg?crop=1xw%3A0.562xh%3B0xw%2C0.09xh&resize=650%3A*&output-quality=55',
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

const Carousel = () => <UncontrolledCarousel className="alien-carousel" items={items} />;

export default Carousel;