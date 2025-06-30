import { useEffect, useState } from 'react';

const TodayCountItem = ({ timeline }) => {
  const [primevalCount, setPrimevalCount] = useState(0);
  const [epicCount, setEpicCount] = useState(0);
  const [legendaryCount, setLegendaryCount] = useState(0);

  useEffect(() => {
    const now = new Date();

    if (0 <= now.getHours() && now.getHours() < 6) {
      now.setDate(now.getDate() - 1);
    }

    const minDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      6,
      0,
      0
    );
    const maxDate = new Date(minDate);
    maxDate.setDate(maxDate.getDate() + 1);

    const filteredTimeline = [];

    for (const item of timeline) {
      const time = item.date;
      const timeStamp = new Date(
        `${time.slice(0, 10)}T${time.slice(11, 16)}:00`
      ).getTime();

      if (
        minDate.getTime() <= timeStamp &&
        timeStamp < maxDate.getTime()
      ) {
        filteredTimeline.push(item);
      } else {
        break;
      }
    }

    const counts = filteredTimeline.reduce(
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
        오늘 획득한 장비 개수
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

export default TodayCountItem;
