# 🃏 Memory Card Game

A modern Memory Card Game built with HTML, CSS, and JavaScript.

## 🌐 Live Demo

**Play Now:** https://memory-game-three-vert.vercel.app/

## ✨ Features

* Beautiful card flip animations
* Responsive design
* Randomized card positions on every game
* Score and move tracking
* Modern UI with gradient cards
* Lucide icons for card faces
* Game customization support

## 🎮 How to Play

1. Click any card to reveal it.
2. Click another card to find its matching pair.
3. If the cards match, they remain visible.
4. If they do not match, they flip back after a short delay.
5. Match all pairs to win the game.

## ⚙️ Default Game Configuration

| Setting         | Value |
| --------------- | ----- |
| Number of Cards | 20    |
| Cards Per Row   | 5     |

This creates a board with:

* 20 total cards
* 10 matching pairs
* 5 cards displayed per row

## 🎨 Customize Your Game

Use the controls above the game board to create your own layout.

### Number of Cards

* Minimum: 0
* Maximum: 30
* Recommended: Even numbers only
* Every pair requires 2 cards

Examples:

| Cards | Pairs |
| ----- | ----- |
| 12    | 6     |
| 16    | 8     |
| 20    | 10    |
| 24    | 12    |
| 30    | 15    |

### Cards Per Row

Choose how many cards should appear in each row.

Examples:

| Total Cards | Cards Per Row |
| ----------- | ------------- |
| 20          | 5             |
| 20          | 4             |
| 24          | 6             |
| 30          | 5             |

### Customize Your Game Button

When clicked:

1. Reads the selected values.
2. Generates the required number of card pairs.
3. Shuffles the cards randomly.
4. Updates the board layout using the selected cards-per-row value.
5. Starts a new game with the new configuration.

## 🚀 Local Development

Clone the repository:

```bash
git clone <repository-url>
```

Open the project folder:

```bash
cd memory-card-game
```

Run locally:

```bash
open index.html
```

or use a local server:

```bash
npx serve .
```

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Lucide Icons

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Husen Telwala**
