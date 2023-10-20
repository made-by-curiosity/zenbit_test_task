import { Hourglass } from 'react-loader-spinner';

export const LoadingSpinner = () => {
  return (
    <Hourglass
      height="80"
      width="80"
      colors={['#b29f7e', '#FFDAB9']}
      ariaLabel="hourglass-loading"
      visible={true}
    />
  );
};
