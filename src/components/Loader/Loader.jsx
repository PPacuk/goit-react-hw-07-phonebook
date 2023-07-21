import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css'
export const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <InfinitySpin width="200" color="#3f51b5" />;
    </div>
  );
};
