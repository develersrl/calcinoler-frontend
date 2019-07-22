import { connect } from "react-redux";

import SearchBox from "../../components/SearchBox";

import { fetchPlayers } from "../../modules/players/actions";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  fetchItems: fetchPlayers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
