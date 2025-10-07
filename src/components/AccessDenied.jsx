const AccessDenied = () => {
  return (
    <div
      className="h-[96vh] flex flex-col justify-center items-center
      font-bold"
    >
      <p className="text-[18px] pb-[16px]">
        이용 제한 시간 &#40; 00 : 00 ~ 10 : 00 &#41;
      </p>
      <p className="text-[22px]">던파 점검중에는</p>
      <p className="text-[22px]">서비스가 중단됩니다.</p>
    </div>
  );
};

export default AccessDenied;
