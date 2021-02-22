import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function UseFetch(url) {
  const cache = useRef({});

  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.length === 0) return;
    async function fetchData() {
      if (cache.current[url]) {
        setData(cache.current[url]);
        setStatus('fetched');
      } else {
        const apiData = await fetch(url);
        const jsondata = await apiData.json();
        cache.current[url] = jsondata;
        // eslint-disable-next-line no-underscore-dangle
        const modifiedData = jsondata.map((row) => ({ ...row, id: row._id }));
        setData(modifiedData);
        setStatus('fetched');
      }
    }
    fetchData();
  }, [url]);
  return {
    status, data,
  };
}

UseFetch.defaultProps = {
  url: '',
};

UseFetch.propTypes = {
  url: PropTypes.string,
  options: PropTypes.shape(PropTypes.any),
};

export default UseFetch;
