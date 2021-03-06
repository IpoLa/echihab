import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import { Link } from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Slider() {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
        // let slideIndex = 1;
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }


    // const history = useHistory();

    // const routeChange = index =>{ 
    //     let path = `newPath`;         
    //     if(slideIndex !== dataSlider.length){
    //         setSlideIndex(slideIndex + 1)
    //     } 
    //     else if (slideIndex === dataSlider.length){
    //         setSlideIndex(1)
    //     }
    //     history.push(process.env.PUBLIC_URL + `/files/siriusMagazine${slideIndex}.pdf`);
    // }

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <img 
                            // src={process.env.PUBLIC_URL + `/img${index + 1}.jpg`} 
                            src={process.env.PUBLIC_URL + `/img1.jpg`} 
                            alt=''
                        />
                    </div>
                )
            })}
            <Link 
                to={process.env.PUBLIC_URL + `/files/siriusMagazine1.pdf`}
            >
                <img className='image'
                    src={process.env.PUBLIC_URL + `/u2554-4.png`}
                    alt=''
                    onClick='/files/siriusMagazine1.pdf'
                />
            </Link>
            <img 
                className='buttons'
                src={process.env.PUBLIC_URL + `/u2560-4.png`}
                alt=''
                onClick={process.env.PUBLIC_URL + `/files/siriusMagazine1.pdf`}
            />
            <img 
                className='button'
                src={process.env.PUBLIC_URL + `/u2536-4.png`}
                alt=''
            />
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            

            <div className="container-dots">
                {Array.from({length: 1}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}