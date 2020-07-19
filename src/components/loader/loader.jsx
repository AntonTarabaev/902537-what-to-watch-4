import Footer from "@components/footer/footer";

const Loader = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="visually-hidden">WTW</h1>
        <h2 className="page-title user-page__title">Loading... Please Wait</h2>
      </header>

      <Footer
        isMainPage={true}
      />
    </div>
  );
};

export default Loader;
