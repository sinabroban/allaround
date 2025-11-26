import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  ExternalLink, 
  Award, 
  Menu, 
  X, 
  ChevronRight, 
  Building2, 
  TrendingUp, 
  Globe 
} from 'lucide-react';

// --- Types & Interfaces ---

export enum Region {
  DIRECT = '본사직영',
  DAEJEON = '대전권',
  NATIONWIDE = '전국권',
}

export interface Branch {
  id: string;
  name: string;
  region: Region;
  address: string;
  phone: string;
  url: string;
  imageUrl: string;
  isDirectManaged: boolean;
  description: string;
}

interface HeroImage {
  url: string;
  location: string;
  caption: string;
}

// --- Data & Constants ---

const HQ_URL = "https://www.sesimhq.com";

const HERO_IMAGES: HeroImage[] = [
  {
    url: "https://images.unsplash.com/photo-1538485399081-7191377e8241?q=80&w=2000&auto=format&fit=crop",
    location: "SEOUL",
    caption: "전국을 잇는 중심"
  },
  {
    url: "https://images.unsplash.com/photo-1569930784237-ea65a2f40a83?q=80&w=2000&auto=format&fit=crop",
    location: "BUSAN",
    caption: "해양 도시의 활력"
  },
  {
    url: "https://images.unsplash.com/photo-1548115184-bc6544d06a58?q=80&w=2000&auto=format&fit=crop",
    location: "JEJU",
    caption: "자연과 함께하는 힐링"
  },
  {
    url: "https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?q=80&w=2000&auto=format&fit=crop",
    location: "GYEONGJU",
    caption: "천년 역사의 숨결"
  },
  {
    url: "https://images.unsplash.com/photo-1629617326884-2598a76e93eb?q=80&w=2000&auto=format&fit=crop",
    location: "DAEJEON",
    caption: "세심귀뜸봉의 심장"
  },
  {
    url: "https://images.unsplash.com/photo-1617502029708-c44d707b2756?q=80&w=2000&auto=format&fit=crop",
    location: "INCHEON",
    caption: "세계로 뻗어나가는 비전"
  }
];

const BRANCH_DATA: Branch[] = [
  {
    id: 'direct-1',
    name: '대전 보문산지점',
    region: Region.DIRECT,
    address: '대전광역시 중구 보문산공원로 123 (대사동)',
    phone: '042-111-2222',
    url: 'https://example.com/bomunsan',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    isDirectManaged: true,
    description: '세심귀뜸봉 사업단의 핵심 거점이자 본사 직영점으로 운영되는 플래그십 센터입니다.'
  },
  {
    id: 'dj-1',
    name: '대전 반석점',
    region: Region.DAEJEON,
    address: '대전광역시 유성구 반석동 456',
    phone: '042-333-4444',
    url: 'https://blog.naver.com/banseok_sesim',
    imageUrl: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800&auto=format&fit=crop',
    isDirectManaged: false,
    description: '유성구 지역 주민들의 건강 라이프스타일을 책임지는 프리미엄 상담 센터입니다.'
  },
  {
    id: 'dj-2',
    name: '대전 가양점',
    region: Region.DAEJEON,
    address: '대전광역시 동구 가양동 789',
    phone: '042-555-6666',
    url: 'https://blog.naver.com/gayang_sesim',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop',
    isDirectManaged: false,
    description: '동구 지역의 거점으로, 편안한 체험존과 전문적인 케어 서비스를 제공합니다.'
  },
  {
    id: 'dj-3',
    name: '대전 괴정점',
    region: Region.DAEJEON,
    address: '대전광역시 서구 괴정동 101',
    phone: '042-777-8888',
    url: 'https://blog.naver.com/goejeong_sesim',
    imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&auto=format&fit=crop',
    isDirectManaged: false,
    description: '서구 중심가에 위치하여 뛰어난 접근성과 프라이빗한 상담 환경을 갖추었습니다.'
  },
  {
    id: 'nat-1',
    name: '대구 북구점',
    region: Region.NATIONWIDE,
    address: '대구광역시 북구 칠곡중앙대로 234',
    phone: '053-123-4567',
    url: 'https://blog.naver.com/daegu_sesim',
    imageUrl: 'https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?q=80&w=800&auto=format&fit=crop',
    isDirectManaged: false,
    description: '대구·경북 지역의 핵심 거점으로, 활발한 지역 커뮤니티 활동을 전개하고 있습니다.'
  },
  {
    id: 'nat-2',
    name: '부산 영도점',
    region: Region.NATIONWIDE,
    address: '부산광역시 영도구 태종로 567',
    phone: '051-987-6543',
    url: 'https://blog.naver.com/busan_sesim',
    imageUrl: 'https://images.unsplash.com/photo-1549144511-30852b392a42?q=80&w=800&auto=format&fit=crop',
    isDirectManaged: false,
    description: '부산의 아름다운 영도에서 힐링과 전문적인 건강 관리를 동시에 경험하세요.'
  },
  {
    id: 'nat-3',
    name: '경기 일산점',
    region: Region.NATIONWIDE,
    address: '경기도 고양시 일산동구 중앙로 890',
    phone: '031-456-7890',
    url: 'https://blog.naver.com/ilsan_sesim',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    isDirectManaged: false,
    description: '수도권 북부의 랜드마크 대리점으로 최신 시설과 쾌적한 환경을 자랑합니다.'
  }
];

// --- Components ---

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold transition-colors ${
              isScrolled ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
            }`}>
              S
            </div>
            <span className={`text-xl font-bold tracking-tight transition-colors ${
              isScrolled ? 'text-slate-900' : 'text-white'
            }`}>
              세심귀뜸봉
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#story" className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>브랜드 스토리</a>
            <a href="#direct" className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>직영점</a>
            <a href="#nationwide" className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>전국 대리점</a>
            <a 
              href={HQ_URL}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                isScrolled 
                  ? 'bg-slate-900 text-white hover:bg-slate-800' 
                  : 'bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              본사 홈페이지
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? 'text-slate-900' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 py-4 px-6 md:hidden shadow-xl animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            <a href="#story" className="text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>브랜드 스토리</a>
            <a href="#direct" className="text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>직영점 안내</a>
            <a href="#nationwide" className="text-slate-600 font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>전국 대리점</a>
            <a href={HQ_URL} className="text-blue-600 font-bold py-2 flex items-center gap-2">
              본사 홈페이지 <ExternalLink className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen min-h-[700px] w-full overflow-hidden bg-slate-900">
      {/* Slides */}
      {HERO_IMAGES.map((img, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Image with subtle zoom animation */}
          <div className={`w-full h-full transform transition-transform duration-[8000ms] ease-out ${
            index === currentSlide ? 'scale-110' : 'scale-100'
          }`}>
             <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-slate-900/90" />
        </div>
      ))}

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4">
        <div className="animate-fade-in-up space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white/90 text-sm font-medium tracking-wide mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            전국 {BRANCH_DATA.length}개 지점 네트워크
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            대한민국 어디서나,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              세심귀뜸봉
            </span>을 만나보세요
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            대전 보문산 직영점을 시작으로, 전국 주요 도시의 거점 대리점을 통해 
            체계적인 건강 솔루션을 제공합니다.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
             <a 
               href="#direct" 
               className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
             >
               직영점 찾기
               <ChevronRight className="w-4 h-4" />
             </a>
             <a 
               href="#nationwide" 
               className="px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-bold hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2"
             >
               가까운 대리점 검색
             </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      
      {/* Location Caption */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:block text-right">
        <p className="text-xs text-white/50 tracking-widest uppercase mb-1">Current Location</p>
        <p className="text-2xl font-serif italic text-white">{HERO_IMAGES[currentSlide].location}</p>
      </div>
    </div>
  );
};

const BranchCard: React.FC<{ branch: Branch }> = ({ branch }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={branch.imageUrl} 
          alt={branch.name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
        {branch.isDirectManaged && (
          <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/10">
            <Award className="w-3 h-3 text-orange-400" />
            HEADQUARTERS
          </div>
        )}
      </div>

      <div className="p-8 flex-1 flex flex-col">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2 flex items-center gap-2">
            {branch.name}
            {branch.isDirectManaged && <Award className="w-5 h-5 text-blue-600" />}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">
            {branch.description}
          </p>
        </div>

        <div className="space-y-4 mb-8 flex-1">
          <div className="flex items-start gap-4 p-3 rounded-xl bg-slate-50 group-hover:bg-blue-50/50 transition-colors">
            <MapPin className="w-5 h-5 mt-0.5 text-blue-600 shrink-0" />
            <span className="text-sm text-slate-700 font-medium">{branch.address}</span>
          </div>
          <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 group-hover:bg-blue-50/50 transition-colors">
            <Phone className="w-5 h-5 text-blue-600 shrink-0" />
            <a href={`tel:${branch.phone}`} className="text-sm text-slate-700 font-medium hover:text-blue-700 hover:underline">
              {branch.phone}
            </a>
          </div>
        </div>

        <a 
          href={branch.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`
            w-full py-4 px-6 rounded-xl text-sm font-bold tracking-wide flex items-center justify-center gap-2 transition-all duration-300
            ${branch.isDirectManaged 
              ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20' 
              : 'bg-white border-2 border-slate-100 text-slate-600 hover:border-blue-200 hover:text-blue-600'}
          `}
        >
          홈페이지 방문하기
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const directBranch = BRANCH_DATA.find(b => b.region === Region.DIRECT);
  const daejeonBranches = BRANCH_DATA.filter(b => b.region === Region.DAEJEON);
  const nationwideBranches = BRANCH_DATA.filter(b => b.region === Region.NATIONWIDE);

  return (
    <div className="min-h-screen font-sans bg-white selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <HeroSlider />

      <main>
        {/* Story Section */}
        <section id="story" className="py-24 md:py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative z-10">
              <div className="inline-block">
                <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">Our Philosophy</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  단순한 대리점을 넘어<br />
                  <span className="text-slate-400">건강 파트너</span>로 성장합니다.
                </h2>
              </div>
              <div className="text-lg text-slate-600 leading-relaxed space-y-6">
                <p>
                  세심귀뜸봉 사업단은 <strong>'지역별 설치기준'</strong>에 의거하여 엄격한 심사를 통과한 
                  대리점만을 확충하고 있습니다. 이는 단순한 양적 팽창이 아닌, 
                  어느 지점을 방문하더라도 동일한 수준의 고품질 케어를 제공하기 위함입니다.
                </p>
                <p>
                  특히, 앞으로는 일정 요건을 갖춘 우수 대리점을 
                  <strong> '지역별 총판(Regional Hub)'</strong>으로 승격하여 운영할 계획입니다.
                </p>
              </div>
              
              {/* Feature Box */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mt-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">총판 운영 시스템 비전</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      향후 도입될 재고관리 프로그램과 연동하여, 지역 총판은 해당 권역의 
                      물류와 교육, 고객 관리를 총괄하는 핵심 거점 역할을 수행하게 됩니다. 
                      본사와 대리점, 그리고 고객을 잇는 유기적인 네트워크의 중심이 될 것입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-50 to-slate-50 rounded-full blur-3xl opacity-60"></div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop" 
                alt="Consulting" 
                className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-[600px]"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs hidden md:block">
                <p className="text-4xl font-bold text-blue-600 mb-1">100%</p>
                <p className="text-slate-500 text-sm font-medium">본사 인증 전문가 상주</p>
              </div>
            </div>
          </div>
        </section>

        {/* Direct Branch Section */}
        <section id="direct" className="py-24 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/30 skew-x-12 transform origin-top translate-x-32"></div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="text-orange-400 font-bold tracking-wider text-sm uppercase mb-2 block">Direct Management</span>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">본사 직영점</h2>
                <p className="text-slate-400 text-lg">세심귀뜸봉의 표준과 가치를 만들어가는 공간입니다.</p>
              </div>
              <a href={HQ_URL} className="text-white hover:text-orange-400 font-medium flex items-center gap-2 transition-colors">
                본사 홈페이지 바로가기 <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {directBranch && (
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-12 items-center hover:bg-white/10 transition-colors duration-500">
                <div className="w-full lg:w-1/2 h-80 lg:h-[400px] rounded-2xl overflow-hidden relative shadow-2xl">
                  <img 
                    src={directBranch.imageUrl} 
                    alt={directBranch.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-light opacity-80 mb-1">Flagship Store</p>
                    <p className="text-2xl font-bold">{directBranch.name}</p>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white">{directBranch.name}</h3>
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {directBranch.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="w-5 h-5 text-orange-400" />
                        <span className="text-slate-300 text-sm">Location</span>
                      </div>
                      <p className="text-white font-medium">{directBranch.address}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <Phone className="w-5 h-5 text-orange-400" />
                        <span className="text-slate-300 text-sm">Contact</span>
                      </div>
                      <p className="text-white font-medium">{directBranch.phone}</p>
                    </div>
                  </div>

                  <a 
                    href={directBranch.url}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-orange-500/20"
                  >
                    직영점 홈페이지 방문
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Branch Network Section */}
        <section id="nationwide" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Daejeon Grid */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-12 w-1 bg-blue-600 rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">대전권 네트워크</h3>
                  <p className="text-slate-500">본사와 가장 가까운 곳에서 만나는 전문 케어</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {daejeonBranches.map(branch => (
                  <BranchCard key={branch.id} branch={branch} />
                ))}
              </div>
            </div>

            {/* Nationwide Grid */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-12 w-1 bg-slate-900 rounded-full"></div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">전국 지점 안내</h3>
                  <p className="text-slate-500">전국 주요 거점 도시별 공식 대리점</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {nationwideBranches.map(branch => (
                  <BranchCard key={branch.id} branch={branch} />
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Call to Action - Franchise/Hub */}
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              세심귀뜸봉과 함께할 <br/>
              <span className="text-blue-600">지역 총판 파트너</span>를 찾습니다.
            </h2>
            <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
              귀하의 대리점을 해당 지역의 물류와 교육을 책임지는 거점으로 성장시키세요.
              체계적인 재고관리 시스템과 본사의 전폭적인 마케팅 지원이 함께합니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                <Building2 className="w-5 h-5" />
                가맹 및 총판 개설 문의
              </button>
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                1588-0000 (상담실)
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-white text-2xl font-bold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-sm">S</div>
                세심귀뜸봉
              </div>
              <p className="text-sm leading-relaxed mb-6">
                국민의 건강한 삶을 위한 끊임없는 연구와 노력.<br/>
                세심귀뜸봉 사업단이 함께합니다.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">본사 정보</h4>
              <ul className="space-y-3 text-sm">
                <li>대전광역시 중구 보문산공원로 123</li>
                <li>대표전화: 042-111-2222</li>
                <li>이메일: contact@sesim.com</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">서비스 바로가기</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">브랜드 스토리</a></li>
                <li><a href="#" className="hover:text-white transition-colors">제품 소개</a></li>
                <li><a href="#" className="hover:text-white transition-colors">대리점 개설안내</a></li>
                <li><a href={HQ_URL} className="hover:text-white transition-colors">본사 홈페이지</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Newsletter</h4>
              <p className="text-sm mb-4">새로운 소식과 건강 정보를 받아보세요.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="이메일 주소" 
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-blue-500"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-500 transition-colors">
                  구독
                </button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} Sesim Gwitteumbong Business Group. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;