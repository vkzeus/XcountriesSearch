body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

.App {
  text-align: center;
  padding: 20px;
}

h1 {
  margin-bottom: 20px;
}

.search-bar {
  width: 50%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.card img {
  width: 100px;
  height: auto;
  margin-bottom: 10px;
}

.card h2 {
  font-size: 16px;
  color: #333;
}
