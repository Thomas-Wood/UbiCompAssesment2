import React from "react";
import { Text, View, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Theme from "../Theme";
import moment from "moment";

/**
 * 
 * @param {*} param0 Requires data(Array of objects)
 * @returns a custom Flatlist
 */
const CustomList = ({data, onPress}) => {

  const renderItem = ({item, index}) => {
    return (
      <View style={Theme.listItemBox}>
        <TouchableOpacity onPress={() => onPress(index)}>
          <View style={{flexDirection: 'row', justifyContent: "center"}}>
            <Text style={Theme.listText}>{parseFloat(item['estimate']['arrayArea']).toFixed(2)} m²</Text>
            <Text style={Theme.listText}>{parseFloat(item['results']['kwhGeneratedPerYear']).toFixed(0)} KWh/year</Text>
            <Text style={Theme.listText}>{moment(item['results']['dateTime']).fromNow()}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      style={{width: '100%'}}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index}
    />
  );
};

export default CustomList;