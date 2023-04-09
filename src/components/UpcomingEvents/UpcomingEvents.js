import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import { data } from './data';

const UpcomingEvents = () => {
  return (
    <>
      <Header />
      <div className="pb-8">
        <div className="w-screen h-[25vh] text-center bg-black ">
          <h2 className="text-3xl pt-12 overflow-hidden text-white font-bold">
            ICIoT Chronical
          </h2>
          <div className="flex flex-wrap justify-center mt-4 ">
            <Link className="text-md text-blue-400 hover:text-white" to="/home">
              Home
            </Link>
            <p className="text-md text-white"> / ICIoT Chronical</p>
          </div>
        </div>
        <div className="w-screen h-fit mt-16 md:mt-24 px-2 md:px-[15vw]">
          <div className="text-center">
            {' '}
            <a
              href="https://link.springer.com/book/9783031284748#book-header"
              style={{ textDecoration: 'underline' }}
            >
              Previous Conference Paper Publication Link
            </a>
          </div>
          <div className="mt-5 flex flex-wrap justify-center ">
            {data.map((item) => {
              return (
                <a key={item.id}>
                  <button
                    className={`p-2 px-8 mx-2 text-sm md:p-4 md:px-12 md:mx-4 min-w-fit mt-4 lg:mt-0 text-white bg-[#0284c7] hover:bg-slate-400`}
                    onClick={() => {
                      window.open(item.url);
                    }}
                    value={item.id}
                  >
                    {item.month}
                  </button>
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UpcomingEvents;
