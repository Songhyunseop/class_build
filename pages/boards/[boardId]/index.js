import { useRouter } from "next/router";

export default function BoardPage2() {
  const router = useRouter();

  return (
    <>
      <div>여기는 게시판 동적페이지입니다</div>
      <div>게시글아이디 : {router.query.boardId}</div>
    </>
  );
}

export const getServerSideProps = () => {
  // 만약 서버사이드 렌더링하는 페이지라면 ? => out 폴더로 생성 불가능
  //
  // => 따라서 이 경우, next.config.js 에서 exportPathMap 으로 해당페이지를 제외시켜줘야 함
};
