import { useEffect, useState } from 'react';

const CountItem = ({ timeline }) => {
  const [primevalCount, setPrimevalCount] = useState(0);
  const [epicCount, setEpicCount] = useState(0);
  const [legendaryCount, setLegendaryCount] = useState(0);

  useEffect(() => {
    const counts = timeline.reduce(
      (acc, { data: { itemRarity } }) => {
        if (acc[itemRarity] !== undefined) {
          acc[itemRarity]++;
        }
        return acc;
      },
      { 태초: 0, 에픽: 0, 레전더리: 0 }
    );

    setPrimevalCount(counts['태초']);
    setEpicCount(counts['에픽']);
    setLegendaryCount(counts['레전더리']);
  }, [timeline]);

  return (
    <div className="bg-[#ffffff0d] p-[20px] rounded-[12px]">
      <div className="text-[20px] pb-[12px] font-bold">
        이번주 획득한 레어리티 갯수
      </div>
      <div className="flex flex-col pl-[12px]">
        <div className="flex gap-[10px] font-bold primeval">
          <div>태초</div>
          <div>{primevalCount}</div>
        </div>
        <div className="flex gap-[10px] font-bold epic">
          <div>에픽</div>
          <div>{epicCount}</div>
        </div>
        <div className="flex gap-[10px] font-bold legendary">
          <div>레전</div>
          <div>{legendaryCount}</div>
        </div>
      </div>
    </div>
  );
};

export default CountItem;
