import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { getContext } from './Context';

//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Frankfurt?unitGroup=metric&key=W4HXGLK5FTT955T4AXPANV3TX&contentType=json
const API_KEY = import.meta.env.VITE_API_KEY;
const URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const parameters = `?unitGroup=metric&key=${API_KEY}&contentType=json`;

export const fetchData = (search) => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['cities', search],
    queryFn: async () => {
      const { data } = await axios.get(URL + search + parameters);
      return data;
    },
  });
  return { isLoading, data, isError };
};
