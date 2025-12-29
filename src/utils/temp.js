const seededRandom = function (seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

// Local implementation of fetchAPI
const localFetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

// Local implementation of submitAPI
const localSubmitAPI = function (formData) {
  return true;
};

// Use global API functions if available (from external script), otherwise use local implementation
export const fetchAPI = typeof window !== 'undefined' && window.fetchAPI
  ? window.fetchAPI
  : localFetchAPI;

export const submitAPI = typeof window !== 'undefined' && window.submitAPI
  ? window.submitAPI
  : localSubmitAPI;
