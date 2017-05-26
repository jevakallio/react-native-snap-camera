import React from 'react';
import {
  Permissions,
  BarCodeScanner
} from 'expo';

export default class Camera extends React.Component {

  state = {
    hasCameraPermission: false
  }

  async componentWillMount() {
    const permissions = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: permissions.status === 'granted'
    });
  }

  render() {
    if (this.state.hasCameraPermission) {
      return (
        <BarCodeScanner
          type={this.props.type || 'front'}
          key={`front-${this.props.type}`}
          style={styles.camera}
        />
      )
    }

    return <View style={styles.placeholder} />
  }
}

const styles = StyleSheet.create({
  placeholder: {
    flex: 1,
    backgroundColor: '#eee'
  },
  camera: {
    flex: 1
  }
})
