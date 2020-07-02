const Tab = (props) => {
  const {children, isActive} = props;

  return (
    <>
      {isActive ? children : null}
    </>
  );
};

Tab.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Tab;
