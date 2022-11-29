export const getIntersectionObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      // callback
      console.log(entries);
    },
    { threshold: 0 },
  );

  return observer;
};
