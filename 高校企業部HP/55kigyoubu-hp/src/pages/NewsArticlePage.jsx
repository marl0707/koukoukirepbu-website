import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { newsArticles } from '../data/newsData';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
};

/* ============================
   各記事の本文コンテンツ
   ============================ */
const articleContents = {
    /* --- クラウドファンディングエントリー --- */
    'crowdfunding-entry': () => (
        <>
            <p className="text-gray-600 leading-loose mb-6">
                一般社団法人全国高校起業部（所在地：兵庫県西宮市、代表理事：山根 知典）は、全国の高校生に実践的な起業体験を届ける活動のさらなる拡大を目指し、クラウドファンディングプラットフォーム「CAMPFIRE」へのエントリーが正式に決定したことをお知らせいたします。
            </p>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">プロジェクト概要</h3>
            <p className="text-gray-600 leading-loose mb-6">
                「高校生が地域企業を本気で応援する実践型ビジネス起業部を全国100校へ広げたい！」をテーマに、全国の高校に起業部を設立し、日本全国の高校生が「起業」という選択肢を持てる社会を目指してまいります。
            </p>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">資金使途</h3>
            <p className="text-gray-600 leading-loose mb-4">
                クラウドファンディングで集まった資金は、以下の用途に活用させていただきます。
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-loose mb-6 space-y-2 pl-4">
                <li>全国の高校への導入支援費用（設立ノウハウの提供と伴走支援）</li>
                <li>100のスキルカリキュラムの高度化（AIツール活用法やマーケティング教材のアップデート）</li>
                <li>「エールシステム」プラットフォームの開発（オンライン基盤の構築）</li>
            </ul>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">クラウドファンディング概要</h3>
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <table className="w-full text-sm">
                    <tbody>
                        <tr className="border-b border-gray-200">
                            <td className="py-3 font-bold text-base-dark w-32">プラットフォーム</td>
                            <td className="py-3 text-gray-600">CAMPFIRE（キャンプファイヤー）</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="py-3 font-bold text-base-dark">プロジェクト名</td>
                            <td className="py-3 text-gray-600">高校生が地域企業を本気で応援する実践型ビジネス起業部を全国100校へ広げたい！</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="py-3 font-bold text-base-dark">開始時期</td>
                            <td className="py-3 text-gray-600">準備中（決定次第ご案内いたします）</td>
                        </tr>
                        <tr>
                            <td className="py-3 font-bold text-base-dark">主催</td>
                            <td className="py-3 text-gray-600">一般社団法人 全国高校起業部</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">リターン一覧</h3>
            <div className="space-y-3 mb-6">
                {[
                    { price: '3,000円', name: '応援メッセージ動画', desc: '代表・山根よりお礼のメッセージ動画（約2分）' },
                    { price: '10,000円', name: '個人スポンサー', desc: 'HPにお名前掲載（1年間）＋オリジナルTシャツ' },
                    { price: '30,000円', name: '熱い企業名鑑（WEB版）', desc: '「地域の熱い企業名鑑」にプロフィール掲載（1年間）' },
                    { price: '30,000円', name: '学校向け特別講演', desc: '代表・山根による60〜90分の特別講演' },
                    { price: '50,000円', name: '企業・コミュニティ向け講演', desc: '代表・山根による60〜90分の特別出張講演' },
                    { price: '50,000円', name: '起業部導入校開拓', desc: '応援する地域で起業部導入校を一緒に開拓' },
                    { price: '100,000円', name: 'オフィシャルスポンサー', desc: 'HPに企業名＋ロゴ掲載＋スポンサーポロシャツ5枚（残20）' },
                    { price: '300,000円', name: 'ゴールドスポンサー', desc: '交流イベント講和＋ZOOM背景ロゴ＋ポロシャツ5枚（残20）' },
                    { price: '300,000円', name: 'PRアニメ動画制作', desc: '企業PR用90秒アニメーション動画の制作（残5）' },
                    { price: '300,000円', name: '多角化ビジネスモデル構築', desc: '2ヶ月間（全4回×120分）のビジネスモデル構築支援（残5）' },
                    { price: '1,000,000円', name: 'ビジョン共創スポンサー', desc: '最上位スポンサープラン（残3）' },
                ].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-4 flex items-start gap-4">
                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex-shrink-0 mt-1">{item.price}</span>
                        <div>
                            <h4 className="font-bold text-base-dark text-sm">{item.name}</h4>
                            <p className="text-gray-500 text-xs mt-1">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">皆様へのお願い</h3>
            <p className="text-gray-600 leading-loose mb-6">
                クラウドファンディングの開始時期・詳細につきましては、決定次第、当ウェブサイトおよび公式SNSにてご案内いたします。高校生たちの未来を応援していただける皆様のご支援を、心よりお待ちしております。
            </p>

            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 my-8">
                <p className="text-primary font-bold mb-2">📢 最新情報の受け取り方</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                    公式Instagramをフォローいただくと、クラウドファンディング開始のお知らせをいち早くお届けします。
                </p>
            </div>
        </>
    ),

    /* --- BeLIVE提携・濵本智博理事就任 --- */
    'believe-partnership': () => (
        <>
            <p className="text-gray-600 leading-loose mb-6">
                一般社団法人全国高校起業部（所在地：兵庫県西宮市、代表理事：山根 知典）は、株式会社BeLIVE（所在地：長崎県佐世保市、代表取締役：濵本 智博）との間で提携契約を締結いたしましたことをお知らせいたします。
            </p>
            <p className="text-gray-600 leading-loose mb-6">
                あわせて、株式会社BeLIVE代表取締役の濵本智博氏が、一般社団法人全国高校起業部の理事に就任いたしましたことをご報告申し上げます。
            </p>

            {/* 濵本智博氏のプロフィール */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-40 h-48 flex-shrink-0 rounded-xl overflow-hidden shadow-lg mx-auto md:mx-0">
                    <img src="/images/hamamoto-tomohiro.jpg" alt="濵本智博" className="w-full h-full object-cover object-top" />
                </div>
                <div className="flex-1">
                    <p className="text-sm text-primary font-bold mb-1">一般社団法人全国高校起業部 理事</p>
                    <h3 className="text-2xl font-bold text-base-dark mb-3">濵本 智博<span className="text-sm text-gray-400 font-normal ml-2">Tomohiro Hamamoto</span></h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        株式会社BeLIVE 代表取締役。長崎県佐世保市出身。関西学院大学文学部卒業後、神戸の税理士法人に就職。リーマンショック後の経営再建に携わる中で、将来に目を向けた経営計画策定の重要性を痛感し、2021年に株式会社BeLIVEを設立。現在は子ども向けビジネススクール「CEOキッズアカデミー」運営と経営理念策定・浸透コンサルティングの二本柱で事業を展開。「相手の可能性を本人以上に信じる」をモットーに、次世代の起業家育成に注力している。
                    </p>
                </div>
            </div>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">提携の背景</h3>
            <p className="text-gray-600 leading-loose mb-6">
                株式会社BeLIVEは、長崎県佐世保市を拠点に「CEOキッズアカデミー」を運営し、小学生から高校生を対象としたビジネス教育プログラムを提供しています。全国高校起業部が掲げる「座学1割・実践9割」の教育理念と、BeLIVEが実践する「モノを売る経験を通じた価値創造の学び」は、高い親和性を持っています。
            </p>
            <p className="text-gray-600 leading-loose mb-6">
                濵本代表は「子どもたちには面白い大人にたくさん会ってほしい」という信念のもと、地域企業と学生をつなぐプラットフォームの構築に取り組んでおり、全国高校起業部の「エールシステム」との連携により、全国100校への展開を加速させてまいります。
            </p>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">提携の概要</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                    { icon: '📚', title: 'ビジネス教育カリキュラムの共同開発', desc: 'CEOキッズアカデミーのノウハウと全国高校起業部の実践型教育を融合' },
                    { icon: '🏫', title: '高校への起業部設立支援', desc: '長崎・九州エリアを中心に、新規導入校の開拓と伴走支援を共同で推進' },
                    { icon: '🤝', title: '経営コンサルティングの知見提供', desc: '地域企業との連携強化に向けた、経営理念策定・浸透のノウハウ共有' },
                    { icon: '🌐', title: '全国ネットワークの拡大', desc: '両社のネットワークを活用した、スポンサー企業・メンターの開拓' },
                ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-base-dark mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">濵本智博理事 就任コメント</h3>
            <blockquote className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 my-6 italic">
                <p className="text-gray-700 leading-relaxed mb-4">
                    「子どもたちには面白い大人にたくさん会ってほしい――これは私がずっと大切にしてきた想いです。社会に出るまで、学校や家庭、塾の先生といった限られた大人像しか知り得ない子どもたち。特に地方では、働く会社のイメージすら持てない子もいます。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    全国高校起業部は、まさにその課題を解決する仕組みだと確信しました。地域の経営者の熱い想いに触れ、リアルなビジネスを体験する。高校生が地域企業を応援しながら自らも成長していく。この循環こそが、日本の教育と地域経済の未来を変える力になると信じています。
                </p>
                <p className="text-gray-700 leading-relaxed">
                    佐世保から全国へ。BeLIVEで培った教育ノウハウと経営支援の経験を活かし、全国100校への展開を全力で推進してまいります。」
                </p>
                <footer className="text-right mt-4 text-sm text-gray-500 not-italic">
                    ― 濵本 智博（株式会社BeLIVE 代表取締役 / 全国高校起業部 理事）
                </footer>
            </blockquote>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">株式会社BeLIVEについて</h3>
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <table className="w-full text-sm">
                    <tbody>
                        <tr className="border-b border-gray-200">
                            <td className="py-3 font-bold text-base-dark w-32">会社名</td>
                            <td className="py-3 text-gray-600">株式会社BeLIVE（ビライブ）</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="py-3 font-bold text-base-dark">所在地</td>
                            <td className="py-3 text-gray-600">長崎県佐世保市</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="py-3 font-bold text-base-dark">代表者</td>
                            <td className="py-3 text-gray-600">代表取締役 濵本 智博</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="py-3 font-bold text-base-dark">設立</td>
                            <td className="py-3 text-gray-600">2021年</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="py-3 font-bold text-base-dark">事業内容</td>
                            <td className="py-3 text-gray-600">子ども向けビジネススクール運営（CEOキッズアカデミー）、経営理念策定・浸透コンサルティング</td>
                        </tr>
                        <tr>
                            <td className="py-3 font-bold text-base-dark">ウェブサイト</td>
                            <td className="py-3 text-gray-600">
                                <a href="https://www.sasebo.hunibas.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                    https://www.sasebo.hunibas.com/
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">今後の展望</h3>
            <p className="text-gray-600 leading-loose mb-6">
                今回の提携により、全国高校起業部は九州エリアへの本格展開を加速させます。BeLIVEが持つ教育プログラム開発のノウハウと地域企業ネットワーク、そして全国高校起業部の実践型教育フレームワークを融合させることで、より多くの高校生に「社会と出会い、自分の可能性を爆発させる」機会を届けてまいります。
            </p>

            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 my-8">
                <p className="text-base-dark font-bold mb-2">📞 本件に関するお問い合わせ</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                    一般社団法人全国高校起業部 事務局<br />
                    ※ 取材のお申し込みもお問い合わせフォームよりお願いいたします。
                </p>
            </div>
        </>
    ),

    /* --- 新規加盟校の募集 --- */
    'new-school-recruitment': () => (
        <>
            <p className="text-gray-600 leading-loose mb-6">
                一般社団法人全国高校起業部は、2026年度前期の新規加盟校の募集を正式に開始いたしました。全国の高等学校からのご参加をお待ちしております。
            </p>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">加盟校募集の背景</h3>
            <p className="text-gray-600 leading-loose mb-6">
                2025年度の活動を通じて、全国高校起業部の取り組みは多くの教育関係者から高い評価をいただいてまいりました。「探究学習」や「キャリア教育」の一環として起業部活動を導入したいという声が年々増加しており、このたび2026年度前期の新規加盟校を広く募集することとなりました。
            </p>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">加盟校になるメリット</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                    { icon: '📖', title: 'オリジナル教材の提供', desc: '起業部専用のカリキュラム「100のスキル×4つの武器」を無償提供' },
                    { icon: '👥', title: 'メンターの派遣', desc: '経験豊富な社会人メンターが生徒たちの活動を伴走支援' },
                    { icon: '🏆', title: '全国サミットへの参加', desc: '年に一度の全国大会で他校の生徒たちと切磋琢磨' },
                    { icon: '🤝', title: 'ネットワークの共有', desc: '全国の加盟校・支援企業とのネットワークを活用可能' },
                ].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-5">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-base-dark mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">募集要項</h3>
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <table className="w-full text-sm">
                    <tbody>
                        <tr className="border-b border-gray-200">
                            <td className="py-3 font-bold text-base-dark w-32">対象</td>
                            <td className="py-3 text-gray-600">全国の高等学校（公立・私立問わず）</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="py-3 font-bold text-base-dark">募集定員</td>
                            <td className="py-3 text-gray-600">10校（先着順ではなく選考制）</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="py-3 font-bold text-base-dark">応募期間</td>
                            <td className="py-3 text-gray-600">2026年2月10日〜2026年3月31日</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="py-3 font-bold text-base-dark">選考結果</td>
                            <td className="py-3 text-gray-600">2026年4月中旬ご連絡予定</td>
                        </tr>
                        <tr>
                            <td className="py-3 font-bold text-base-dark">加盟費用</td>
                            <td className="py-3 text-gray-600">初年度無料（助成金・スポンサー支援により運営）</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">応募の流れ</h3>
            <div className="space-y-4 mb-6">
                {[
                    { step: '01', text: 'お問い合わせフォームよりエントリー' },
                    { step: '02', text: '事務局よりオンライン説明会のご案内' },
                    { step: '03', text: '学校訪問・現地ヒアリング' },
                    { step: '04', text: '加盟校決定・キックオフ' },
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-primary/5 rounded-xl p-4">
                        <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{item.step}</span>
                        <p className="text-gray-700 font-medium">{item.text}</p>
                    </div>
                ))}
            </div>

            <div className="bg-secondary/5 border-l-4 border-secondary rounded-r-xl p-6 my-8">
                <p className="text-secondary font-bold mb-2">🏫 学校関係者の皆様へ</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                    まずはお気軽にお問い合わせください。オンラインでの個別相談会も随時受け付けております。起業部の導入にご興味のある先生方のご連絡をお待ちしております。
                </p>
            </div>
        </>
    ),

    /* --- ロンショールパートナーシップ --- */
    'lonshore-partnership': () => (
        <>
            <p className="text-gray-600 leading-loose mb-6">
                一般社団法人全国高校起業部（所在地：兵庫県西宮市、代表理事：山根 知典）は、ロンショール合同会社（所在地：大阪府大阪市、代表社員：瀬島和樹）との間で提携契約を締結いたしましたことをお知らせいたします。
            </p>
            <p className="text-gray-600 leading-loose mb-6">
                あわせて、ロンショール合同会社代表の瀬島和樹氏が、一般社団法人全国高校起業部の理事に就任いたしましたことをご報告申し上げます。
            </p>

            {/* 瀬島和樹氏のプロフィール */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-8 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-40 h-48 flex-shrink-0 rounded-xl overflow-hidden shadow-lg mx-auto md:mx-0">
                    <img src="/images/sejima-kazuki.jpg" alt="瀬島和樹" className="w-full h-full object-cover object-top" />
                </div>
                <div className="flex-1">
                    <p className="text-sm text-primary font-bold mb-1">一般社団法人全国高校起業部 理事</p>
                    <h3 className="text-2xl font-bold text-base-dark mb-3">瀬島 和樹<span className="text-sm text-gray-400 font-normal ml-2">Kazuki Sejima</span></h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        ロンショール合同会社 代表社員。AI活用ビジネス、ヘルスケア事業、不動産事業など多岐にわたる事業を展開。デジタルマーケティングとコンテンツ制作の専門家として、社会課題解決に取り組む。全国高校起業部の理念に共感し、理事として次世代の起業家育成に尽力する。
                    </p>
                </div>
            </div>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">提携の概要</h3>
            <p className="text-gray-600 leading-loose mb-6">
                本提携により、ロンショール合同会社は全国高校起業部の公式パートナーとして、以下の領域において包括的な支援を行います。
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                    { icon: '🎨', title: 'コンテンツ制作', desc: '活動報告、教材コンテンツ、広報物のデザイン・制作を担当' },
                    { icon: '💻', title: 'ウェブサイト制作・運営', desc: '公式ウェブサイトの設計・開発・保守運用を一括で実施' },
                    { icon: '📱', title: 'デジタルマーケティング', desc: 'SNS運用、SEO施策、オンライン広告の戦略立案と実行' },
                    { icon: '🚀', title: 'DX推進支援', desc: '活動管理システム、オンライン教育基盤の技術支援' },
                ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <h4 className="font-bold text-base-dark mb-1">{item.title}</h4>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">瀬島和樹理事 就任コメント</h3>
            <blockquote className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 my-6 italic">
                <p className="text-gray-700 leading-relaxed mb-4">
                    「高校生が自ら考え、行動し、社会に価値を届ける――全国高校起業部の理念に深く共感し、このたび理事として参画させていただくことになりました。
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                    私自身、事業を通じて多くの失敗と学びを経験してきました。その経験を高校生たちに還元し、彼らが持つ無限の可能性を最大限に引き出すお手伝いをしたいと考えています。
                </p>
                <p className="text-gray-700 leading-relaxed">
                    ロンショール合同会社としても、コンテンツ制作やウェブ制作を通じて、全国高校起業部の活動を全力でサポートしてまいります。日本の未来を担う高校生たちと共に、新しい時代を切り拓いていきたいと思います。」
                </p>
                <footer className="text-right mt-4 text-sm text-gray-500 not-italic">
                    ― 瀬島 和樹（ロンショール合同会社 代表 / 全国高校起業部 理事）
                </footer>
            </blockquote>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">ロンショール合同会社について</h3>
            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <table className="w-full text-sm">
                    <tbody>
                        <tr className="border-b border-gray-200">
                            <td className="py-3 font-bold text-base-dark w-32">会社名</td>
                            <td className="py-3 text-gray-600">ロンショール合同会社</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="py-3 font-bold text-base-dark">所在地</td>
                            <td className="py-3 text-gray-600">大阪府大阪市</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                            <td className="py-3 font-bold text-base-dark">代表者</td>
                            <td className="py-3 text-gray-600">代表社員 瀬島 和樹</td>
                        </tr>
                        <tr>
                            <td className="py-3 font-bold text-base-dark">事業内容</td>
                            <td className="py-3 text-gray-600">AI活用ビジネス、ヘルスケア事業、デジタルマーケティング、コンテンツ制作、ウェブ開発</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 className="text-xl font-bold text-base-dark mb-4 mt-10">今後の展望</h3>
            <p className="text-gray-600 leading-loose mb-6">
                今回の提携により、全国高校起業部は情報発信力の強化とデジタル基盤の整備を加速させてまいります。ロンショール合同会社の持つデジタル技術と、全国高校起業部の教育ノウハウを融合させることで、より多くの高校生に質の高い起業体験を届けてまいります。
            </p>

            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 my-8">
                <p className="text-base-dark font-bold mb-2">📞 本件に関するお問い合わせ</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                    一般社団法人全国高校起業部 事務局<br />
                    ※ 取材のお申し込みもお問い合わせフォームよりお願いいたします。
                </p>
            </div>
        </>
    ),
};

/* ============================
   記事詳細ページ本体
   ============================ */
const NewsArticlePage = () => {
    const { articleId } = useParams();
    const article = newsArticles.find(a => a.id === articleId);

    if (!article) {
        return (
            <div className="bg-base font-sans pt-32 pb-20 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-bold text-base-dark mb-4">記事が見つかりません</h1>
                    <Link to="/news" className="text-primary hover:underline">お知らせ一覧に戻る</Link>
                </div>
            </div>
        );
    }

    const ArticleContent = articleContents[articleId];

    return (
        <div className="bg-base font-sans">
            {/* ヘッダーイメージ */}
            <section className="relative pt-20">
                <div className="w-full h-64 md:h-80 overflow-hidden">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
            </section>

            {/* 記事本文 */}
            <section className="py-12 bg-base">
                <div className="container mx-auto px-4 max-w-3xl">
                    <motion.div {...fadeInUp}>
                        {/* メタ情報 */}
                        <div className="flex items-center gap-3 mb-4">
                            <span className={`${article.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>{article.category}</span>
                            <span className="text-gray-400 text-sm font-bold">{article.date}</span>
                        </div>

                        {/* タイトル */}
                        <h1 className="text-2xl md:text-3xl font-bold text-base-dark leading-snug mb-8">{article.title}</h1>

                        {/* 区切り線 */}
                        <div className="w-full h-px bg-gray-200 mb-8"></div>

                        {/* コンテンツ */}
                        {ArticleContent && <ArticleContent />}

                        {/* 区切り線 */}
                        <div className="w-full h-px bg-gray-200 my-8"></div>

                        {/* 戻るリンク */}
                        <div className="flex justify-between items-center">
                            <Link to="/news" className="text-primary font-bold hover:underline flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                お知らせ一覧に戻る
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default NewsArticlePage;
