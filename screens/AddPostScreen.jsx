import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useAtom } from 'jotai';
import { postsAtom } from '../atoms/postsAtom';
import { createPost } from '../api/postsApi';
import { useNavigation } from '@react-navigation/native';



const AddPostScreen = () => {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [post, setPosts] = useAtom(postsAtom);
const navigation = useNavigation();
const [loading, setLoading] = useState(false)


const handleAddPost = async () =>{
    const newPost ={title, body};
setLoading(true)
    try {
        const createdPost = await createPost(newPost);
        setPosts([...post, createdPost]);
        Alert.alert('New post added successfully');
        navigation.goBack();
    } catch (error) {
        console.log(error)
    } finally{
        setLoading(false)
    }
    
}


if (loading) return <ActivityIndicator size={20} color={'red'} />
  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Title'
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder='Body'
        value={body}
        onChangeText={setBody}
        style={styles.input}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleAddPost}>
        <Text style={styles.buttonText}>Add Post</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddPostScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 16,
    },

    input:{
        marginBottom: 16,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 8,
        borderRadius: 6
    },
    button:{
        backgroundColor: "green",
        paddingVertical: 6,
        marginTop: 40
      },
      buttonText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: "center"
      }
})