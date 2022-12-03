import {useMemo} from 'react';
import classNames from 'classnames';

const useClasses = (className: string) => {
  return useMemo(() => classNames({
    'scene': true,
    [className]: Boolean(className),
  }), [className]);
}

export default useClasses;
