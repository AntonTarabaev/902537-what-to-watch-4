const withActiveTab = (Component) => {
  class WithActiveTab extends React.PureComponent {
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

  WithActiveTab.propTypes = {
    tabsId: PropTypes.string.isRequired,
  };

  return WithActiveTab;
};

export default withActiveTab;
