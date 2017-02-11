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

class Nodes extends React.Component{
  render() {
    return (
      <View>
        {this.props.nodes.map((item, i) =>
        <VrButton
          key={item.name}
          style={{layoutOrigin: [0.5, 0.5, 0],
              position: 'absolute',
              width: 1,
              height: 1,
              transform: [{rotateY: i*(360/this.props.nodes.length)},
              {translate: [0, 0, -5]}]}}
          onClick={()=>this.props.onClick(item.name)}>
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
const nodes = [{name: 'foo', nodes: [{name: 'childFoo'}, {name: 'childBar'}, {name: 'childBaz'}]}, {name: 'bar'}, {name: 'baz'}, {name: 'test'}, {name: 'root'}];
class reactvr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nodes: []};
  }
  componentDidMount() {
    this.setState({nodes});
  }
  onClick = (name) => {
    const root = nodes.find((el) => {return el.name === name});
    let newNodes = [];
    newNodes.push(root);
    newNodes = newNodes.concat(root.nodes);
    this.setState({nodes: newNodes});
  }
  render() {
    return (
      <View>
        <Pano source={asset('eso0932a.jpg')}/>
        <Nodes onClick={this.onClick} nodes={this.state.nodes} />
      </View>
    );
  }
}

AppRegistry.registerComponent('reactvr', () => reactvr);
