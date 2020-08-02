import withPreview from "@root/hocs/with-preview/with-preview";
import {mount} from "enzyme";

interface Props {
  children: React.ReactNode;
}

const MockComponent = (props: Props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

it(`withPreview work properly`, () => {
  const MockComponentWrapped = withPreview(MockComponent);

  const wrapper = mount(
      <MockComponentWrapped
        poster=""
        src=""
      />
  );

  const {videoRef} = wrapper.instance();

  wrapper.instance().componentDidMount();

  expect(videoRef.current.autoplay).toEqual(true);
  expect(videoRef.current.muted).toEqual(true);
});
