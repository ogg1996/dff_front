import userList from '../consts/userList';

const LinkButtons = ({ username }) => {
  const adventure = userList.find(
    item => item.en_name === username
  ).adventureName;

  return (
    <div className="bg-[#ffffff0d] p-[20px] rounded-[12px]">
      <div className="text-[20px] pb-[20px] font-bold">
        모험단 정보 보러가기
      </div>
      <div className="flex justify-around">
        <a
          className="w-[96px] text-center py-[12px] rounded-[12px]
           text-[18px] font-bold bg-[#40474e]"
          href={`https://dundam.xyz/search?server=adven&name=${adventure}`}
          target="_blank"
        >
          던담
        </a>
        <a
          className="w-[96px] text-center py-[12px] rounded-[12px]
           text-[18px] font-bold bg-[#40474e]"
          href={`https://dfgear.xyz/adventure?cName=${adventure}`}
          target="_blank"
        >
          던파기어
        </a>
      </div>
    </div>
  );
};

export default LinkButtons;
