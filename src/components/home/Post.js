import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Divider } from "react-native-elements";

const Post = ({ post }) => {
  return (
    <View style={styles.post}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post?.imageurl} />
      <PostFooter />
      <Likes likes={post?.likes} />
      <Caption caption={post?.caption} user={post?.user} />
      <Comments comments={post?.comments} />
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View style={styles.postheader}>
      <View
        style={{
          flexDirection: "row",
          margin: 5,
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: post?.profile_pic,
          }}
          style={styles.profile}
        />
        <Text style={{ color: "white", fontWeight: "900", marginLeft: 10 }}>
          {post?.user}
        </Text>
      </View>
      <View>
        <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
      </View>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View style={{ width: "100%", height: 450 }}>
      <Image source={{ uri: post }} style={styles.image} />
    </View>
  );
};

const Icon = ({ imagestyle, imageurl, trueurl, handlePress }) => {
  const [isTrue, setIsTrue] = useState(false);
  const handleIconClick = () => {
    setIsTrue(!isTrue);
  };
  return (
    <TouchableOpacity onPress={handlePress ? handlePress : handleIconClick}>
      <Image source={isTrue ? trueurl : imageurl} style={imagestyle} />
    </TouchableOpacity>
  );
};

const PostFooter = () => {
  const heart = "../../assets/white_heart.png";
  const red_heart = "../../assets/red_heart.png";
  const msg_outline = "../../assets/msg_outline.png";
  const msg_fill = "../../assets/msg_filled.png";
  const save_outline = "../../assets/save_outline.png";
  const save_filled = "../../assets/save_filled.png";
  const share = "../../assets/share.png";

  return (
    <View style={styles.postheader}>
      <View style={styles.postheader}>
        <Icon
          imageurl={require(heart)}
          imagestyle={styles.footericon}
          trueurl={require(red_heart)}
        />

        <Icon
          imageurl={require(msg_outline)}
          imagestyle={styles.footericon}
          trueurl={require(msg_fill)}
        />
        <Icon imageurl={require(share)} imagestyle={styles.footericon} />
      </View>
      <Icon
        imageurl={require(save_outline)}
        imagestyle={styles.footericon}
        trueurl={require(save_filled)}
      />
    </View>
  );
};

const Likes = ({ likes }) => (
  <View>
    <Text style={{ color: "white", fontWeight: "600" }}>{likes} likes</Text>
  </View>
);

const Caption = ({ user, caption }) => (
  <View style={{ flexDirection: "row", marginTop: 5 }}>
    <Text style={{ color: "white", fontWeight: "900", marginRight: 5 }}>
      {user}
    </Text>
    <Text style={{ color: "white", fontWeight: "600" }}>{caption}</Text>
  </View>
);

const Comments = ({ comments }) => {
  const [isVisible, setIsVisible] = useState(false);
  const handlecomments = () => {
    setIsVisible(true);
  };
  return (
    <View>
      {!isVisible ? (
        <View>
          {comments.length > 1 && (
            <TouchableOpacity onPress={handlecomments}>
              <Text style={{ color: "#c9c6c5" }}>
                View {comments?.length > 1 && "all " + comments.length}{" "}
                {comments?.length > 1 && "comments"}
              </Text>
            </TouchableOpacity>
          )}
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontWeight: "900", color: "white" }}>
              {comments[0]?.user}
            </Text>
            <Text style={{ color: "white", marginLeft: 10 }}>
              {comments[0]?.comment}
            </Text>
          </View>
        </View>
      ) : (
        <ScrollView>
          {comments.map((comment, index) => (
            <View style={{ flexDirection: "row" }} key={index}>
              <Text style={{ fontWeight: "900", color: "white" }}>
                {comment?.user}
              </Text>
              <Text style={{ color: "white", marginLeft: 10 }}>
                {comment?.comment}
              </Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  post: {
    marginVertical: 30,
  },
  postheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    alignItems: "center",
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
  },
  image: {
    resizeMode: "cover",
    height: "100%",
  },
  footericon: {
    width: 33,
    height: 33,
    marginRight: 5,
  },
});
