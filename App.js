import React, {useState, useEffect} from 'react';
import { RefreshControl, SafeAreaView, ScrollView, Text, View, StyleSheet} from 'react-native';
const url = "https://advancedfilemanager.com/wp-json/cdwor/v1/s/65545433226809765632143545432437"

const Saleo = () => {

  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    
    <View 
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'honeydew'
      }}>
         <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
      <Text style={styles.label}>${data.total} / {data.orders}</Text>
      </ScrollView>
    </View >
  );
};
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 24,
  },
});
export default Saleo;