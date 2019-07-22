import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import PlaceDetail from '../../components/place-detail/PlaceDetail';
import SellersList from '../../components/sellers-list/SellersList';

const tabTypes = {
  INFORMATION: 'information',
  SELLERS: 'sellers'
};

const tabs = [{
  name: tabTypes.INFORMATION,
  label: 'Información'
}, {
  name: tabTypes.SELLERS,
  label: 'Vendedores'
}];

class PlaceInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: tabTypes.INFORMATION
    }
  }

  getTabs = () => tabs;

  _handleChangeTab = tabName => {
    this.setState({ activeTab: tabName })
  }

  render() {
    const { activeTab } = this.state;

    return (
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <Image
            source={{uri: this.props.place.imageUrl}}
            style={{ height: 150}}
          />
          <Text style={styles.placeName}>{this.props.place.name}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.tabsContainer}>
            { tabs.map((t, idx) => 
              <View style={styles.tabView} key={idx}>
                <TouchableHighlight
                  activeOpacity={0.95}
                  underlayColor={'#e3e3e3'}
                  onPress={() => this._handleChangeTab(t.name)}>
                  <Text
                    style={[
                      styles.textCenterd,
                      activeTab === t.name ? styles.textUnderlined : '',
                      styles.tabText
                    ]}
                  >{ t.label }</Text>
                </TouchableHighlight>
              </View>
            ) }
          </View>
          <View style={styles.dynamicContent}>
            { activeTab === tabTypes.INFORMATION ? (
              <PlaceDetail place={this.props.place}></PlaceDetail>
            ) : (
              <SellersList></SellersList>
            ) }
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    position: 'relative'
  },
  placeName: {
    position: 'absolute',
    bottom: 2,
    left: 10,
    color: '#fff',
    fontSize: 25,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textShadowOffset: {
      width: 2,
      height: 2
    },
    textShadowColor: '#000',
    textShadowRadius: 10
  },
  body: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  tabView: {
    flex: 1
  },
  wrapperTabText: {
    borderLeftWidth: 1,
    borderLeftColor: '#cacaca'
  },
  textUnderlined: {
    textDecorationLine: 'underline'
  },
  textCenterd: {
    textAlign: 'center'
  },
  tabText: {
    paddingTop: 15,
    paddingBottom: 15
  },
  dynamicContent: {
    flex: 1,
    paddingTop: 10
  }
});

export default PlaceInformation;
