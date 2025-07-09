import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const DATA = [
  {
    occasion: 'Birthday',
    suggestions: [
      { name: 'Cake', location: 'E4', isOffer: true },
      { name: 'Greeting Card', location: 'C1', isOffer: false },
      { name: 'Gift Box', location: 'B3', isOffer: true },
      { name: 'Party Hats', location: 'A2', isOffer: false },
      { name: 'Birthday Banner', location: 'D5', isOffer: false },
    ],
  },
  {
    occasion: 'Diwali',
    suggestions: [
      { name: 'Diyas', location: 'F2', isOffer: true },
      { name: 'Sweets', location: 'G1', isOffer: true },
      { name: 'Crackers', location: 'H4', isOffer: false },
      { name: 'LED Lights', location: 'J3', isOffer: false }, // FIXED: was true before
    ],
  },
  {
    occasion: 'Christmas',
    suggestions: [
      { name: 'Christmas Tree', location: 'K1', isOffer: false },
      { name: 'Santa Hat', location: 'L2', isOffer: false },
      { name: 'Candy Canes', location: 'M4', isOffer: false },
      { name: 'Gift Wrapping', location: 'N3', isOffer: false },
    ],
  },
  {
    occasion: 'Wedding',
    suggestions: [
      { name: 'Invitation Cards', location: 'P1', isOffer: false },
      { name: 'Decor Items', location: 'Q2', isOffer: true },
      { name: 'Return Gifts', location: 'R3', isOffer: true },
      { name: 'Flower Bouquets', location: 'S4', isOffer: false },
    ],
  },
];

const OccasionSuggestionsScreen = () => {
  const [activeOccasion, setActiveOccasion] = useState(null);

  const toggleOccasion = (index) => {
    setActiveOccasion(activeOccasion === index ? null : index);
  };

  const renderItem = ({ item, index }) => {
    const offers = item.suggestions.filter((s) => s.isOffer);
    const others = item.suggestions.filter((s) => !s.isOffer);

    return (
      <View style={styles.card}>
        <TouchableOpacity onPress={() => toggleOccasion(index)} style={styles.header}>
          <Text style={styles.occasionText}>{item.occasion}</Text>
        </TouchableOpacity>

        {activeOccasion === index && (
          <View style={styles.suggestionList}>
            <Text style={styles.sectionTitle}>🔥 Offers:</Text>
            {offers.length > 0 ? (
              offers.map((suggestion, idx) => (
                <Text key={`offer-${idx}`} style={styles.offerItem}>
                  • {suggestion.name} ({suggestion.location})
                </Text>
              ))
            ) : (
              <Text style={styles.emptyNote}>No offers available</Text>
            )}

            <Text style={styles.sectionTitle}>🎁 Products:</Text>
            {others.length > 0 ? (
              others.map((suggestion, idx) => (
                <Text key={`prod-${idx}`} style={styles.suggestionItem}>
                  • {suggestion.name} ({suggestion.location})
                </Text>
              ))
            ) : (
              <Text style={styles.emptyNote}>No other products listed</Text>
            )}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Suggestions by Occasion</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default OccasionSuggestionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  occasionText: {
    fontSize: 18,
    fontWeight: '600',
  },
  suggestionList: {
    marginTop: 12,
    paddingLeft: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 4,
    color: '#333',
  },
  suggestionItem: {
    fontSize: 16,
    marginVertical: 2,
    color: '#555',
  },
  offerItem: {
    fontSize: 16,
    marginVertical: 2,
    color: '#d35400',
    fontWeight: '600',
  },
  emptyNote: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#888',
    marginVertical: 4,
  },
});
