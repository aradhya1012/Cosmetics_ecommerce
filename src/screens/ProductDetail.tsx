// src/screens/ProductDetail.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProductDetail({ route, navigation }: any) {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Back + Share */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Ionicons name="share-outline" size={22} color="black" />
      </View>

      {/* Product Image */}
      <Image source={{ uri: product.thumbnail }} style={styles.image} />

      {/* Info Section */}
      <View style={styles.content}>
        {/* Tag */}
        <TouchableOpacity style={styles.tag}>
          <Text style={styles.tagText}>View Similar</Text>
        </TouchableOpacity>

        {/* Title + Desc */}
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.desc} numberOfLines={3}>
          {product.description}
        </Text>

        {/* Rating */}
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={16} color="#FFD700" />
          <Ionicons name="star" size={16} color="#FFD700" />
          <Ionicons name="star" size={16} color="#FFD700" />
          <Ionicons name="star-outline" size={16} color="#FFD700" />
          <Ionicons name="star-outline" size={16} color="#FFD700" />
          <Text style={styles.ratingText}> 2.5/5</Text>
        </View>

        <Text style={styles.seller}>Sold by : Essence</Text>

        {/* Price Row */}
        <View style={styles.priceRow}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <Text style={styles.oldPrice}>$10.48</Text>
          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addBtnText}>Add to Bag</Text>
          </TouchableOpacity>
        </View>

        {/* Highlights */}
        <Text style={styles.sectionTitle}>Highlights</Text>
        <View style={styles.highlights}>
          <View style={styles.highlightItem}>
            <Text style={styles.highlightKey}>Width</Text>
            <Text style={styles.highlightValue}>15.14</Text>
          </View>
          <View style={styles.highlightItem}>
            <Text style={styles.highlightKey}>Height</Text>
            <Text style={styles.highlightValue}>13.08</Text>
          </View>
          <View style={styles.highlightItem}>
            <Text style={styles.highlightKey}>Warranty</Text>
            <Text style={styles.highlightValue}>1 week</Text>
          </View>
          <View style={styles.highlightItem}>
            <Text style={styles.highlightKey}>Shipping</Text>
            <Text style={styles.highlightValue}>3-5 business days</Text>
          </View>
        </View>

        {/* Ratings & Reviews */}
        <Text style={styles.sectionTitle}>Ratings & Reviews</Text>
        <View style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <Text style={styles.reviewer}>Eleanor Collins</Text>
            <View style={styles.reviewStars}>
              <Ionicons name="star" size={14} color="#FFD700" />
              <Ionicons name="star" size={14} color="#FFD700" />
              <Ionicons name="star" size={14} color="#FFD700" />
              <Ionicons name="star-outline" size={14} color="#FFD700" />
              <Ionicons name="star-outline" size={14} color="#FFD700" />
            </View>
          </View>
          <Text style={styles.reviewText}>Would not recommend…</Text>
        </View>

        <View style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <Text style={styles.reviewer}>Lucas Gordon</Text>
            <View style={styles.reviewStars}>
              <Ionicons name="star" size={14} color="#FFD700" />
              <Ionicons name="star" size={14} color="#FFD700" />
              <Ionicons name="star" size={14} color="#FFD700" />
              <Ionicons name="star" size={14} color="#FFD700" />
              <Ionicons name="star-outline" size={14} color="#FFD700" />
            </View>
          </View>
          <Text style={styles.reviewText}>Very satisfied!</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFECEC" },
  topBar: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: { width: "100%", height: 250, resizeMode: "cover" },
  content: { padding: 16 },
  tag: {
    alignSelf: "flex-start",
    backgroundColor: "#FFF0F0",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  tagText: { fontSize: 12, color: "#E91E63" },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 6 },
  desc: { fontSize: 14, color: "#555", marginBottom: 8 },
  ratingRow: { flexDirection: "row", alignItems: "center", marginBottom: 6 },
  ratingText: { fontSize: 14, color: "#333" },
  seller: { fontSize: 13, color: "#666", marginBottom: 10 },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  price: { fontSize: 20, fontWeight: "bold", color: "#000" },
  oldPrice: {
    fontSize: 14,
    color: "#999",
    textDecorationLine: "line-through",
    marginLeft: 10,
  },
  addBtn: {
    marginLeft: "auto",
    backgroundColor: "#E91E63",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  addBtnText: { color: "#fff", fontSize: 14, fontWeight: "bold" },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginVertical: 10 },
  highlights: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  highlightItem: { width: "48%", marginBottom: 10 },
  highlightKey: { fontSize: 13, color: "#666" },
  highlightValue: { fontSize: 14, fontWeight: "500" },
  reviewCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  reviewer: { fontSize: 14, fontWeight: "600" },
  reviewStars: { flexDirection: "row" },
  reviewText: { fontSize: 13, color: "#444" },
});
