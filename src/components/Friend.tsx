import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import lodash from 'lodash';

interface Props {
  data: {
    id: number;
    name: string;
    likes: number;
    online: string;
  };
  follow: () => void;
}

function FriendComponent({ data, follow }: Props){
  return (
    <View style={{ marginVertical: 5 }}>
      <Text>
        { data.name } - Likes: { data.likes }
      </Text>

      <TouchableOpacity onPress={follow} style={{ marginVertical: 2 }}>
        <Text>Deixar de seguir</Text>
      </TouchableOpacity>

      <Text>Online em: {data.online}</Text>
    </View>
  );
}

export const Friend = memo(FriendComponent, (prevProps, nextProps) => {
  return lodash.isEqual(prevProps.data, nextProps.data)
});