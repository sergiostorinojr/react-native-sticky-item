import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Platform,
  ListRenderItemInfo,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StickyItemFlatList from '@gorhom/sticky-item';
import DummyItem from '../components/dummy-item';
import BasicSticky from '../components/basic-sticky';

const data = [...Array(20)]
  .fill(0)
  .map((_, index) => ({ id: `item-${index}` }));

export const STORY_WIDTH = 200;
export const STORY_HEIGHT = 100;
const STICKY_ITEM_WIDTH = 56;
const STICKY_ITEM_HEIGHT = 56;
const SEPARATOR_SIZE = 10;
const BORDER_RADIUS = 0;

const BasicRTL = () => {
  // styles
  const containerStyle = {
    paddingVertical: SEPARATOR_SIZE * 2,
    backgroundColor: '#111',
  };

  // methods
  const handleStickyItemPress = () => Alert.alert('Sticky Item Pressed');

  // render
  const renderItem = ({ index }: ListRenderItemInfo<{}>) => (
    <TouchableOpacity onPress={() => Alert.alert(`Item ${index} Pressed`)}>
      <DummyItem
        index={index}
        borderRadius={BORDER_RADIUS}
        width={STORY_WIDTH}
        height={STORY_HEIGHT}
        backgroundColor={'#dfdfdf'}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.root}>
      <View style={containerStyle}>
        <StickyItemFlatList
          itemWidth={STORY_WIDTH}
          itemHeight={STORY_HEIGHT}
          separatorSize={SEPARATOR_SIZE}
          borderRadius={BORDER_RADIUS}
          stickyItemWidth={STICKY_ITEM_WIDTH}
          stickyItemHeight={STICKY_ITEM_HEIGHT}
          isRTL={true}
          stickyItemBackgroundColors={['#222', '#2d88ff']}
          stickyItemContent={BasicSticky}
          onStickyItemPress={handleStickyItemPress}
          data={data}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'right',
    marginHorizontal: SEPARATOR_SIZE * 2,
    marginBottom: SEPARATOR_SIZE,
    fontSize: 43,
    fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
    textTransform: 'uppercase',
    color: '#2d88ff',
  },
});

export default BasicRTL;
