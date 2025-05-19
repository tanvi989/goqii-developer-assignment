import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import ConnectFab from './components/ConnectFab'
import Banner from './components/Banner';
function App() {
  return (
    <>
      <Navbar />
      
      <Banner />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <UserForm />
          </div>
          <div className="col-md-6">
            <UserList />
          </div>
        </div>
      </div>
      <Footer />
      <ConnectFab /> 
    </>
  );
}

export default App;
