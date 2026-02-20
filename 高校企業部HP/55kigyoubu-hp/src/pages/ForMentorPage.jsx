import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const roles = [
    { title: '学校への導入提案', desc: '高校起業部の意義や導入メリットを学校に伝え、新規立ち上げの提案を行います。', emoji: '📣' },
    { title: '立ち上げ支援', desc: '部活動の発足から初期の活動計画づくりまで、実践的なノウハウを提供しサポートします。', emoji: '🏗️' },
    { title: '地域コーディネート', desc: '高校生と地元企業・団体をつなぎ、プロジェクトパートナーの発掘やマッチングを行います。', emoji: '🔗' },
    { title: '伴走・見守り', desc: '定期的に活動に参加し、生徒たちの相談相手として寄り添いながら成長を支えます。', emoji: '❤️' }
];

const steps = [
    { step: '01', title: 'エントリー', desc: 'Webフォームから簡単にエントリー。年齢・職業不問です。', color: 'bg-primary' },
    { step: '02', title: 'オリエンテーション', desc: '活動概要やメンターの心得を学びます。オンラインも可。', color: 'bg-secondary' },
    { step: '03', title: '認定・マッチング', desc: '認定メンターとして登録、お住まいの地域の学校とマッチング。', color: 'bg-accent' },
    { step: '04', title: '活動開始', desc: '月1〜2回の訪問からスタート。無理のないペースで活動できます。', color: 'bg-orange' },
];

const voices = [
    { name: '田中 太郎', role: 'IT企業勤務・大阪府', text: '高校生たちの柔軟な発想に毎回驚かされます。自分のビジネス経験が少しでも役に立っていると実感でき、やりがいを感じています。' },
    { name: '鈴木 花子', role: 'フリーランスデザイナー・東京都', text: '月に1〜2回の参加なので、本業と両立しやすいです。生徒たちと一緒にブランドロゴを作った時の喜びは忘れられません。' },
    { name: '佐藤 健一', role: '元銀行員・福岡県', text: '退職後のセカンドキャリアとして参加。自分の長年の経験を次世代に伝えられることが、人生の新しい喜びです。' },
];

const ForMentorPage = () => {
    return (
        <div className="bg-base font-sans">
            {/* ヒーロー */}
            <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 right-20 w-48 h-48 border-4 border-white rounded-full"></div>
                    <div className="absolute bottom-20 left-20 w-32 h-32 border-4 border-white rounded-full"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div {...fadeInUp} className="text-center text-white">
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-5 py-2 rounded-full mb-6">For Mentor</span>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">あなたの経験が、<br />次世代の翼になる。</h1>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">高校生の挑戦を見守り、支え、共に成長する。<br />メンターとして、未来をつくる仲間になりませんか？</p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-base">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
            </section>

            {/* メンターの役割 */}
            <section className="py-20 bg-base">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <span className="text-primary text-sm tracking-widest font-bold mb-2 block">ROLE</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-base-dark">メンターの4つの役割</h2>
                        <span className="block w-12 h-1 bg-primary mt-4 rounded-full mx-auto"></span>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {roles.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex gap-6">
                                <div className="flex-shrink-0 w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-3xl">{item.emoji}</div>
                                <div>
                                    <h3 className="text-xl font-bold text-base-dark mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 関わり方のステップ */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <span className="text-secondary text-sm tracking-widest font-bold mb-2 block">STEP</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-base-dark">メンターになるまでの流れ</h2>
                        <span className="block w-12 h-1 bg-secondary mt-4 rounded-full mx-auto"></span>
                    </motion.div>
                    <div className="max-w-4xl mx-auto">
                        {steps.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex items-start gap-6 mb-8 last:mb-0">
                                <div className={`flex-shrink-0 w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg`}>{item.step}</div>
                                <div className="flex-1 bg-gray-50 rounded-2xl p-6">
                                    <h3 className="text-lg font-bold text-base-dark mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 現役メンターの声 */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <span className="text-primary text-sm tracking-widest font-bold mb-2 block">VOICE</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-base-dark">現役メンターの声</h2>
                        <span className="block w-12 h-1 bg-primary mt-4 rounded-full mx-auto"></span>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {voices.map((item, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="bg-white rounded-3xl p-8 shadow-lg relative">
                                <div className="absolute top-4 right-6 text-6xl text-primary/10 font-serif leading-none">"</div>
                                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">{item.text}</p>
                                <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">{item.name.charAt(0)}</div>
                                    <div>
                                        <p className="font-bold text-base-dark">{item.name}</p>
                                        <p className="text-sm text-gray-500">{item.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
                <div className="container mx-auto px-4 text-center">
                    <motion.div {...fadeInUp}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">あなたの経験を、<br className="md:hidden" />次世代に届けませんか？</h2>
                        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">年齢・職業不問。社会人経験をお持ちの方なら、どなたでもメンターにエントリーできます。</p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-block px-10 py-4 rounded-full bg-orange text-white font-bold text-lg hover:opacity-90 transition shadow-xl">認定メンターにエントリーする</Link>
                            <Link to="/" className="inline-block px-10 py-4 rounded-full border-2 border-white text-white font-bold text-lg hover:bg-white/10 transition">トップに戻る</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ForMentorPage;
