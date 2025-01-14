import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { postsAtom } from "../atoms/postsAtom";
import { deletePost, fetchPosts } from "../api/postsApi";

const PostScreen = () => {
  const [post, setPosts] = useAtom(postsAtom);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPost = async () => {
    setLoading(true);
    try {
      const fetchedPost = await fetchPosts();
      setPosts(fetchedPost);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (id) =>{
    try {
        await deletePost(id);
        setPosts(post.filter((item) => item.id !== id));
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

if(loading) return <ActivityIndicator size='large' color='blue'/>

  return (
    <View style={styles.container}>
      <FlatList
        data={post}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.body}</Text>
            <TouchableOpacity style={styles.button} onPress={()=>handleDeletePost(item.id)}>
                <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  post: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
  },
  button:{
    backgroundColor: "blue",
    paddingVertical: 6
  },
  buttonText:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: "center"
  }
});
