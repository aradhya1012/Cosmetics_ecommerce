import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const Profile: React.FC = () => {
  const navigation = useNavigation<any>(); // ✅ Access navigation

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 80 }} // ⬅ padding for bottom tab
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      {/* User Info */}
      <View style={styles.userCard}>
        <View style={styles.userRow}>
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/women/44.jpg",
            }}
            style={styles.avatar}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Olivia</Text>
            <Text style={styles.userEmail}>Olivia@gmail.com</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name="create-outline" size={20} color="#C86B6B" />
          </TouchableOpacity>
        </View>
      </View>

      {/* First Menu Section */}
      <View style={styles.menuCard}>
        <MenuItem
          icon="location-outline"
          title="Address"
          subtitle="Manage your saved address"
          onPress={() => {}}
        />
        <MenuItem
          icon="bag-handle-outline"
          title="Order History"
          subtitle="View your past orders"
          onPress={() => {}}
        />
        <MenuItem icon="language-outline" title="Language" onPress={() => {}} />
        <MenuItem
          icon="notifications-outline"
          title="Notifications"
          onPress={() => {}}
        />
      </View>

      {/* Second Menu Section */}
      <View style={styles.menuCard}>
        <MenuItem icon="call-outline" title="Contact Us" onPress={() => {}} />
        <MenuItem icon="help-circle-outline" title="Get Help" onPress={() => {}} />
        <MenuItem
          icon="shield-checkmark-outline"
          title="Privacy Policy"
          onPress={() => {}}
        />
        <MenuItem
          icon="document-text-outline"
          title="Terms and Conditions"
          onPress={() => {}}
        />

        {/* Log Out */}
        <TouchableOpacity
          style={styles.logoutRow}
          onPress={() => navigation.replace("Onboarding")} // ✅ Navigate
        >
          <Ionicons name="log-out-outline" size={20} color="#C86B6B" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;

/* ---------- Reusable Menu Item ---------- */
type MenuItemProps = {
  icon: string;
  title: string;
  subtitle?: string;
  onPress: () => void;
};

const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  title,
  subtitle,
  onPress,
}) => (
  <TouchableOpacity style={styles.menuRow} onPress={onPress}>
    <View style={styles.menuLeft}>
      <Ionicons name={icon as any} size={20} color="#444" />
      <View style={{ marginLeft: 12 }}>
        <Text style={styles.menuTitle}>{title}</Text>
        {subtitle && <Text style={styles.menuSubtitle}>{subtitle}</Text>}
      </View>
    </View>
    <Ionicons name="chevron-forward-outline" size={18} color="#888" />
  </TouchableOpacity>
);

/* ---------- Styles ---------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
  userCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  userInfo: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  userEmail: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
  },
  menuCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 8,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  menuRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  menuTitle: {
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
  },
  menuSubtitle: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },
  logoutRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  logoutText: {
    fontSize: 15,
    color: "#C86B6B",
    fontWeight: "600",
    marginLeft: 8,
  },
});
