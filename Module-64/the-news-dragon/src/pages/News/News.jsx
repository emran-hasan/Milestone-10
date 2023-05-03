import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsight from './EditorInsight/EditorInsight';

const News = () => {
    const news = useLoaderData()
    const { _id, title, details, image_url, category_id ,author,rating,total_view} = news;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}><Button variant="danger"> <FaArrowLeft></FaArrowLeft> All news categories</Button></Link>
                </Card.Body>
            </Card>
            <EditorInsight></EditorInsight>
        </div>
    );
};

export default News;