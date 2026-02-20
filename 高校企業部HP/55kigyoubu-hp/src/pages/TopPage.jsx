import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { newsArticles } from "../data/newsData";
import { partnerCompanies } from "../data/partnerData";

// ダミー画像URL (Unsplash)
const IMAGES = [
  "/images/hero/hero_slide_1.png", // 学生たちの議論
  "/images/hero/hero_slide_2.png", // チームワーク
  "/images/hero/hero_slide_3.png", // プレゼン
];

const TopPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // スライドショーのオートプレイ
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-base font-sans pb-20">

      {/* 1. Main Visual (Slider & Target Links) */}
      <section className="relative h-screen min-h-[600px] md:h-[700px] w-full overflow-hidden bg-gray-900 mt-16 md:mt-20"> {/* Header height adjustment */}
        {/* Slider Images */}
        <AnimatePresenceSlide currentSlide={currentSlide} images={IMAGES} />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-4 z-10 pb-20 md:pb-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-3xl md:text-6xl font-bold text-white tracking-widest leading-tight drop-shadow-lg mb-4 md:mb-6"
          >
            君は、<br className="md:hidden" />すごい経営者になる。
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-white/90 text-sm md:text-xl font-bold tracking-wider"
          >
            高校生 × 地域 × ビジネス = 無限の可能性
          </motion.p>
        </div>

        {/* Target Links (Sliding Cards over MV) - Mimicking After School NPO */}
        <div className="absolute bottom-0 left-0 right-0 z-20 transform md:translate-y-0 md:bottom-10 container mx-auto px-4 pb-4 md:pb-0">
          <div className="grid grid-cols-3 gap-2 md:gap-4 shadow-xl">

            {/* For School */}
            <Link to="/for-school" className="group relative bg-secondary hover:bg-secondary-dark transition rounded-xl overflow-hidden h-24 md:h-40 flex items-center justify-center p-2 md:p-4 text-white">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="relative z-10 text-center">
                <span className="block text-[10px] md:text-sm font-bold opacity-80 mb-1">For School</span>
                <h3 className="text-sm md:text-2xl font-bold flex flex-col md:flex-row items-center justify-center leading-tight">
                  <span>学校関係者</span><span>の方へ</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block h-6 w-6 ml-2 transform group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </h3>
              </div>
            </Link>

            {/* For Mentor */}
            <Link to="/for-mentor" className="group relative bg-primary hover:bg-primary-dark transition rounded-xl overflow-hidden h-24 md:h-40 flex items-center justify-center p-2 md:p-4 text-white">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="relative z-10 text-center">
                <span className="block text-[10px] md:text-sm font-bold opacity-80 mb-1">For Mentor</span>
                <h3 className="text-sm md:text-2xl font-bold flex flex-col md:flex-row items-center justify-center leading-tight">
                  <span>メンター</span><span>の方へ</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block h-6 w-6 ml-2 transform group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </h3>
              </div>
            </Link>

            {/* For Company */}
            <Link to="/for-company" className="group relative bg-accent hover:opacity-90 transition rounded-xl overflow-hidden h-24 md:h-40 flex items-center justify-center p-2 md:p-4 text-base-dark">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <div className="relative z-10 text-center">
                <span className="block text-[10px] md:text-sm font-bold opacity-60 mb-1">For Company</span>
                <h3 className="text-sm md:text-2xl font-bold flex flex-col md:flex-row items-center justify-center leading-tight">
                  <span>企業の</span><span>皆様へ</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:block h-6 w-6 ml-2 transform group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </h3>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* 2. News Section (Pick up!) */}
      <section className="py-16 md:py-24 bg-white container mx-auto px-4 mt-8 md:mt-0">
        <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 flex flex-col items-center">
          <span className="text-primary text-sm tracking-widest font-bold mb-2">NEWS & TOPICS</span>
          <span className="text-base-dark text-2xl md:text-4xl">最新のお知らせ</span>
          <span className="block w-12 h-1 bg-accent mt-4 rounded-full"></span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {newsArticles.map((article, i) => (
            <Link to={`/news/${article.id}`} key={article.id} className="group cursor-pointer block">
              <article>
                <div className="overflow-hidden rounded-2xl mb-4 shadow-sm relative">
                  <img src={article.image} alt={article.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500" />
                  <span className={`absolute top-4 left-4 ${article.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>{article.category}</span>
                </div>
                <div className="px-2">
                  <p className="text-gray-400 text-sm font-bold mb-2">{article.date}</p>
                  <h3 className="text-base md:text-lg font-bold text-base-dark leading-snug group-hover:text-primary transition line-clamp-2">
                    {article.title}
                  </h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8 md:mt-12">
          <Link to="/news" className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition">
            お知らせ一覧を見る
          </Link>
        </div>
      </section>

      {/* 3. About & Gateway (What we do) */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        {/* Decorative background shape */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 md:mb-16 flex flex-col items-center">
            <span className="text-secondary text-sm tracking-widest font-bold mb-2">WHAT WE DO</span>
            <span className="text-base-dark text-2xl md:text-4xl whitespace-nowrap md:whitespace-normal">全国高校起業部とは？</span>
            <span className="block w-12 h-1 bg-primary mt-4 rounded-full"></span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl mx-auto w-full">
            {/* Image/Video Area */}
            <div className="w-full md:w-1/2 flex-shrink-0 px-4 md:px-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform md:rotate-[-2deg] hover:rotate-0 transition duration-500">
                <img src="/images/activities/learning_in_society.png" alt="About" className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:p-8">
                  <p className="text-white font-bold text-base md:text-lg">「教室」を飛び出し、「社会」で学ぶ。</p>
                </div>
              </div>
            </div>

            {/* Text Area */}
            <div className="w-full md:w-1/2 space-y-6 flex-shrink-0 px-2 md:px-0">
              <h3 className="text-xl md:text-3xl font-bold text-base-dark leading-relaxed">
                座学は1割、実践が9割。<br className="hidden md:inline" />
                高校生がビジネスで<br className="hidden md:inline" />
                <span className="text-primary bg-primary/10 px-2 rounded-lg inline-block my-1 md:my-0">社会を変える</span>部活動。
              </h3>
              <p className="text-gray-600 leading-loose text-sm md:text-base text-justify">
                全国高校起業部は、教科書の上での勉強だけでなく、実際に地域社会に出てビジネスを立ち上げ、運営する「実践型」の部活動です。
                失敗を恐れずに挑戦し、自らの力で未来を切り拓く力（アントレプレナーシップ）を育みます。
              </p>
              <div className="pt-4 text-center md:text-left">
                <Link to="/about" className="inline-block px-8 py-4 rounded-full bg-base-dark text-white font-bold hover:bg-gray-800 transition shadow-lg">
                  詳しく見る
                </Link>
              </div>
            </div>
          </div>

          {/* Gateway Links (Numbers List) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-20 max-w-6xl mx-auto">
            <Link to="/for-school" className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col items-center text-center border-t-8 border-secondary">
              <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-md">1</div>
              <h4 className="font-bold text-lg mb-2">学校関係者の方</h4>
              <p className="text-sm text-gray-500">起業部の導入サポート・教材提供</p>
            </Link>
            <Link to="/for-mentor" className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col items-center text-center border-t-8 border-primary">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-md">2</div>
              <h4 className="font-bold text-lg mb-2">メンターの方</h4>
              <p className="text-sm text-gray-500">生徒たちの伴走支援・指導</p>
            </Link>
            <Link to="/for-company" className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col items-center text-center border-t-8 border-accent">
              <div className="w-12 h-12 bg-accent text-base-dark rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-md">3</div>
              <h4 className="font-bold text-lg mb-2">企業・サポーターの方</h4>
              <p className="text-sm text-gray-500">スポンサー支援・協業の提案</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Supporters */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-center mb-8 md:mb-12 flex flex-col items-center">
            <span className="text-gray-400 text-sm tracking-widest font-bold mb-2">SUPPORTERS</span>
            <span className="text-base-dark text-2xl md:text-4xl">応援してくださる皆様</span>
            <span className="block w-12 h-1 bg-gray-300 mt-4 rounded-full"></span>
          </h2>

          <p className="text-gray-500 mb-8 md:mb-12 text-sm md:text-base">多くの企業、専門家の皆様に支えられています。</p>

          {/* パートナー企業ロゴ (テキストベース) */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8 md:mb-12">
            {partnerCompanies.map((company) => (
              <Link to="/partners" key={company.id} className="group relative block w-32 md:w-40 hover:opacity-70 transition duration-300">
                <div className="flex items-center justify-center w-full">
                  {company.logo ? (
                    <img src={company.logo} alt={company.name} className="w-full h-auto object-contain filter grayscale group-hover:grayscale-0 transition" />
                  ) : (
                    <span className="font-bold text-gray-500 group-hover:text-base-dark transition text-sm md:text-base text-center leading-tight break-words w-full">
                      {company.name}
                    </span>
                  )}
                </div>
              </Link>
            ))}

            {/* 募集枠 (ダミー) - テキストのみシンプルに */}
            <div className="text-gray-300 text-sm font-bold tracking-widest uppercase">Sponsor</div>
            <div className="text-gray-300 text-sm font-bold tracking-widest uppercase">Partner</div>
          </div>

          <div className="mt-4 md:mt-8">
            <Link to="/partners" className="inline-block px-8 py-3 rounded-full border-2 border-secondary text-secondary font-bold hover:bg-secondary hover:text-white transition text-sm md:text-base">
              地域の熱い企業名鑑を見る
            </Link>
          </div>
        </div>
      </section>
      {/* 5. YouTube イメージPV */}
      <section className="py-24 bg-base-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 flex flex-col items-center">
            <span className="text-accent text-sm tracking-widest font-bold mb-2">MOVIE</span>
            <span className="text-white text-4xl">イメージPV</span>
            <span className="block w-12 h-1 bg-accent mt-4 rounded-full"></span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/kYnu-EjiF-k"
                title="全国高校起業部 イメージPV"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <p className="text-center text-white/60 text-sm mt-6">「君は、すごい経営者になる。」— 全国高校起業部の想いを込めたイメージPVです。</p>
          </div>
        </div>
      </section>

    </div>
  );
};

// Slide Component for AnimatePresence
const AnimatePresenceSlide = ({ currentSlide, images }) => {
  return (
    <div className="absolute inset-0">
      {images.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1.0 }}
          className="absolute inset-0"
          style={{ zIndex: index === currentSlide ? 1 : 0 }}
        >
          <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
        </motion.div>
      ))}
    </div>
  );
};

export default TopPage;
