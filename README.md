# United States Educational Attainment (2010-2014)

This project visualizes the percentage of adults aged 25 and older with a bachelor's degree or higher in the United States from 2010 to 2014 using D3.js. The data is sourced from JSON files hosted on GitHub.

## Table of Contents

- [Project Overview](#project-overview)
- Features
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- Usage
- [Project Structure](#project-structure)
- Contributing
- License

## Project Overview

This project aims to provide a visual representation of educational attainment in the United States. It uses D3.js to create an interactive choropleth map that displays the percentage of adults with a bachelor's degree or higher by county.

## Features

- **Interactive Choropleth Map**: Hover over counties to see detailed information about educational attainment.
- **Tooltip**: Displays additional information about the county when hovering over a data point.
- **Legend**: Shows the color scale used to represent different percentages of educational attainment.
- **Axes**: X-axis represents the percentage of adults with a bachelor's degree or higher.

## Technologies Used

- **D3.js**: For creating the interactive choropleth map.
- **TopoJSON**: For handling geographical data.
- **HTML/CSS**: For structuring and styling the web page.
- **JavaScript**: For data manipulation and D3.js integration.

## Setup and Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/us-educational-attainment.git
    cd us-educational-attainment
    ```

2. **Open the project**:
    Open [`index.html`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fag%2FGitHub%2FD3%20SVG%2Fedu-map%2Findex.html%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/ag/GitHub/D3 SVG/edu-map/index.html") in your preferred web browser.

## Usage

- Open [`index.html`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fag%2FGitHub%2FD3%20SVG%2Fedu-map%2Findex.html%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "/Users/ag/GitHub/D3 SVG/edu-map/index.html") in a web browser to view the choropleth map.
- Hover over the counties to see detailed information about educational attainment.

## Project Structure

```
us-educational-attainment/
│
├── index.html          # Main HTML file
├── script.js           # JavaScript file containing D3.js code
├── styles.css          # CSS file for custom styles
└── README.md           # Project documentation
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch ([`git push origin feature-branch`](command:_github.copilot.openSymbolFromReferences?%5B%22git%20push%20origin%20feature-branch%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22%2FUsers%2Fag%2FGitHub%2FD3%20SVG%2Fedu-map%2Fscript.js%22%2C%22external%22%3A%22file%3A%2F%2F%2FUsers%2Fag%2FGitHub%2FD3%2520SVG%2Fedu-map%2Fscript.js%22%2C%22path%22%3A%22%2FUsers%2Fag%2FGitHub%2FD3%20SVG%2Fedu-map%2Fscript.js%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A42%2C%22character%22%3A23%7D%7D%5D%5D "Go to definition")).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Feel free to reach out if you have any questions or suggestions!