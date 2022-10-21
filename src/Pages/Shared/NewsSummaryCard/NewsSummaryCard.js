import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar, } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
    const { _id, title, author, details, image_url, total_view, rating } = news;
    const { img, name, published_date } = author;
    // console.log(news);
    return (
        <Card className="text-justify mb-4">
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <Image
                        roundedCircle
                        src={img}
                        style={{ height: '70px', marginRight: '10px' }}
                    ></Image>
                    <div>
                        <p className='mb-0'>{name}</p>
                        <p className='mb-0'>{published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2' />
                    <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                            <>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read More</Link></>
                            :
                            details
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <div>
                    <FaStar className='me-2 text-warning' />{rating.number}
                </div>
                <div>
                    <FaEye className='me-2' />{total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;