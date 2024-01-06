import './NavView.scss';
import stock from '../assets/images/stock.jpg';
import logo from '../assets/images/skilify_logo.png';

function NavView({ isNavViewOpen }) {

  const navItems = ['Dashboard', 'My Course', 'Calendar', 'Resource', 'Quiz', 'Message', 'My Status', 'Wallet', 'My Account'];
  const navIcons = ['home', 'play_circle', 'calendar_today', 'import_contacts', 'extension', 'chat_bubble', 'trending_up', 'account_balance_wallet', 'person_add'];

  return (
    <div id='nav-view' style={{marginLeft: (isNavViewOpen ? '0px': '-500px') }}>

      <div id='nav-heading'>
        <img src={logo} alt='Silify Logo' />
        <h1>Skilify Admin</h1>
      </div>

      <nav>
        {navItems.map((item, index) => {
          return (
            <div id={`link-${item.replace(/\s/g, "")}`}>
              <span className='material-symbols-outlined'>{navIcons[index]}</span>
              <span className='nav-link'>{item}</span>
              <span className='material-symbols-outlined'>{'chevron_right'}</span>
            </div>
          );
        })}
      </nav>

      <div className='subscription'>
        <img src={stock} alt='Logo' />
        <button>Get Subscription</button>
      </div>

      <div className='copyright'>
        <p>Skilify Teacher Dashboard Admin</p>
        <span>&#169; 2020 All right reserved</span>
      </div>
    </div>
  );
}

export default NavView;