import BlogPost from '../components/BlogPost';

export default function Home() {
  return (
    <main style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>블로그 게시판</h1>

      <BlogPost
        title="Next.js란 무엇인가?"
        author="x김넥스트"
        content="Next.js는 React 기반의 서버 사이드 렌더링 프레임워크입니다."
      />

      <BlogPost
        title="App Router의 구조"
        author="이라우터"
        content="App Router는 폴더 기반 라우팅 시스템으로 페이지를 구성합니다."
      />

      <BlogPost
        title="컴포넌트 재사용이란?"
        author="박컴포넌트"
        content="하나의 컴포넌트를 여러 번 활용하여 유지보수성을 높일 수 있습니다."
      />
    </main>
  );
}