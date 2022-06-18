import { StyleSheet, Text, Image, View, SafeAreaView  } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_GOOGLE, region, Marker,} from 'react-native-maps'
import { Card, List } from 'react-native-paper'

const Map = () => {

  const state = 2;

  return (
    <SafeAreaView>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        zoomEnabled={false}
        initialRegion={region}
        showsUserLocation={true}
        style={{ height: '100%' }}
      >
        {
          state == 1 ?
            <>
              <Marker description='Delivery person' coordinate={{
                latitude: 22.258,
                longitude: 71.19,
              }}>
                <Image source={require('./images/pink-bike.png')} style={{ height: 30, width: 30 }} />
              </Marker>
              <Marker description='Delivery person' coordinate={{
                latitude: 22.258,
                longitude: 71.19,
              }}>
                <Image source={require('./images/pink-bike.png')} style={{ height: 30, width: 30 }} />
              </Marker>
              <Marker description='Delivery person' coordinate={{
                latitude: 22.258,
                longitude: 71.19,
              }}>
                <Image source={require('./images/pink-bike.png')} style={{ height: 30, width: 30 }} />
              </Marker>
            </>

            : null
        }
        {
          state == 2 ?
            <Card style={{ backgroundColor: '#000' }}>
              <Card.Content>
                <List.Item title="$ 15,00"
                  description="Total price of Delivery"
                  left={() => <View><Image source={require('./images/pink-bike.png')} size={40} /></View>} />
              </Card.Content>
            </Card> : null
        }
        

      </MapView>
      {/* {
        state == 1 ?
          <Image source={require('./images/pink-bike.png')} size={40} /> : null
      } */}

    </SafeAreaView>

  )
}

export default Map

const styles = StyleSheet.create({})

/* region={{
        latitude: 22.258,
        longitude: 71.19,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }} */