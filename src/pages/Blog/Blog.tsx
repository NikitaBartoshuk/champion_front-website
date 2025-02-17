import React, {useEffect, FC} from 'react';
import './blog.css'
import blogImg from '../../assets/footerimage.svg'
import {useDispatch, useSelector} from "react-redux";
import {createBlog, getBlogs} from "../../stores/actions/blogAction";
import Footer from "../../common/Footer/Footer";

interface IBlogItemProps {
    title: string;
    description: string;
}


const BlogItem: FC<IBlogItemProps> = ({title, description}) => {
    return (
        <div className='blog-item-container'>
            <span className='blog-item-row'>{title}</span>
            <img className='blog-item-img' src={blogImg} alt="blog image"/>
            <p>{description}</p>
        </div>
    )
}

const Blog = () => {

    const dispatch = useDispatch()

    const blogs = useSelector((state: any )=> state.blog.blogs)

    useEffect(() => {
        dispatch(getBlogs())
    }, [])

    console.log(blogs)

    const createBlogs = () => {
        dispatch(createBlog('Из функции', 'Новость'))
    }


    return (
        <>
            <div className='blogs-container'>
                    {blogs.items.map((item: any) => {
                        return <BlogItem key={item.id} title={item.title} description={item.description} />
                    })}
            </div>
            <Footer />
        </>
    );
};

export default Blog;