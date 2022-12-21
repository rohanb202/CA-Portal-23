
import React from "react";
import "./testimonials.scss";
import Testimonialcss from "./testimonial.module.css"

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
            image: require("./img/testimonails/SSL.jpg"),
        },
    },
    {
        player: {
            title: 'Zakir Khan',
            desc: 'The crowd was amazing, and enjoyed as much as them and the hospitality that the team presented me with touched my heart.',
            image: require("./img/testimonails/zkl.jpg"),
        },
    },
    {
        player: {
            title: 'The Local Train',
            desc: 'Best crowd that we have seen in a while, and their appreciation for the music was amazing.',
            image: require("./img/testimonails/TLT TEST.jpg"),
        },
    },
    {
        player: {
            title: 'Ritviz',
            desc: "Great people, great energy, wouldn't have been tired to even go on for the entire night",
            image: require("./img/testimonails/ritvizl.jpg"),
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
            image: require("./img/testimonails/DIVINE.jpg"),
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
            break;
        case length:
            break;
        default:
            break;
    }

    return item;
};

const CarouselSlideItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx);

    return (
        <li className="carousel__slide-item" style={item.styles}>
            <div className={Testimonialcss.testimonialCard}>
            <img className="testimonialCardImg" src={item.player["image"]} alt="Image" />         
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

    const minSwipeDistance = 50 

    const onTouchStart = (e) => {
    setTouchEnd(null) 
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
        }
        if (isRightSwipe){
            prevClick(1);
        }
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
