import loadingIcon from '../assets/icon/icon_loading.png';

const LoadingSpinner = () => {
  return (
    <div className="grow flex justify-center items-center">
      <img src={loadingIcon} className="animate-spin" />
    </div>
  );
};

export default LoadingSpinner;
