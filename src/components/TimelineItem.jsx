import { useEffect, useState } from 'react';

const TimelineItem = ({ item }) => {
  const [textColor, setTextColor] = useState('');
  const [cardText, setCardText] = useState('');

  useEffect(() => {
    if (item.data.itemRarity === '레전더리') {
      setTextColor('legendary');
    } else if (item.data.itemRarity === '에픽') {
      setTextColor('epic');
    } else {
      setTextColor('primeval');
    }

    if (item.name === '아이템 획득(던전 드랍)') {
      switch (item.data.dungeonName) {
        case '종말의 숭배자':
          setCardText('종말');
          break;
        case '심연 : 종말의 숭배자':
          setCardText('심연');
          break;
        case '워터파크 던전':
          setCardText('이벤트');
          break;
        default:
          setCardText('무빼노');
          break;
      }
    } else if (item.name === '아이템 획득(항아리&상자)') {
      setCardText('항아리');
    } else {
      setCardText('카드');
    }
  }, [item]);

  return (
    <div className="flex items-center py-[8px] border-b-[1px] border-[#dee2e6] last:border-b-0 justify-between">
      <div className="flex items-center">
        <div
          className="min-w-[50px] h-[50px] bg-[50%_60%] bg-[length:180%]"
          style={{
            backgroundImage: `url('https://img-api.neople.co.kr/df/servers/cain/characters/${item.characterId}?zoom=1')`
          }}
        />
        <img
          className="w-[30px] mr-[12px]"
          src={`https://img-api.neople.co.kr/df/items/${item.data.itemId}`}
        />
        <div>
          <div className="flex gap-[8px] grow">
            <div className={`${textColor} font-bold text-[13px]`}>
              {item.data.itemName}
            </div>
          </div>
          <div className="text-[11px]">{item.date}</div>
        </div>
      </div>
      <div className="text-[12px] max-h-[21px] text-[#444444] font-bold bg-[#8ae37f] mx-[4px] px-[6px] rounded-[10px] text-nowrap">
        {cardText}
      </div>
    </div>
  );
};

export default TimelineItem;
