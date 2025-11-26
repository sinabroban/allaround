import { Branch, Region } from './types';

// Placeholder URLs are used where specific URLs weren't provided in the prompt.
// In a real scenario, these would be the actual blog/website links.

export const BRANCH_DATA: Branch[] = [
  // 1. Direct Management
  {
    id: 'direct-1',
    name: '대전 보문산지점',
    region: Region.DIRECT,
    address: '대전광역시 중구 보문산공원로 123 (대사동)',
    phone: '042-111-2222',
    url: 'https://example.com/bomunsan', // Placeholder
    imageUrl: 'https://picsum.photos/800/600?random=1',
    isDirectManaged: true,
    description: '세심귀뜸봉 사업단의 핵심 거점이자 본사 직영점으로 운영되는 플래그십 스토어입니다.'
  },
  // 2. Daejeon Area
  {
    id: 'dj-1',
    name: '대전 반석점',
    region: Region.DAEJEON,
    address: '대전광역시 유성구 반석동 456',
    phone: '042-333-4444',
    url: 'https://blog.naver.com/banseok_sesim', // Placeholder
    imageUrl: 'https://picsum.photos/800/600?random=2',
    isDirectManaged: false,
    description: '유성구 지역 주민들의 건강을 책임지는 친절한 상담 센터입니다.'
  },
  {
    id: 'dj-2',
    name: '대전 가양점',
    region: Region.DAEJEON,
    address: '대전광역시 동구 가양동 789',
    phone: '042-555-6666',
    url: 'https://blog.naver.com/gayang_sesim', // Placeholder
    imageUrl: 'https://picsum.photos/800/600?random=3',
    isDirectManaged: false,
    description: '동구 지역의 거점으로, 편안한 체험과 전문적인 관리를 제공합니다.'
  },
  {
    id: 'dj-3',
    name: '대전 괴정점',
    region: Region.DAEJEON,
    address: '대전광역시 서구 괴정동 101',
    phone: '042-777-8888',
    url: 'https://blog.naver.com/goejeong_sesim', // Placeholder
    imageUrl: 'https://picsum.photos/800/600?random=4',
    isDirectManaged: false,
    description: '서구 중심가에 위치하여 접근성이 뛰어나며 세심한 케어를 약속합니다.'
  },
  // 3. Nationwide
  {
    id: 'nat-1',
    name: '대구 북구점',
    region: Region.NATIONWIDE,
    address: '대구광역시 북구 칠곡중앙대로 234',
    phone: '053-123-4567',
    url: 'https://blog.naver.com/daegu_sesim', // Placeholder
    imageUrl: 'https://picsum.photos/800/600?random=5',
    isDirectManaged: false,
    description: '대구 경북 지역의 첫 번째 거점으로 활발한 활동을 이어가고 있습니다.'
  },
  {
    id: 'nat-2',
    name: '부산 영도점',
    region: Region.NATIONWIDE,
    address: '부산광역시 영도구 태종로 567',
    phone: '051-987-6543',
    url: 'https://blog.naver.com/busan_sesim', // Placeholder
    imageUrl: 'https://picsum.photos/800/600?random=6',
    isDirectManaged: false,
    description: '부산의 아름다운 영도에서 힐링과 건강을 동시에 전해드립니다.'
  },
  {
    id: 'nat-3',
    name: '경기 일산점',
    region: Region.NATIONWIDE,
    address: '경기도 고양시 일산동구 중앙로 890',
    phone: '031-456-7890',
    url: 'https://blog.naver.com/ilsan_sesim', // Placeholder
    imageUrl: 'https://picsum.photos/800/600?random=7',
    isDirectManaged: false,
    description: '수도권 북부의 핵심 대리점으로 쾌적한 시설을 자랑합니다.'
  }
];

export const HQ_URL = "https://www.sesimhq.com"; // Placeholder for main HQ site