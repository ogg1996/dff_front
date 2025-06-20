import upArrowIcon from '../assets/icon/icon_up_arrow.png';
import ddfLogo from '../assets/ddf_logo.png';

const Home = () => {
  return (
    <div
      className="min-h-[500px] mx-[2px] p-[20px] bg-[#212529] rounded-[0_0_12px_12px]
    flex flex-col items-center gap-[20px]"
    >
      <div className="h-[50px] flex justify-center items-end">
        <div className="flex gap-[8px] justify-center items-end animate-bounce">
          <img src={upArrowIcon} className=" w-[36px] h-[36px]" />
          <div className="text-center text-[18px] font-bold">
            상단 탭을 클릭!
          </div>
        </div>
      </div>
      <img className="w-[280px] h-[280px]" src={ddfLogo} />
      <div className="w-[260px] flex flex-col gap-[8px]">
        <p className="text-start">Neople OpenAPI를 활용한</p>
        <p className="text-end text-[20px] font-bold">
          타임라인 조회 웹 사이트
        </p>
      </div>
    </div>
  );
};

export default Home;
