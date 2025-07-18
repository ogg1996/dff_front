import apiLogo from '../assets/api_logo.png';

const Footer = () => {
  return (
    <div>
      <a
        className="flex justify-center bg-white min-h-[92px] py-[20px] rounded-[12px]"
        href="http://developers.neople.co.kr"
        target="_blank"
      >
        <img src={apiLogo} />
      </a>
    </div>
  );
};

export default Footer;
