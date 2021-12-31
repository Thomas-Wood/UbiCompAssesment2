import React from "react";
import { Text, View, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Theme from "../Theme";
import moment from "moment";

const CustomList = ({data, onPress}) => {

  const renderItem = ({item, index}) => {
    return (
      <View style={Theme.listItemBox}>
        <TouchableOpacity onPress={() => onPress(index)}>
          <Text style={Theme.listText}>{item['estimate']['arrayArea']} m² array</Text>
          <Text style={Theme.listText}>{parseFloat(item['results']['kwhGeneratedPerYear']).toFixed(1)} KWh per year</Text>
          <Text style={Theme.listText}>{moment(item['results']['dateTime']).fromNow()}</Text>
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