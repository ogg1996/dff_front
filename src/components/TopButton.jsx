import topButtonIcon from '../assets/icon/icon-top-button.png';

const TopButton = () => {
  const onClickEventHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <button
      className="fixed bottom-[45px] right-[15px]"
      onClick={onClickEventHandler}
    >
      <img className="w-[36px]" src={topButtonIcon} />
    </button>
  );
};

export default TopButton;
