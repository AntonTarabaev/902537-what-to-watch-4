const PreviewPlayer = (props) => {
  const {children} = props;

  return (
    <>
      {children}
    </>
  );
};

PreviewPlayer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default PreviewPlayer;
