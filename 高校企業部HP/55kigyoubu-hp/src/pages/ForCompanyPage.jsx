import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const supportPlans = [
    { name: 'ブロンズ', price: '月額 5,000円〜', benefits: ['活動報告レポートの共有', '公式サイトへのロゴ掲載', 'メールニュースの配信'], color: 'bg-gray-400' },
    { name: 'シルバー', price: '月額 30,000円〜', benefits: ['ブロンズ特典すべて', '年次活動報告会へのご招待', 'SNSでの企業紹介'], color: 'bg-gray-500' },
    { name: 'ゴールド', price: '月額 100,000円〜', benefits: ['シルバー特典すべて', '高校生との交流イベント', '自社PRの活動内配信', 'サミットへの優先ご招待'], color: 'bg-accent' },
];

const usages = [
    { label: '活動費', pct: '40%', desc: '各校の起業部活動に必要な教材・ツール・交通費など', emoji: '📚' },
    { label: '人材育成', pct: '25%', desc: 'メンターの研修費、全国サミットの開催費用', emoji: '🎓' },
    { label: '環境整備', pct: '20%', desc: '活動拠点の整備、オンライン環境の構築', emoji: '🏠' },
    { label: '広報・運営', pct: '15%', desc: '広報活動、事務局運営費', emoji: '📢' },
];

const ForCompanyPage = () => {
    return (
        <div className="bg-base font-sans">
            {/* ヒーロー */}
            <section className="relative bg-gradient-to-br from-accent via-accent to-accent-dark overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-16 left-16 w-44 h-44 border-4 border-white rounded-full"></div>
                    <div className="absolute bottom-16 right-16 w-56 h-56 border-4 border-white rounded-full"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div {...fadeInUp} className="text-center text-base-dark">
                        <span className="inline-block bg-white/40 backdrop-blur-sm text-base-dark text-sm font-bold px-5 py-2 rounded-full mb-6">For Company</span>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">日本の未来をつくる<br />高校生を、<br className="md:hidden" />共に育てませんか？</h1>
                        <p className="text-lg md:text-xl text-base-dark/80 max-w-2xl mx-auto leading-relaxed">企業のCSR・CSV活動として、次世代の起業家育成にご参加ください。<br />あなたの支援が、高校生の挑戦を後押しします。</p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-base">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
            </section>

            {/* スポンサーシップの仕組み */}
            <section className="py-20 bg-base">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <span className="text-accent-dark text-sm tracking-widest font-bold mb-2 block">SPONSORSHIP</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-base-dark">エールシステム</h2>
                        <p className="text-gray-600 mt-4 max-w-xl mx-auto">高校生たちへの「エール（応援）」として、月額制のスポンサーシップにご参加いただけます。</p>
                        <span className="block w-12 h-1 bg-accent mt-4 rounded-full mx-auto"></span>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {supportPlans.map((plan, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                                className={`bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition ${i === 2 ? 'ring-2 ring-accent' : ''}`}>
                                <div className={`${plan.color} p-6 text-center`}>
                                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                                    <p className="text-white/90 text-sm mt-1">{plan.price}</p>
                                </div>
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        {plan.benefits.map((b, j) => (
                                            <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                                                <span className="text-accent-dark mt-0.5">✓</span>{b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 支援の活用用途 */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <span className="text-primary text-sm tracking-widest font-bold mb-2 block">USAGE</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-base-dark">ご支援の活用用途</h2>
                        <span className="block w-12 h-1 bg-primary mt-4 rounded-full mx-auto"></span>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {usages.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-gray-50 rounded-2xl p-6 flex gap-5 items-start">
                                <div className="text-4xl">{item.emoji}</div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-lg font-bold text-base-dark">{item.label}</h3>
                                        <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-0.5 rounded-full">{item.pct}</span>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* パートナー企業 */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <motion.div {...fadeInUp}>
                        <span className="text-gray-400 text-sm tracking-widest font-bold mb-2 block">PARTNERS</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-base-dark mb-12">パートナー企業・団体</h2>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition duration-500 mb-8">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="h-16 w-36 bg-gray-200 rounded-lg flex items-center justify-center font-bold text-gray-400 text-sm">LOGO {i}</div>
                        ))}
                    </div>
                    <p className="text-gray-500 text-sm">※ パートナー企業は随時募集中です</p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-accent to-accent-dark">
                <div className="container mx-auto px-4 text-center">
                    <motion.div {...fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold text-base-dark mb-6">高校生の未来に、<br className="md:hidden" />エールを送りませんか？</h2>
                        <p className="text-base-dark/80 text-lg mb-10 max-w-2xl mx-auto">スポンサーシップのご相談、CSR連携のお問い合わせなど、お気軽にご連絡ください。</p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-base-dark text-white font-bold text-lg hover:bg-gray-800 transition shadow-xl">スポンサーとして応援する</Link>
                            <Link to="/" className="inline-block px-10 py-4 rounded-full border-2 border-base-dark text-base-dark font-bold text-lg hover:bg-base-dark/10 transition">トップに戻る</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ForCompanyPage;
