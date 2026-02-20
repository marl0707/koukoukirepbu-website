import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    // メニュー閉じ（ページ遷移時）
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    // スクロール検知
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white shadow-sm'}`}>
            {/* メインヘッダー */}
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                {/* ロゴ */}
                <Link to="/" className="flex items-center gap-3">
                    <img src="/images/logo.png" alt="全国高校起業部" className="h-10 md:h-12 w-auto max-w-[150px] object-contain" />
                    <span className="font-bold text-base-dark text-lg md:text-xl hidden md:block whitespace-nowrap">全国高校起業部</span>
                </Link>

                {/* デスクトップ グローバルナビ */}
                <nav className="hidden lg:flex items-center space-x-8">
                    <Link to="/about" className="font-bold text-base-dark hover:text-primary transition relative group">
                        私たちの活動
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to="/news" className="font-bold text-base-dark hover:text-primary transition relative group">
                        ニュース
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                    <Link to="/contact" className="font-bold text-base-dark hover:text-primary transition relative group">
                        お問い合わせ
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                </nav>

                {/* モバイルメニューボタン */}
                <button
                    className="lg:hidden text-base-dark p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* サブヘッダー（デスクトップ: CVボタン） */}
            <div className="hidden lg:block border-t border-gray-100 bg-gray-50/50">
                <div className="container mx-auto px-4 py-2 flex justify-end items-center space-x-4">
                    <span className="text-xs font-bold text-gray-500 mr-2">Create the Future with Us.</span>

                    <Link to="/for-company" className="px-4 py-1.5 rounded-full bg-accent text-base-dark font-bold text-sm hover:opacity-80 transition flex items-center shadow-sm">
                        企業の皆様へ
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <Link to="/for-school" className="px-4 py-1.5 rounded-full bg-secondary text-white font-bold text-sm hover:bg-secondary-dark transition flex items-center shadow-sm">
                        学校の皆様へ
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </Link>
                    <Link to="/for-mentor" className="px-4 py-1.5 rounded-full border border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition flex items-center">
                        メンターの皆様へ
                    </Link>
                </div>
            </div>

            {/* モバイルメニュー ドロップダウン */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white absolute top-full left-0 right-0 shadow-lg border-t border-gray-100 h-screen overflow-y-auto pb-20">
                    <div className="p-4 flex flex-col space-y-4">
                        <Link to="/about" onClick={() => setIsMenuOpen(false)} className="font-bold text-base-dark py-3 border-b border-gray-100 flex justify-between items-center">
                            私たちの活動
                            <span className="text-gray-300">›</span>
                        </Link>
                        <Link to="/news" onClick={() => setIsMenuOpen(false)} className="font-bold text-base-dark py-3 border-b border-gray-100 flex justify-between items-center">
                            ニュース
                            <span className="text-gray-300">›</span>
                        </Link>
                        <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="font-bold text-base-dark py-3 border-b border-gray-100 flex justify-between items-center">
                            お問い合わせ
                            <span className="text-gray-300">›</span>
                        </Link>

                        <div className="pt-4 space-y-3">
                            <p className="text-xs font-bold text-gray-400">TARGET</p>
                            <Link to="/for-school" onClick={() => setIsMenuOpen(false)} className="block w-full py-3 rounded-lg bg-secondary text-white font-bold text-center shadow-sm">
                                学校の皆様へ
                            </Link>
                            <Link to="/for-mentor" onClick={() => setIsMenuOpen(false)} className="block w-full py-3 rounded-lg bg-primary text-white font-bold text-center shadow-sm">
                                メンターの皆様へ
                            </Link>
                            <Link to="/for-company" onClick={() => setIsMenuOpen(false)} className="block w-full py-3 rounded-lg bg-accent text-base-dark font-bold text-center shadow-sm">
                                企業の皆様へ
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
