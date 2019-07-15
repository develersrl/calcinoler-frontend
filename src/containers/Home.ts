import { connect } from "react-redux";
import { AppState } from "../modules";

import Home from "../components/Home";

const mapStateToProps = (state: AppState) => ({
  players: state.players.players,
  loading: state.players.loading,
  errors: state.players.errors
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
