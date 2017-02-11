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

class reactvr extends React.Component {
  render() {
    const nodes = [
      {name: 'foo'}, {name: 'bar'}, {name: 'baz'}, {name: 'test'}, {name: 'root'}
    ];
    return (
      <View>
        <Pano source={asset('eso0932a.jpg')}/>
        {nodes.map((item, i) =>
            <View
              style={{ margin: 0.1, height: 0.3, backgroundColor: 'red',transform: [{rotateY: i*(360/nodes.length)}, {translate: [0, 0, -6]}]}}>
              <Text style={{fontSize: 0.2, textAlign: 'center'}}>{item.name}</Text>
            </View>
        )}
      </View>
    );
  }
}
;

AppRegistry.registerComponent('reactvr', () => reactvr);
