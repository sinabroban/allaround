import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">세심귀뜸봉 사업단</h3>
            <p className="text-sm text-slate-400 mb-4">
              지역별 맞춤 설치기준과 체계적인 대리점 확충을 통해<br/>
              국민 건강 증진에 기여하고 있습니다.
            </p>
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} Sesim Gwitteumbong. All rights reserved.
            </p>
          </div>
          <div className="md:text-right">
            <h4 className="text-white font-medium mb-4">가맹 및 총판 문의</h4>
            <p className="text-2xl font-bold text-white mb-2">1588-0000</p>
            <p className="text-sm text-slate-400">
              일정 요건을 갖춘 대리점은 지역별 총판으로<br/>승격 운영될 예정입니다.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;