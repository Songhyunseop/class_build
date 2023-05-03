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
