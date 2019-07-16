import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';
import PlaceDetail from '../../components/place-detail/PlaceDetail';
import SellersPage from '../sellers/Sellers';

class PlaceInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'information'
    }
  }

  _handleChangeTab = tabName => {
    this.setState({ activeTab: tabName })
  }

  render() {
    const { activeTab } = this.state;

    return (
      <View>
        <View style={styles.header}>
          <Image
            source={{uri: this.props.place.imageUrl}}
            style={{ height: 150}}
          />
          <Text style={styles.placeName}>{this.props.place.name}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.tabsContainer}>
            <View style={styles.tabView}>
              <TouchableHighlight
                activeOpacity={0.95}
                underlayColor={'#e3e3e3'}
                onPress={() => this._handleChangeTab('information')}>
                <Text
                  style={[
                    styles.textCenterd,
                    activeTab === 'information' ? styles.textUnderlined : '',
                    styles.tabText
                  ]}
                >Información</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.tabView}>
              <TouchableHighlight
                activeOpacity={0.95}
                underlayColor={'#e3e3e3'}
                onPress={() => this._handleChangeTab('sellers')}>
                <Text
                  style={[
                    styles.textCenterd,
                    activeTab === 'sellers' ? styles.textUnderlined : '',
                    styles.tabText
                  ]}
                >Vendedores</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.dynamicContent}>
            { activeTab === 'information' ? (
              <PlaceDetail></PlaceDetail>
            ) : (
              <SellersPage></SellersPage>
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
    paddingTop: 10
  }
});

export default PlaceInformation;
