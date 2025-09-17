// src/screens/Home.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default function Home({ navigation }: any) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#E91E63" />
      </View>
    );
  }

  const renderItem = ({ item }: { item: Product }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ProductDetail", { product: item })}
    >
      <Image source={{ uri: item.thumbnail }} style={styles.image} />
      <Text style={styles.title} numberOfLines={1}>
        {item.title}
      </Text>
      <View style={styles.cardFooter}>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
        <Ionicons name="heart-outline" size={20} color="#555" />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Viorra</Text>
        <Ionicons name="cart-outline" size={24} color="black" />
      </View>

      {/* Search bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#999" />
        <TextInput
          placeholder="Search for all products"
          style={styles.searchInput}
        />
      </View>

      {/* Title + Filter */}
      <View style={styles.titleRow}>
        <Text style={styles.sectionTitle}>Best Products</Text>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>Apply Filter</Text>
          <Ionicons name="chevron-down" size={16} color="black" />
        </TouchableOpacity>
      </View>

      {/* Product Grid */}
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
        // 🚀 Smooth scrolling props
        decelerationRate="fast"
        scrollEventThrottle={16}
        bounces={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFECEC", // 🔥 light pink background
    padding: 16,
  },
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  logo: { fontSize: 22, fontWeight: "bold", color: "#E91E63" },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 16,
    height: 40,
    elevation: 2,
  },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 14 },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold" },
  filterBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    elevation: 2,
  },
  filterText: { fontSize: 14, marginRight: 4 },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
    flex: 0.48,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  image: { width: "100%", height: 120, borderRadius: 10, marginBottom: 8 },
  title: { fontSize: 14, fontWeight: "500", color: "#222", marginBottom: 4 },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: { fontSize: 14, fontWeight: "600", color: "#000" },
});
