import { useCallback, useEffect, useRef } from "react";

export const useMounted = () => {
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  });
  return useCallback(() => mounted.current, []);
};

export const useAsync = () => {
  const isMounted = useMounted();
  return useCallback(
    (promise, onCancle) =>
      new Promise((resolve, reject) => {
        promise
          .then((result) => {
            if (isMounted()) {
              resolve(result);
            }
          })
          .catch((error) => {
            if (isMounted()) {
              reject(error);
            }
          })
          .finally(() => {
            if (!isMounted() && onCancle) {
              onCancle();
            }
          });
      }),
    [isMounted]
  );
};
