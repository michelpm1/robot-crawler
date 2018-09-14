Robot Crawler
============

Scrape data by argument inputs and return json with scraped data

### Built With
```
Language:
Javascript
```

### Prerequisites

- `Node.JS = v9.x`

## Getting Started

Clone the project;
```
git clone https://github.com/michelpm1/robot-crawler.git
```

### Initial Configuration

Run this code at project root directory:
```bash
npm install
```


### Running

At root directory run:
```bash
npm start $checkIn $checkOut
```

Where first variable is check-in and second is check-out

Example:
```bash
npm start 15032018 20032018
```

After, go to your browser and navigate to:

**localhost:3000/scrape**

**Obs1: Puppeteer browser was let open just to better visualize the scrape process, to turn off change headless to true:**

```bash
 const browser = await puppeteer.launch({headless: false});
```

**Obs2: If you would like to test with a different date, just turn off node server and add new arguments**


 

