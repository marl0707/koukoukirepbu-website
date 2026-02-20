import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

const inquiryTypes = [
    '起業部の導入について（学校関係者）',
    'メンターへの登録について',
    'スポンサー・パートナーシップについて（企業）',
    '取材・メディア掲載について',
    'イベント・講演依頼',
    'その他のお問い合わせ',
];

const ContactPage = () => {
    const [formData, setFormData] = useState({
        type: '',
        name: '',
        organization: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 実際にはAPIに送信する処理
        setIsSubmitted(true);
    };

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
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-5 py-2 rounded-full mb-6">CONTACT</span>
                        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">お問い合わせ</h1>
                        <p className="text-lg text-white/80">お気軽にご連絡ください</p>
                    </motion.div>
                </div>
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-base">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
            </section>

            {/* お問い合わせフォーム */}
            <section className="py-20 bg-base">
                <div className="container mx-auto px-4 max-w-3xl">
                    {isSubmitted ? (
                        <motion.div {...fadeInUp} className="bg-white rounded-3xl p-12 shadow-lg text-center">
                            <div className="text-6xl mb-6">✉️</div>
                            <h2 className="text-2xl font-bold text-base-dark mb-4">送信が完了しました</h2>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                お問い合わせいただきありがとうございます。<br />
                                担当者より3営業日以内にご連絡差し上げます。
                            </p>
                            <a href="/" className="inline-block px-8 py-3 rounded-full bg-primary text-white font-bold hover:bg-primary-dark transition">トップに戻る</a>
                        </motion.div>
                    ) : (
                        <motion.div {...fadeInUp}>
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* お問い合わせ種別 */}
                                    <div>
                                        <label className="block text-sm font-bold text-base-dark mb-2">お問い合わせ種別 <span className="text-red-500">*</span></label>
                                        <select name="type" value={formData.type} onChange={handleChange} required
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition bg-white">
                                            <option value="">選択してください</option>
                                            {inquiryTypes.map((t, i) => <option key={i} value={t}>{t}</option>)}
                                        </select>
                                    </div>

                                    {/* 名前 */}
                                    <div>
                                        <label className="block text-sm font-bold text-base-dark mb-2">お名前 <span className="text-red-500">*</span></label>
                                        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="山田 太郎"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" />
                                    </div>

                                    {/* 所属 */}
                                    <div>
                                        <label className="block text-sm font-bold text-base-dark mb-2">ご所属（学校名・企業名など）</label>
                                        <input type="text" name="organization" value={formData.organization} onChange={handleChange} placeholder="○○高等学校 / 株式会社○○"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" />
                                    </div>

                                    {/* メール */}
                                    <div>
                                        <label className="block text-sm font-bold text-base-dark mb-2">メールアドレス <span className="text-red-500">*</span></label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="example@email.com"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" />
                                    </div>

                                    {/* 電話 */}
                                    <div>
                                        <label className="block text-sm font-bold text-base-dark mb-2">お電話番号</label>
                                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="090-1234-5678"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" />
                                    </div>

                                    {/* メッセージ */}
                                    <div>
                                        <label className="block text-sm font-bold text-base-dark mb-2">お問い合わせ内容 <span className="text-red-500">*</span></label>
                                        <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="お問い合わせ内容をご記入ください"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none" />
                                    </div>

                                    {/* 送信ボタン */}
                                    <div className="text-center pt-4">
                                        <button type="submit"
                                            className="inline-block px-12 py-4 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary-dark transition shadow-lg hover:shadow-xl">
                                            送信する
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* 連絡先情報 */}
                            <div className="mt-12 grid md:grid-cols-3 gap-6">
                                <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                                    <div className="text-3xl mb-3">📧</div>
                                    <h3 className="font-bold text-base-dark mb-2">メール</h3>
                                    <p className="text-gray-500 text-sm">info@55kigyoubu.com</p>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                                    <div className="text-3xl mb-3">📍</div>
                                    <h3 className="font-bold text-base-dark mb-2">所在地</h3>
                                    <p className="text-gray-500 text-sm">〒663-8166 兵庫県西宮市<br />甲子園三保町5番21-006号</p>
                                </div>
                                <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
                                    <div className="text-3xl mb-3">📅</div>
                                    <h3 className="font-bold text-base-dark mb-2">個別相談予約</h3>
                                    <a href="https://forms.gle/Y9QvqesDq71JUX8QA" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-bold hover:underline">オンラインで予約する →</a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
