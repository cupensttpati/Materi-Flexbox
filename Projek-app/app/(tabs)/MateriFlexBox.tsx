//  import React, {Component} from 'react';
//  import{Text,View} from 'react-native';

//  class MateriFlexBox extends Component {
//      render() {
//          return (
//              <View>
//                  <Text>Materi Flex Box</Text>
//                  <View style={{backgroundColor: '#ee5253', width: 55, height: 50}} />
//                  <View style={{backgroundColor: '#feca57', flex: 1, height: 50}} />
//                  <View style={{backgroundColor: '#1dd1a1', flex: 1, height: 50}} />
//                  <View style={{backgroundColor: '#5f27cd', flex: 1, height: 50}} />
//              </View>
//          );
//      };
//  };

//  export default MateriFlexBox;

// import React from 'react';
// import { Text, View } from 'react-native';

// const MateriFlexBox = () => {
//   return (
//     <View>
//       <Text>Materi Flex Box</Text>
//       <View style={{ backgroundColor: '#ee5253', flex: 1, height: 50 }} />
//       <View style={{ backgroundColor: '#feca57', flex: 1, height: 50 }} />
//       <View style={{ backgroundColor: '#1dd1a1', flex: 1, height: 50 }} />
//       <View style={{ backgroundColor: '#5f27cd', flex: 1, height: 50 }} />
//     </View>
//   );
// };

// export default MateriFlexBox;

import React from 'react';
import { Text, View, Image } from 'react-native';

const MateriFlexBox = () => {
  return (
    <View>
      {/* Baris kotak dengan Flexbox */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#ee5253',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ backgroundColor: '#00FF00', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#feca57', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#feca57', width: 50, height: 50 }} />
        <View style={{ backgroundColor: '#00FFFF', width: 50, height: 50 }} />
      </View>

      {/* Baris menu navigasi */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Channel</Text>
        <Text>Tentang</Text>
      </View>

      {/* Profil Section */}
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10 }}>
        <Image
          source={{
            uri: 
            'data:image/jpeg;base64,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'
          }}
          style={{ width: 100, height: 100, borderRadius: 50, marginRight: 14 }}
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cupen Hub</Text>
          <Text>7 Jt subscriber</Text>
        </View>
      </View>
    </View>
  );
};

export default MateriFlexBox;
