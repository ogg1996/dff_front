import { Link } from 'react-router-dom';

import userList from '../consts/userList';

const HeaderNav = ({ activeNav }) => {
  return (
    <div className="flex">
      {userList.map((user, _index) => (
        <Link
          key={`user_${_index}`}
          className={`w-[25%] h-[60px] flex justify-center items-center
           rounded-[12px_12px_0_0] border-[2px] border-[#121214] ${
             activeNav === user.en_name
               ? 'bg-[#212529] border-b-0'
               : 'bg-[#40474e]'
           }`}
          to={`/userInfo/${user.en_name}`}
        >
          <span className="text-[20px] font-bold">
            {user.ko_name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default HeaderNav;
