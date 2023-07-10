import './App.css';
import cms from './contents/cms-img.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Skript<span>__n</span></h1>
       <nav>
       <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" width="30px" height="30px" className="cursor-pointer fill-gray-200 pt-1" xmlns="http://www.w3.org/2000/svg"><path d="M21.86,18.73H9.18a2,2,0,0,1,0-4H21.86a2,2,0,0,1,0,4Z"/><path d="M54.82,18.73H34.88a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,34H9.18a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,49.27H30.07a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/></svg>
        <ul>
          <li>Sign up</li>
          <li>Login</li>
        </ul>
       </nav>
      </header>
      <main>
        <div className='main'>
          <div className='h1-tag'>
            <h1>Create<span>, Manage & Publish </span>engaging blog contents <span>with our cms</span>.</h1>
            <p id='cta'>
            Veniam pariatur cillum ullamco proident et id Lorem excepteur ad. Commodo qui excepteur tempor veniam deserunt eu dolore eu.<br />
            <button>Start now</button>
            </p>
          </div>
          <div className='img-content'>
            <p id='img'>
              <img src={cms} alt="cms-img" />
            </p>
          </div>
          <div className='features'>
            <p id='feature1'>
              <h4>Feature 1</h4>
              <article>
              Veniam pariatur cillum ullamco proident et id Lorem excepteur ad. Commodo qui excepteur tempor veniam deserunt eu dolore eu.
              </article>
            </p>
          </div>
          <div className='reviews'>
            <p id='rev 1'>
              <figure></figure>
              <div><h4>Name</h4>Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</div> 
            </p>
            <p id='rev 2'>
              <figure></figure>
              <div><h4>Name</h4>Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</div>
            </p>
            <p id='rev 3'>
              <figure></figure>
              <div><h4>Name</h4>Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</div>
            </p>
          </div>
        </div>
      </main>
      <footer style={{backgroundColor:'blueviolet'}}>
        <p id='copyright'>Copyright &#169;2023, James.E.O | All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
