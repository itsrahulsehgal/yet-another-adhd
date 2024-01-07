import './SearchBar.scss';

function SearchBar({ isNavViewOpen, toggleNavView }) {
  return (
    <div id='nav-bar'>
      <div className='toggler'>
        <button id='nav-toggle' onClick={() => toggleNavView(!isNavViewOpen)}><span className='material-symbols-outlined'>menu</span></button>
        <h2>Hello Mad</h2>
        <h3>&#x270B;</h3>
      </div>

      <input type='search' placeholder='Search here' />

      <div className='other-buttons'>
        <button id='upload'><span><span className='material-symbols-outlined'>upload</span>New Upload</span></button>
        <button className='icon'><span className='material-symbols-outlined'>notifications</span></button>
        <button className='icon'><span className='material-symbols-outlined'>chat</span></button>
        <button className='icon'><span className='material-symbols-outlined'>planner_review</span></button>
        <div>
          <p>TheMad<br/>Designer</p>
          <button id='profile'/>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;