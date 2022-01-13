import { isMobile } from 'react-device-detect';
import MainNav from '../navigation/MainNav';

const Header = (props) => {
  if (isMobile) {
    return (
      <>
      <header className="w-w-full flex flex-row justify-evenly  items-center h-h-90 border-y-blue-dark border-b-2 text-green font-semibold uppercase ">
        <div >
          <h2>Logo</h2>
        </div>
        <div >
  
          <h2>Get A Life</h2>
        </div>
        <div>

          <h2>Get A Quote</h2>
        </div>
      </header>
      <MainNav />
    </>
    )
  }

  return (
    <>
      <header className="w-w-full flex flex-row justify-evenly  items-center h-h-90 border-y-blue-dark border-b-2 text-green font-semibold uppercase ">
        <div >
          <h2>Logo</h2>
        </div>
        <div >
  
          <h2>Get A Life</h2>
        </div>
        <div>

          <h2>Get A Quote</h2>
        </div>
      </header>
      <MainNav />
    </>
  );
};

export default Header;
