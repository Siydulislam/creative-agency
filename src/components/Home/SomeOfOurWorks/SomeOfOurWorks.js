import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';

const SomeOfOurWorks = () => {
    return (
        <section className="jumbotron bg-dark mt-5">
            <h2 className="text-center text-white mb-5">Here are some of <span style={{color:'#7AB259'}}>our works</span></h2>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={1}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                customTransition="all 2s linear"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                    },
                    mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                    },
                    tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
                transitionDuration={2500}
            >
                <div><img src={carousel1} alt="" style={{width:'400px', height:'300px'}}/></div>
                <div><img src={carousel2} alt="" style={{width:'400px', height:'300px'}}/></div>
                <div><img src={carousel3} alt="" style={{width:'400px', height:'300px'}}/></div>
                <div><img src={carousel4} alt="" style={{width:'400px', height:'300px'}}/></div>
                <div><img src={carousel5} alt="" style={{width:'400px', height:'300px'}}/></div>
            </Carousel>
        </section>
    );
};

export default SomeOfOurWorks;