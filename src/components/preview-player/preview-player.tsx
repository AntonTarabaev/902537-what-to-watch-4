interface Props {
  children: React.ReactNode;
}

const PreviewPlayer: React.FunctionComponent<Props> = (props: Props) => {
  const {children} = props;

  return (
    <>
      {children}
    </>
  );
};

export default PreviewPlayer;
