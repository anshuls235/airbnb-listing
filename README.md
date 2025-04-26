# Airbnb Listings - Dubai Marina

A beautiful Flask web application to browse Airbnb listings in Dubai Marina for May 22-25, 2025. This project showcases luxury accommodations and budget-friendly options in one of Dubai's most popular neighborhoods.

![Dubai Marina Stays](https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)

## Features

- Browse all available Airbnb listings in Dubai Marina
- View top 5 best-rated accommodations
- Find top 5 cheapest options for budget travelers
- Detailed listing pages with amenities, descriptions, and booking links
- Responsive design for desktop and mobile devices
- Interactive UI with animations and modern styling
- Direct booking links to Airbnb

## Installation

### Option 1: Standard Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/airbnb-listing.git
   cd airbnb-listing
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

5. Run the application:
   ```bash
   python app.py
   ```

6. Open your browser and navigate to `http://127.0.0.1:5000`

### Option 2: Docker Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/airbnb-listing.git
   cd airbnb-listing
   ```

2. Build the Docker image:
   ```bash
   docker build -t airbnb-listing .
   ```

3. Run the container:
   ```bash
   docker run -p 5000:5000 airbnb-listing
   ```

4. Open your browser and navigate to `http://127.0.0.1:5000`

## Project Structure

```
airbnb-listing/
├── app.py                  # Flask application
├── requirements.txt        # Project dependencies
├── Dockerfile              # Docker configuration
├── README.md               # Project documentation
├── static/
│   ├── css/
│   │   └── style.css       # Custom styling
│   ├── js/
│   │   └── main.js         # JavaScript for interactivity
│   └── data/
│       └── listings.json   # Listing data
└── templates/
    ├── base.html           # Base template with common elements
    ├── index.html          # Homepage with all listings
    ├── detail.html         # Detailed view of a single listing
    └── category.html       # Template for best/cheapest listings
```

## Customization

### Adding More Listings

To add more listings, edit the `static/data/listings.json` file. Each listing should follow this structure:

```json
{
  "id": "unique-id",
  "title": "Listing Title",
  "description": "Short description",
  "full_description": "Detailed description",
  "price": 29400,
  "nightly_price": 9800,
  "service_fee": 4410,
  "total_price": 33810,
  "rating": 5.0,
  "reviews": 20,
  "beds": 1,
  "beach_distance": "7-min walk",
  "cancellation": true,
  "image": "image-url",
  "location_description": "Location details",
  "url": "airbnb-listing-url",
  "amenities": [
    {"name": "Amenity Name", "icon": "bootstrap-icon-class"}
  ],
  "rank": 1
}
```

### Changing Dates

To change the dates, update the references in:
- `templates/base.html` (banner section)
- `templates/index.html` and `category.html` (description text)
- `templates/detail.html` (booking form)

## Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: Bootstrap 5, Bootstrap Icons
- **Fonts**: Poppins (Google Fonts)
- **Container**: Docker

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Images from [Unsplash](https://unsplash.com)
- Icons from [Bootstrap Icons](https://icons.getbootstrap.com/)
- Inspiration from Airbnb UI/UX