from flask import Flask, render_template
import json
import os

app = Flask(__name__)

# Load listings data from JSON file
def load_listings():
    json_path = os.path.join(os.path.dirname(__file__), 'static', 'data', 'listings.json')
    with open(json_path, 'r') as file:
        return json.load(file)

@app.route('/')
def index():
    listings = load_listings()
    return render_template('index.html', listings=listings)

@app.route('/listing/<string:id>')
def listing_detail(id):
    listings = load_listings()
    listing = next((item for item in listings if item["id"] == id), None)
    return render_template('detail.html', listing=listing)

@app.route('/best')
def best_listings():
    listings = load_listings()
    # Sort by rating, then by number of reviews
    best_listings = sorted(
        [l for l in listings if l.get("rating", 0) > 0], 
        key=lambda x: (x.get("rating", 0), x.get("reviews", 0)), 
        reverse=True
    )[:5]
    return render_template('category.html', 
                          listings=best_listings, 
                          title="Top 5 Best-Rated Airbnbs in Dubai Marina")

@app.route('/cheapest')
def cheapest_listings():
    listings = load_listings()
    # Sort by price
    cheapest_listings = sorted(listings, key=lambda x: x.get("price", 9999999))[:5]
    return render_template('category.html', 
                          listings=cheapest_listings, 
                          title="Top 5 Cheapest Airbnbs in Dubai Marina")

if __name__ == '__main__':
    app.run(debug=True)