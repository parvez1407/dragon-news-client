import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const News = () => {
    const news = useLoaderData();
    return (
        <Card>
            <Image src={news?.image_url}></Image>
            <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>
                    {news.details}
                </Card.Text>
                <Link to={`/category/${news?.category_id}`}>
                    <Button variant="primary">All News in this Category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;