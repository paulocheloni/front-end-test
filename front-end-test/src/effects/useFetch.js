import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import url from '../methods/url';

function useFetch(shouldUpdate) {
  const cache = useRef({});

  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.length === 0) return;
    async function fetchData() {
      if (cache.current[url]) {
        setData(cache.current[url]);
      } else if (shouldUpdate) {
        const apiData = await fetch(url);
        const jsondata = await apiData.json();
        cache.current[url] = jsondata;
        // eslint-disable-next-line no-underscore-dangle
        const modifiedData = jsondata.map((row) => ({ ...row, id: row._id }));
        setData(modifiedData);
      }
    }
    fetchData();
  }, [url, shouldUpdate]);
  return {
    data,
  };
}

useFetch.defaultProps = {
  url: '',
};

useFetch.propTypes = {
  url: PropTypes.string,
  options: PropTypes.shape(PropTypes.any),
};

export default useFetch;
