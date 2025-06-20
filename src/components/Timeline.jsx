import TimelineItem from './TimelineItem';

const Timeline = ({ timeline }) => {
  return (
    <div className="grow bg-[#ffffff0d] p-[20px] rounded-[12px]">
      <div className="text-[20px] font-bold pb-[12px]">타임라인</div>
      <div className="flex flex-col bg-[#ffffff12] py-[10px] px-[4px] rounded-[12px]">
        {timeline.length !== 0 ? (
          timeline.map((item, _index) => (
            <TimelineItem
              key={`timelineItem_${_index}`}
              item={item}
            />
          ))
        ) : (
          <div className="text-center">
            아직 획득한 장비가 없습니다
          </div>
        )}
      </div>
    </div>
  );
};

export default Timeline;
