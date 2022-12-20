/************************************
1. If you want to add or remove items you will need to change a variable called $slide-count in the CSS *minimum 3 slides

2. if you want to change the dimensions of the slides you will need to edit the slideWidth variable here 👇 and the $slide-width variable in the CSS.
************************************/
import React from "react";
import "./testimonials.scss";
import Testimonialcss from "./testimonial.module.css"
// import TestimonialImg from "./img/testimonails/testimonial.jpeg";

const slideWidth = 30;

const _items = [
    {
        player: {
            title: 'Aakash Gupta',
            desc: 'You gave us one of the best nights of our career.',
            image: require("./img/testimonails/aakash.webp"),
        },
    },
    {
        player: {
            title: "Salim-Sulaiman",
            desc: "Felt the energy of the crowd in every minute of the performance, loved the overall experience.",
            image: require("./img/testimonails/SSL.webp"),
        },
    },
    {
        player: {
            title: 'Zakir Khan',
            desc: 'The crowd was amazing, and enjoyed as much as them and the hospitality that the team presented me with touched my heart.',
            image: require("./img/testimonails/zkl.webp"),
        },
    },
    {
        player: {
            title: 'The Local Train',
            desc: 'Best crowd that we have seen in a while, and their appreciation for the music was amazing.',
            image: require("./img/testimonails/TLT TEST.webp"),
        },
    },
    {
        player: {
            title: 'Ritviz',
            desc: "Great people, great energy, wouldn't have been tired to even go on for the entire night",
            image: require("./img/testimonails/ritvizl.webp"),
        },
    },
    {
        player: {
            title: 'Amit Trivedi',
            desc: "Right from the beginning till the end the crowd participation was amazing. This is definately one of the best crowds we have come across.",
            image: require("./img/testimonails/atl.webp"),
        },
    },
    {
        player: {
            title: 'Divine',
            desc: "Great energy!, superb atmosphere!, amazing crowd!, bhot hard!! bhot hard!!",
            image: require("./img/testimonails/DIVINE.webp"),
        },
    },
];

const length = _items.length;
_items.push(..._items);

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx, activeIdx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}rem)`,
        },
        player: _items[idx].player,
    };

    switch (position) {
        case length - 1:
        case length + 1:
            // item.styles = {...item.styles, filter: 'grayscale(1)'};
            break;
        case length:
            break;
        default:
            // item.styles = {...item.styles, opacity: 0};
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className={Testimonialcss.testimonialCard}>
            <img className="testimonialCardImg" src={item.player.image} alt="Image" />            
            <div className={Testimonialcss.testimonialData}>
              <div className={Testimonialcss.testimonailName}>
                {item.player.title}
              </div>
              <div className={Testimonialcss.aboutTestimonail}>
                {item.player.desc}
              </div>
            </div>
          </div>
        </li>
    );
};

const keys = Array.from(Array(_items.length).keys());

const Carousel = () => {
    const [items, setItems] = React.useState(keys);
    const [isTicking, setIsTicking] = React.useState(false);
    const [activeIdx, setActiveIdx] = React.useState(0);
    const bigLength = items.length;
    const [touchStart, setTouchStart] = React.useState(null)
    const [touchEnd, setTouchEnd] = React.useState(null)

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50 

    const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
        if (isLeftSwipe){
            nextClick(1)
            // console.log(activeIdx, length-1)
        }
        if (isRightSwipe){
            prevClick(1);
            // console.log(activeIdx)
        }
    // add your conditional logic here
    }

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    React.useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    React.useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
    }, [items]);

    return (
        <div className="carousel__wrap">
            <div className="carousel__inner">
                {/* <button className="carousel__btn carousel__btn--prev" onClick={() => prevClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--left" />
                </button> */}
                <div onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className="carousel__container">
                    <ul className="carousel__slide-list">
                        {items.map((pos, i) => (
                            <CarouselSlideItem
                                key={i}
                                idx={i}
                                pos={pos}
                                activeIdx={activeIdx}
                            />
                        ))}
                    </ul>
                </div>
                {/* <button className="carousel__btn carousel__btn--next" onClick={() => nextClick()}>
                    <i className="carousel__btn-arrow carousel__btn-arrow--right" />
                </button> */}
                <div className="carousel__dots">
                    {items.slice(0, length).map((pos, i) => (
                        <button
                            key={i}
                            onClick={() => handleDotClick(i)}
                            className={i === activeIdx ? 'dot active' : 'dot'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;

// ReactDOM.render(<Carousel />, document.getElementById('root'));










// import React from 'react'
// import Testimonialcss from "./testimonial.module.css";
// import TestimonialImg from "./img/testimonails/testimonial.jpeg";

// function testimonials() {
//   return (
//     <div>
//         <div className={Testimonialcss.testimonailsBody}>
          // <div className={Testimonialcss.testimonialCard}>
          //   <img src={TestimonialImg} alt="Image" />
          //   <div className={Testimonialcss.testimonialData}>
          //     <div className={Testimonialcss.testimonailName}>
          //       Peter Parker
          //     </div>
          //     <div className={Testimonialcss.aboutTestimonail}>
          //       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti quos reprehenderit laboriosam sed vero a natus ipsa maxime distinctio, quo est minima saepe veritatis fugiat aspernatur doloribus, autem ab perspiciatis in asperiores delectus voluptatem culpa!
          //     </div>
          //   </div>
          // </div>
//           <div className={Testimonialcss.testimonialCard}>
//             <img src={TestimonialImg} alt="Image" />
//             <div className={Testimonialcss.testimonialData}>
//               <div className={Testimonialcss.testimonailName}>
//                 Peter Parker
//               </div>
//               <div className={Testimonialcss.aboutTestimonail}>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti quos reprehenderit laboriosam sed vero a natus ipsa maxime distinctio, quo est minima saepe veritatis fugiat aspernatur doloribus, autem ab perspiciatis in asperiores delectus voluptatem culpa!
//               </div>
//             </div>
//           </div>
//           <div className={Testimonialcss.testimonialCard}>
//             <img src={TestimonialImg} alt="Image" />
//             <div className={Testimonialcss.testimonialData}>
//               <div className={Testimonialcss.testimonailName}>
//                 Peter Parker
//               </div>
//               <div className={Testimonialcss.aboutTestimonail}>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti quos reprehenderit laboriosam sed vero a natus ipsa maxime distinctio, quo est minima saepe veritatis fugiat aspernatur doloribus, autem ab perspiciatis in asperiores delectus voluptatem culpa!
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className={Testimonialcss.blank}> </div>
//     </div>
//   )
// }

// export default testimonials