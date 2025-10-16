import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const Feebook = () => {
    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        fetch('/list.json')
            .then((res) => res.json())
            .then((data) => {
                const filtered = data.filter((item) => item.category === 'Free');
                setFilterData(filtered);
                console.log(filtered);
            })
            .catch((err) => console.error('Failed to load list.json', err));
    }, []);
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
                    <p>Free offered courses are an incredible opportunity for anyone eager to learn and grow without financial barriers. They make education accessible to everyone, regardless of background or location. These courses allow learners to explore new fields, develop practical skills, and even prepare for careers — all at no cost. Whether it’s coding, design, communication, or business, free courses open doors to knowledge that can change lives. They prove that learning doesn’t always require expensive degrees — just curiosity, dedication, and the will to improve.</p>
                </div>

                <div className="my-6">
                    <Slider {...settings}>
                        {filterData.map((item) => (
                            <div key={item.id}>
                                <Cards item={item} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Feebook