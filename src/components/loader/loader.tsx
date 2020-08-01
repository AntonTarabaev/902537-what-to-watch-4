import Footer from "@components/footer/footer";
import Logo from "@components/logo/logo";

const Loader: React.FunctionComponent = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="visually-hidden">WTW</h1>
        <h2 className="page-title user-page__title">Loading... Please Wait</h2>
      </header>

      <Footer/>
    </div>
  );
};

export default Loader;
