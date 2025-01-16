import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAtom } from 'jotai'
import { postsAtom } from '../atoms/postsAtom'

const ViewPostScreen = () => {
    const [posts] = useAtom(postsAtom)
    console.log('POSTS DATA', posts);
  return (
    <View style={styles.container}>
     <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.post}>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.body}</Text>
                {/* <TouchableOpacity style={styles.button} onPress={()=>handleDeletePost(item.id)}>
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity> */}
              </View>
            )}
          />
        
    </View>
  )
}

export default ViewPostScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 16,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
        color: "black",
      },
      post: {
        marginBottom: 16,
        padding: 16,
        backgroundColor: "#f9f9f9",
        borderRadius: 8,
      },
})