import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// アニメーション用の共通設定
const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const ForSchoolPage = () => {
    return (
        <div className="bg-base font-sans">
            {/* ヒーローセクション */}
            <section className="relative bg-gradient-to-br from-secondary via-secondary to-secondary-dark overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
                {/* 装飾パターン */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/3 w-20 h-20 border-2 border-white rounded-full"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div {...fadeInUp} className="text-center text-white">
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-5 py-2 rounded-full mb-6">
                            For School
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                            座学1割・実践9割。<br />
                            学校に「起業部」を<br className="md:hidden" />
                            つくりませんか？
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                            生徒が自ら考え、動き、社会と繋がる。<br />
                            実践型ビジネス教育で、未来を切り拓く力を育みます。
                        </p>
                    </motion.div>
                </div>

                {/* 波形装飾 */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-base">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
            </section>

            {/* 導入のメリット */}
            <section className="py-20 bg-base">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <span className="text-secondary text-sm tracking-widest font-bold mb-2 block">MERIT</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-base-dark">導入のメリット</h2>
                        <span className="block w-12 h-1 bg-secondary mt-4 rounded-full mx-auto"></span>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {/* メリット1 */}
                        <motion.div {...fadeInUp} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-secondary">
                            <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-base-dark mb-3">生徒の自主性向上</h3>
                            <p className="text-gray-600 leading-relaxed">
                                ビジネスの実践を通じて、自ら課題を見つけ、解決策を考え、行動する力が自然と身につきます。
                            </p>
                        </motion.div>

                        {/* メリット2 */}
                        <motion.div {...fadeInUp} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-base-dark mb-3">地域社会との連携</h3>
                            <p className="text-gray-600 leading-relaxed">
                                地元企業や住民と協力してプロジェクトを進めることで、地域に根差した学びが実現します。
                            </p>
                        </motion.div>

                        {/* メリット3 */}
                        <motion.div {...fadeInUp} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-accent">
                            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-accent-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-base-dark mb-3">次世代キャリア教育</h3>
                            <p className="text-gray-600 leading-relaxed">
                                従来の進路指導では得られない「起業家精神」を育み、多様なキャリアの選択肢を広げます。
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* カリキュラム概要 */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <span className="text-primary text-sm tracking-widest font-bold mb-2 block">CURRICULUM</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-base-dark">カリキュラム概要</h2>
                        <span className="block w-12 h-1 bg-primary mt-4 rounded-full mx-auto"></span>
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
                        {/* 左: テキスト */}
                        <motion.div {...fadeInUp} className="w-full md:w-1/2 space-y-6">
                            <h3 className="text-2xl font-bold text-base-dark">
                                <span className="text-primary">100のスキル</span>と<br />
                                <span className="text-secondary">4つの武器</span>を身につける
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                全国高校起業部では、実践的なビジネス活動を通じて、マーケティング・プレゼン・財務・リーダーシップなど100のスキルを習得。さらに「発見力」「発想力」「実行力」「巻き込み力」の4つの武器を磨き上げます。
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-primary/5 rounded-2xl p-4 text-center">
                                    <div className="text-3xl font-bold text-primary mb-1">01</div>
                                    <div className="text-sm font-bold text-base-dark">発見力</div>
                                </div>
                                <div className="bg-secondary/5 rounded-2xl p-4 text-center">
                                    <div className="text-3xl font-bold text-secondary mb-1">02</div>
                                    <div className="text-sm font-bold text-base-dark">発想力</div>
                                </div>
                                <div className="bg-accent/5 rounded-2xl p-4 text-center">
                                    <div className="text-3xl font-bold text-accent-dark mb-1">03</div>
                                    <div className="text-sm font-bold text-base-dark">実行力</div>
                                </div>
                                <div className="bg-orange/5 rounded-2xl p-4 text-center">
                                    <div className="text-3xl font-bold text-orange mb-1">04</div>
                                    <div className="text-sm font-bold text-base-dark">巻き込み力</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* 右: イメージ */}
                        <motion.div {...fadeInUp} className="w-full md:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                                    alt="カリキュラムの様子"
                                    className="w-full h-auto"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent flex items-end p-8">
                                    <p className="text-white font-bold text-lg">チームで学び、チームで成長する</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 導入までの流れ */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <span className="text-secondary text-sm tracking-widest font-bold mb-2 block">FLOW</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-base-dark">導入までの流れ</h2>
                        <span className="block w-12 h-1 bg-secondary mt-4 rounded-full mx-auto"></span>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        {[
                            { step: '01', title: 'お問い合わせ', desc: 'まずはお気軽にお問い合わせください。資料のお送りやオンライン説明会のご案内をいたします。', color: 'secondary' },
                            { step: '02', title: 'ヒアリング', desc: '学校の現状や目標をお伺いし、最適なプランをご提案します。オンラインでの面談も可能です。', color: 'primary' },
                            { step: '03', title: 'メンター派遣・準備', desc: '認定メンターを学校に派遣し、部活動の立ち上げに必要な準備をサポートします。', color: 'accent' },
                            { step: '04', title: '活動開始', desc: 'いよいよ「起業部」発足！メンターが定期的に伴走しながら、生徒たちの活動を支えます。', color: 'orange' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-start gap-6 mb-8 last:mb-0"
                            >
                                <div className={`flex-shrink-0 w-16 h-16 bg-${item.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                                    {item.step}
                                </div>
                                <div className="flex-1 bg-white rounded-2xl p-6 shadow-md">
                                    <h3 className="text-lg font-bold text-base-dark mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-secondary to-secondary-dark">
                <div className="container mx-auto px-4 text-center">
                    <motion.div {...fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            まずはお気軽にご相談ください
                        </h2>
                        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
                            導入に関するご質問・資料請求など、お気軽にお問い合わせください。<br />
                            オンラインでの説明会も随時開催しています。
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-white text-secondary font-bold text-lg hover:bg-gray-100 transition shadow-xl hover:shadow-2xl">
                                導入相談・資料請求
                            </Link>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSega4QFyhIAKVRLc76RxsAtJ2GlwuTt6azGy0jBpvLIro2Wpg/viewform" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition">
                                導入申込フォーム
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ForSchoolPage;
