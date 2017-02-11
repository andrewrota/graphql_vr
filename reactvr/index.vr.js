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
  _onViewClicked = (name) => {
    console.log(name);
  }

  render() {
    const nodes = [
      {name: 'foo'}, {name: 'bar'}, {name: 'baz'}, {name: 'test'}, {name: 'root'}
    ];
    return (
      <View>
        <Pano source={asset('eso0932a.jpg')}/>
        {nodes.map((item, i) =>
            <VrButton
              key={item.name}
              style={{layoutOrigin: [0.5, 0.5, 0],
              position: 'absolute',width: 1,
              height: 1,transform: [{rotateY: i*(360/nodes.length)},
              {translate: [0, 0, -5]}]}}
              onClick={()=>this._onViewClicked(item.name)}>
              <View
                key={item.name}
                style={{ margin: 0.1, height: 1, width: 1, backgroundColor: 'red'}}>
                <Text style={{fontSize: 0.2, textAlign: 'center'}}>{item.name}</Text>
              </View>
            </VrButton>
        )}
      </View>
    );
  }
}
;

AppRegistry.registerComponent('reactvr', () => reactvr);
