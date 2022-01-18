import Device from '../Device/index.ts'
import MainNav from '../navigation/MainNav';
import MobileNav from '../navigation/MobileNav';






const Header = (props) => {
  


return(
  <>

<Device>
  {({isMobile}) => {

    if(isMobile) return <MobileNav />

    return <MainNav />

  }}
</Device>


  
  
  
  </>
)

};

export default Header;
