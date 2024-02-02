import './Home.css';

function Home() {

  return (
    <div className="app-content">
      <h3 className='title'>
        Welcome to the Frontend Quiz!
        <br />
        <b>
          Pick a subject to get started.
        </b>
      </h3>
      <div className='subject-list'>html, css, javascirtpt, accesibility</div>
    </div>
  );
}

export default Home;
