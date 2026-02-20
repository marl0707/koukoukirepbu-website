import React from "react";
import { Link } from "react-router-dom";
import { partnerCompanies } from "../data/partnerData";

const PartnersPage = () => {
    return (
        <div className="bg-base font-sans min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-base-dark text-white pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-bold tracking-widest mb-6">
                        OUR PARTNERS
                    </span>
                    <h1 className="text-3xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                        地域の<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400 inline-block">熱い企業</span>名鑑
                    </h1>
                    <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
                        未来ある高校生たちの挑戦を、本気で応援する企業がここにあります。<br className="hidden md:block" />
                        情熱を持ってビジネスに取り組み、次世代の育成に力を注ぐパートナーたちです。
                    </p>
                </div>
            </div>

            {/* Partners List */}
            <div className="py-8 md:py-12">
                {partnerCompanies.map((company, index) => (
                    <section key={company.id} className={`py-12 md:py-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <div className="container mx-auto px-4">
                            <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-20 items-center`}>

                                {/* Visual Side (Logo Area) */}
                                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                                    <div className="relative group w-full max-w-sm">
                                        {/* 背景のぼんやりした光だけ残して雰囲気を作る（箱感は出さない） */}
                                        <div className={`absolute inset-0 ${company.color} rounded-full opacity-10 blur-3xl transform group-hover:scale-110 transition duration-700`}></div>

                                        <div className="relative z-10 flex items-center justify-center md:justify-start p-4">
                                            {company.logo ? (
                                                <img src={company.logo} alt={company.name} className="max-h-24 md:max-h-32 w-auto object-contain drop-shadow-sm transform group-hover:scale-105 transition duration-500" />
                                            ) : (
                                                <div className="text-center md:text-left">
                                                    <h2 className={`text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${company.color.replace('bg-', 'from-').replace('to-', 'to-')} mb-2`}>
                                                        {company.name}
                                                    </h2>
                                                    <p className="text-gray-400 font-serif italic text-lg">{company.name.toUpperCase()}</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="w-full md:w-1/2">
                                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                                        {company.tags.map((tag, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-base-dark/5 text-base-dark text-xs font-bold rounded-full border border-base-dark/10">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h2 className="text-2xl md:text-4xl font-bold text-base-dark mb-2">
                                        {company.name}
                                    </h2>
                                    <p className="text-xs md:text-sm text-gray-500 mb-6 md:mb-8 font-medium">{company.ruby}</p>

                                    <div className="bg-white p-4 md:p-6 rounded-2xl border-l-4 border-accent shadow-sm mb-6 md:mb-8">
                                        <p className="text-gray-700 leading-relaxed text-base md:text-lg italic">
                                            {company.description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
                                        <div className="flex items-start">
                                            <div className="mt-1 mr-3 p-2 bg-gray-100 rounded-lg text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400 font-bold uppercase tracking-wide">LOCATION</p>
                                                <p className="font-bold text-gray-700 text-sm md:text-base">{company.address}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="mt-1 mr-3 p-2 bg-gray-100 rounded-lg text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-400 font-bold uppercase tracking-wide">REPRESENTATIVE</p>
                                                <p className="font-bold text-gray-700 text-sm md:text-base">{company.representative}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <a href={company.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 bg-base-dark text-white text-base md:text-lg font-bold rounded-full hover:bg-primary transition hover:-translate-y-1 shadow-lg hover:shadow-xl w-full md:w-auto overflow-hidden relative group">
                                        <span className="relative z-10">企業サイトを見る</span>
                                        <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-primary"></div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* CTA */}
            <div className="bg-gray-100 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl p-6 md:p-16 text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-accent"></div>

                        <h2 className="text-2xl md:text-4xl font-bold text-base-dark mb-6">
                            あなたも「熱い企業」の一員になりませんか？
                        </h2>
                        <p className="text-gray-600 mb-8 md:mb-10 text-sm md:text-lg leading-relaxed">
                            全国高校起業部では、高校生の挑戦を応援してくださる<br className="hidden md:block" />
                            スポンサー・パートナー企業様を随時募集しています。<br className="md:hidden" />
                            未来のリーダーたちと、共に新しい価値を創造しましょう。
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact" className="px-8 py-4 bg-accent text-base-dark font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition text-lg">
                                お問い合わせ・資料請求
                            </Link>
                            <Link to="/for-company" className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-600 font-bold rounded-full hover:border-gray-400 hover:text-base-dark transition text-lg">
                                企業の皆様へ
                            </Link>
                        </div>
                    </div>

                    <div className="text-center mt-16 text-gray-400">
                        <Link to="/" className="hover:text-primary transition flex items-center justify-center font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            トップページへ戻る
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersPage;
