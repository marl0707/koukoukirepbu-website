import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const activities = [
    {
        title: '起業部の活動',
        desc: '各加盟校の起業部では、生徒自らがビジネスアイデアを考え、計画し、実行します。座学は1割、実践9割のカリキュラムで、リアルな社会との接点を持ちながら学びます。',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
        badge: 'CLUB'
    },
    {
        title: '全国サミット',
        desc: '年に一度、全国の加盟校が一堂に会する全国サミット。各校の起業部が自分たちのビジネスプランをプレゼンし、審査員からのフィードバックを受けます。最優秀チームには表彰と活動支援が贈られます。',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
        badge: 'SUMMIT'
    },
    {
        title: 'メンターシップ',
        desc: '経験豊富な社会人メンターが各校の起業部に伴走し、生徒たちの活動をサポートします。ビジネスの知識だけでなく、社会人としてのマナーやコミュニケーション力も学べます。',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
        badge: 'MENTORSHIP'
    },
    {
        title: '企業連携プログラム',
        desc: 'パートナー企業と連携した特別プログラムを実施。企業見学、商品開発ワークショップ、マーケティング実践など、リアルビジネスの現場を体験します。',
        image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
        badge: 'PROGRAM'
    },
];

const skills = [
    { name: '発想力', icon: '💡', desc: 'ゼロからアイデアを生み出す力' },
    { name: '行動力', icon: '🚀', desc: '考えたことを即座に実行する力' },
    { name: '交渉力', icon: '🤝', desc: '人を巻き込み、協力を引き出す力' },
    { name: '分析力', icon: '📊', desc: 'データから本質を見抜く力' },
    { name: 'プレゼン力', icon: '🎤', desc: '想いを正確に伝える力' },
    { name: 'チーム力', icon: '👥', desc: '多様な仲間と協働する力' },
];

const AboutPage = () => {
    return (
        <div className="bg-base font-sans">
            {/* ヒーロー */}
            <section className="relative bg-gradient-to-br from-base-dark via-gray-800 to-gray-900 overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-16 left-16 w-44 h-44 border-4 border-white rounded-full"></div>
                    <div className="absolute bottom-16 right-16 w-56 h-56 border-4 border-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-4 border-white rounded-full"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div {...fadeInUp} className="text-center text-white">
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-5 py-2 rounded-full mb-6">ABOUT US</span>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">私たちの活動</h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">「教室」を飛び出し「社会」で学ぶ。<br />高校生×地域×ビジネスが生み出す、無限の可能性。</p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-base">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
            </section>

            {/* ミッション */}
            <section className="py-20 bg-base">
                <div className="container mx-auto px-4 max-w-4xl">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <span className="text-primary text-sm tracking-widest font-bold mb-2 block">MISSION</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-base-dark mb-6">すべての高校生に<br />「起業」という選択肢を</h2>
                        <span className="block w-12 h-1 bg-primary mt-4 rounded-full mx-auto"></span>
                    </motion.div>
                    <motion.div {...fadeInUp} className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                        <p className="text-gray-600 leading-loose text-lg">
                            一般社団法人全国高校起業部は、全国の高校生に「起業」という選択肢を届ける団体です。部活動として「起業部」を設立し、実際にビジネスを立ち上げる実践的な経験を通じて、次世代のリーダーを育成します。
                        </p>
                        <p className="text-gray-600 leading-loose text-lg mt-4">
                            私たちは、座学1割・実践9割のカリキュラムにこだわり、高校生が自分の力で課題を見つけ、解決策を考え、実行に移す力を養います。地域の企業やメンターと連携しながら、リアルな社会との接点を持ちながら学ぶ環境を提供しています。
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 活動紹介 */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <span className="text-secondary text-sm tracking-widest font-bold mb-2 block">ACTIVITIES</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-base-dark">主な活動内容</h2>
                        <span className="block w-12 h-1 bg-secondary mt-4 rounded-full mx-auto"></span>
                    </motion.div>
                    <div className="space-y-16 max-w-5xl mx-auto">
                        {activities.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                                className={`flex flex-col ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}>
                                <div className="w-full md:w-1/2 flex-shrink-0">
                                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                                        <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                                        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{item.badge}</span>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h3 className="text-2xl font-bold text-base-dark mb-4">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 身につく力 */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <span className="text-accent-dark text-sm tracking-widest font-bold mb-2 block">SKILLS</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-base-dark">起業部で身につく6つの力</h2>
                        <span className="block w-12 h-1 bg-accent mt-4 rounded-full mx-auto"></span>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {skills.map((skill, i) => (
                            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition">
                                <div className="text-4xl mb-3">{skill.icon}</div>
                                <h3 className="text-lg font-bold text-base-dark mb-2">{skill.name}</h3>
                                <p className="text-gray-500 text-sm">{skill.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 数字で見る */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold">数字で見る全国高校起業部</h2>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
                        {[
                            { num: '2', label: '導入校' },
                            { num: '100', label: '目標校数' },
                            { num: '10+', label: 'メンター数' },
                            { num: '5+', label: 'パートナー企業' },
                        ].map((stat, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.num}</p>
                                <p className="text-white/70 text-sm">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 法人概要 */}
            <section className="py-20 bg-base">
                <div className="container mx-auto px-4 max-w-3xl">
                    <motion.div {...fadeInUp} className="text-center mb-12">
                        <span className="text-gray-400 text-sm tracking-widest font-bold mb-2 block">ORGANIZATION</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-base-dark">法人概要</h2>
                        <span className="block w-12 h-1 bg-gray-300 mt-4 rounded-full mx-auto"></span>
                    </motion.div>
                    <motion.div {...fadeInUp} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                        <table className="w-full text-sm">
                            <tbody>
                                {[
                                    ['法人名', '一般社団法人全国高校起業部'],
                                    ['設立', '2025年'],
                                    ['所在地', '〒663-8166 兵庫県西宮市甲子園三保町5番21-006号'],
                                    ['代表理事', '山根 知典'],
                                    ['理事', '瀬島 和樹（ロンショール合同会社 代表）、濵本 智博（株式会社BeLIVE 代表取締役）'],
                                    ['導入校', '福井ICT中央高等学院（福井県）、こみらいフリースクール（大阪府）'],
                                    ['事業内容', '高校生への起業教育・メンターシップの提供、全国サミットの開催、企業連携プログラムの実施'],
                                ].map(([label, value], i) => (
                                    <tr key={i} className={i !== 5 ? 'border-b border-gray-100' : ''}>
                                        <td className="py-4 px-6 font-bold text-base-dark bg-gray-50 w-36">{label}</td>
                                        <td className="py-4 px-6 text-gray-600">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
                <div className="container mx-auto px-4 text-center">
                    <motion.div {...fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">一緒に、未来をつくりませんか？</h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">ご質問・ご相談はお気軽にお問い合わせください。</p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-white text-primary font-bold text-lg hover:bg-gray-100 transition shadow-xl">お問い合わせ</Link>
                            <Link to="/news" className="inline-block px-10 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition">お知らせ一覧</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
