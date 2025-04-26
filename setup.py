import os

def create_directory_structure():
    """
    Create the necessary directory structure for the project
    """
    # Define the directories to create
    directories = [
        'static',
        'static/css',
        'static/js',
        'static/data',
        'templates'
    ]
    
    # Create each directory if it doesn't exist
    for directory in directories:
        if not os.path.exists(directory):
            os.makedirs(directory)
            print(f"Created directory: {directory}")
        else:
            print(f"Directory already exists: {directory}")

if __name__ == "__main__":
    print("Setting up directory structure for Airbnb Listings project...")
    create_directory_structure()
    print("Setup complete!")
    print("Now you can run the application with: python app.py")