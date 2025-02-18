import { MutableRefObject, useEffect } from 'react';

export const useOutsideButNotOnTargetClick = (
  outsideRef: MutableRefObject<unknown>,
  targetRef: MutableRefObject<unknown>,
  cb: () => void,
): void => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        outsideRef.current &&
        targetRef.current &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        !outsideRef.current.contains(event.target) &&
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        !targetRef.current.contains(event.target)
      ) {
        cb();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [outsideRef, targetRef, cb]);
};
