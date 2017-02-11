import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  VrButton,
  Image,
  Text,
  View,
} from 'react-vr';
import Tooltip from './Tooltip.js'
import InfoButton from './InfoButton.js'

const tt = {
  "text": "The Bar",
  "position": [
    0,
    0
  ],
  "linkedPhotoId": "112379"
}
class Nodes extends React.Component {
  render() {
    return (
      <View>
        {this.props.nodes.map((item, i) =>
          <VrButton
            key={item.name}
            style={{
              layoutOrigin: [0.5, 0.5, 0],
              position: 'absolute',
              width: 1,
              height: 1,
              transform: [{ rotateY: i * (360 / this.props.nodes.length) },
              { translate: [0, 0, -5] }]
            }}
            onClick={() => this.props.onClick(item.name)}
          >
            <InfoButton
              key={item.name}
              rotateY={i * (360 / this.props.nodes.length)}
              source={asset('info_icon.png')}
              tooltip={tt}
              translateZ={-5}
            />

          </VrButton>

        )}
      </View>
    );
  }
}
const nodes = [{ name: 'foo', nodes: [{ name: 'childFoo' }, { name: 'childBar' }, { name: 'childBaz' }] }, { name: 'bar' }, { name: 'baz' }, { name: 'test' }, { name: 'root' }];
class reactvr extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nodes: [] };
  }
  componentDidMount() {
    this.setState({ nodes });
  }
  onClick = (name) => {
    this.setState(nodes.find((el) => { return el.name === name }));
  }
  render() {
    return (
      <View>
        <Pano source={asset('eso0932a.jpg')} />
        <Nodes onClick={this.onClick} nodes={this.state.nodes} />
      </View>
    );
  }
}

AppRegistry.registerComponent('reactvr', () => reactvr);
