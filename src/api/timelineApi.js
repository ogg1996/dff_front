import dffApiInstance from './dffApiInstance.js';

const timelineApi = async user => {
  const response = await dffApiInstance.get(`/timeline`, {
    params: { user }
  });

  return response.data;
};

export default timelineApi;
