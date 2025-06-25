import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import timelineApi from '../api/timelineApi';

import LoadingSpinner from '../components/LoadingSpinner';
import LinkButtons from '../components/LinkButtons';
import TodayCountItem from '../components/TodayCountItem';
import WeekCountItem from '../components/WeekCountItem';
import Timeline from '../components/Timeline';

const UserInfo = ({ setActiveNav }) => {
  const params = useParams();
  const username = params.username;

  const { data, isLoading } = useQuery({
    queryKey: ['timeLine', username],
    queryFn: () => timelineApi(username),
    refetchInterval: 1000 * 60 * 5
  });

  useEffect(() => {
    setActiveNav(username);
  }, [username]);

  return (
    <div
      className="min-h-[500px] mx-[2px] p-[20px] bg-[#212529] rounded-[0_0_12px_12px] 
                flex flex-col gap-[20px]"
    >
      {!isLoading ? (
        <>
          <LinkButtons username={username} />
          <TodayCountItem timeline={data} />
          <WeekCountItem timeline={data} />
          <Timeline timeline={data} />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default UserInfo;
