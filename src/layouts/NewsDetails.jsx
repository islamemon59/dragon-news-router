import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RighAside from '../components/homelayout/RighAside';
import NewsDetailCard from '../components/NewsDetailCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {

    const [news, setNews] = useState({})

    const data = useLoaderData()
    const {id} = useParams()

    useEffect(() => {
        const newsDetails = data.find(singleNews => singleNews.id == id);
        setNews(newsDetails)
    }, [data, id])

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto py-10 grid grid-cols-12 gap-5'>
                <section className='col-span-9'>
                    <h1 className='font-bold'>News Details</h1>
                    <NewsDetailCard news={news}></NewsDetailCard>
                </section>
                <aside className='col-span-3'>
                    <RighAside></RighAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;