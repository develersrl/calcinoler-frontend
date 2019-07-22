import { connect } from "react-redux";
import { AppState } from "../../modules";
import { fetchPlayers } from "../../modules/players/actions";

import PlayerList from "../../components/PlayerList";

const mapStateToProps = (state: AppState) => ({
  players: state.players.players,
  loading: state.players.loading,
  errors: state.players.errors
});

const mapDispatchToProps = {
  fetchPlayers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerList);
