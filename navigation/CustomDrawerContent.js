import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
} from 'react-native-paper';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView>
      <View
        style={
          styles.drawerContent
        }
      >
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                'https://media-exp1.licdn.com/dms/image/C5603AQGQZ5qXiM7MvA/profile-displayphoto-shrink_200_200/0/1605399411225?e=1623888000&v=beta&t=ix1H_Hd1kBzfyLLXcZPv6uPKkk1PWaP0Q6Srnmry76k',
            }}
            size={50}
          />
          <Title style={styles.title}>Iip Shoifuddin</Title>
          <Caption style={styles.caption}>@shoifuddiniip</Caption>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="movie-open-outline"
                color={color}
                size={size}
              />
            )}
            label="Movie"
            onPress={() => {}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="youtube-tv" color={color} size={size} />
            )}
            label="Sarial TV"
            onPress={() => {}}
          />
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default CustomDrawerContent