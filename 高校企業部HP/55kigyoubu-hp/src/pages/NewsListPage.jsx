import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { newsArticles } from '../data/newsData';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const NewsListPage = () => {
    return (
        <div className="bg-base font-sans">
            {/* ヒーロー */}
            <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-20 w-40 h-40 border-4 border-white rounded-full"></div>
                    <div className="absolute bottom-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div {...fadeInUp} className="text-center text-white">
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-5 py-2 rounded-full mb-6">NEWS & TOPICS</span>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">お知らせ一覧</h1>
                        <p className="text-lg text-white/80">全国高校起業部の最新情報をお届けします</p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-base">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
            </section>

            {/* 記事一覧 */}
            <section className="py-20 bg-base">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-6">
                        {newsArticles.map((article, i) => (
                            <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                                <Link to={`/news/${article.id}`} className="group flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition">
                                    <div className="md:w-64 flex-shrink-0 overflow-hidden">
                                        <img src={article.image} alt={article.title} className="w-full h-48 md:h-full object-cover transform group-hover:scale-105 transition duration-500" />
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className={`${article.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>{article.category}</span>
                                            <span className="text-gray-400 text-sm font-bold">{article.date}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-base-dark leading-snug group-hover:text-primary transition mb-2">{article.title}</h3>
                                        <p className="text-gray-500 text-sm line-clamp-2">{article.excerpt}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-gray-500 mb-6">お問い合わせ・取材依頼はこちらから</p>
                    <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary-dark transition shadow-lg">お問い合わせ</Link>
                </div>
            </section>
        </div>
    );
};

export default NewsListPage;
