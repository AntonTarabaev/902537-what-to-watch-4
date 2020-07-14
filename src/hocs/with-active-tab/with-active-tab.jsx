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
      if (prevProps !== this.props) {
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
