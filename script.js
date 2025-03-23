/* General Styles */
body {
    font-family: 'Poppins', sans-serif;
    background-color: #121212;
    color: white;
    text-align: center;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background: #1e1e1e;
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
}

/* Title */
h1 {
    font-size: 24px;
    font-weight: 600;
}

/* YouTube Thumbnail */
.video-thumbnail {
    position: relative;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 15px;
}

.video-thumbnail img {
    width: 100%;
    border-radius: 15px;
    transition: transform 0.3s ease;
}

.video-thumbnail:hover img {
    transform: scale(1.05);
}

.overlay {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 5px;
    opacity: 0.8;
    transition: opacity 0.3s;
}

.video-thumbnail:hover .overlay {
    opacity: 1;
}

/* Buttons */
button {
    background: #6b5b95;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
    width: 100%;
    margin: 10px 0;
    font-weight: 500;
}

button:hover {
    background: #8477af;
}

/* Extra Info */
.note {
    font-size: 14px;
    margin-top: 20px;
    opacity: 0.8;
    font-weight: 300;
}
