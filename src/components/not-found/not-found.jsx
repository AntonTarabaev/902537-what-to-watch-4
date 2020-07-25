import Footer from "@components/footer/footer";
import Logo from "@components/logo/logo";

const NotFound = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>

        <h1 className="visually-hidden">WTW</h1>
        <h2 className="page-title user-page__title">404 - PAGE NOT FOUND<br/>The page you are looking for doesn&apos;t exist or an other error occurred. Please go back to the home page.</h2>
      </header>

      <Footer/>
    </div>
  );
};

export default NotFound;
