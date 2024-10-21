const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',  // Default button color
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  space: {
    height: 20,  // Space between the buttons
  },
  statsButton: {
    backgroundColor: '#FF6347',  // Different color for stats button
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  statsButtonText: {
    color: '#fff',
    fontSize: 16,  // Smaller font size for the stats button
  },
  text: {
    fontSize: 20,
  },
  winText: {
    fontSize: 28,
    color: 'green',
    marginBottom: 20,
  },
  loseText: {
    fontSize: 28,
    color: 'red',
    marginBottom: 20,
  },
});