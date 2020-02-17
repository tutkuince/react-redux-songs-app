import React, { Component } from "react";
import { connect } from 'react-redux';

class SongList extends Component {
    // this.props ==== {songs: state.songs}
    render() {
        return <div>SongList</div>;
    }
}

const mapStateToProps = (state) => {
    return {songs: state.songs}
};

export default connect(mapStateToProps)(SongList);