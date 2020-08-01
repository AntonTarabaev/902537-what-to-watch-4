import {Subtract} from "utility-types";

interface Props {
  tabsId: string;
}

interface State {
  activeTabId: number;
}

interface InjectingProps {
  tabTitleClickHandler: (tabId: number) => void;
  activeTabId: number;
}

const withActiveTab = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectingProps>;

  class WithActiveTab extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeTabId: 0,
      };

      this._tabTitleClickHandler = this._tabTitleClickHandler.bind(this);
    }

    componentDidUpdate(prevProps) {
      const {tabsId} = this.props;

      if (prevProps.tabsId !== tabsId) {
        this.setState({
          activeTabId: 0,
        });
      }
    }

    _tabTitleClickHandler(tabId) {
      this.setState({
        activeTabId: tabId,
      });
    }

    render() {
      const {activeTabId} = this.state;

      return (
        <Component
          {...this.props}
          tabTitleClickHandler={this._tabTitleClickHandler}
          activeTabId={activeTabId}
        />
      );
    }
  }

  return WithActiveTab;
};

export default withActiveTab;
