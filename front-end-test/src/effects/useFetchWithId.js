import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function UseFetchWithId(url) {
  const cache = useRef({});

  const [formStatus, setStatus] = useState('idle');
  const [formData, setData] = useState({
    _id: '',

  });
  const [id, setId] = useState('');

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
    if (id !== '') fetchData();
  }, [url, id]);
  return {
    formStatus, formData, setId,
  };
}

UseFetchWithId.defaultProps = {
  url: '',
};

UseFetchWithId.propTypes = {
  url: PropTypes.string,
  options: PropTypes.shape(PropTypes.any),
};

export default UseFetchWithId;
