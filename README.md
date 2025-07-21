# Smart-Expense-Tracker
# 💸 Expense Tracker App

A simple and user-friendly web app to help you track your daily expenses. Built using **HTML, CSS, JavaScript, PHP**, and **MySQL**, this project covers both frontend and backend development in one lightweight application.

---

## 🎯 Features

- ✅ Add new expenses with category, amount, and date
- ✅ View all added expenses in a neat table format
- ✅ See your total spending update in real-time
- ✅ Delete entries from the list easily
- ✅ All expenses are stored in a MySQL database.
- ✅ Clean and aesthetic light pink UI for better user experience

---

## 🖼️ UI Preview

![Image](https://github.com/user-attachments/assets/2ffd4d5e-2dc8-494a-9fea-116c05874417)
---

## 🛠️ Tech Stack

| Layer        | Technology     |
|--------------|----------------|
| Frontend     | HTML, CSS (light pink theme), JavaScript (vanilla) |
| Backend      | PHP (for data handling) |
| Database     | MySQL (via XAMPP / phpMyAdmin) |

---

## 📂 Folder Structure
expense-tracker/
- ├── index.html # Main UI
- ├── style.css # CSS styles
- ├── script.js # JavaScript logic
- ├── db.php # DB connection
- ├── insert.php # Insert logic via PHP
- └── README.md # This file

---

## 🗄️ Database Setup (MySQL)

1. Open **phpMyAdmin**
2. Create a new database:
    ```sql
    CREATE DATABASE expense_tracker;
    ```
3. Create the `expenses` table:
    ```sql
    USE expense_tracker;

    CREATE TABLE expenses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        category VARCHAR(100),
        amount DECIMAL(10,2),
        date DATE
    );
    ```

---

## 🚀 How to Run

1. Install **XAMPP** and start **Apache** and **MySQL**
2. Clone or download this project inside `htdocs` folder:
    ```
    C:\xampp\htdocs\expense-tracker\
    ```
3. Open browser and visit:
    ```
    http://localhost/expense-tracker/index.html
    ```

---

## 📌 What I Learned

This project helped me strengthen my skills in:
- Connecting frontend with backend using PHP
- Using **prepared statements** for secure DB queries
- DOM manipulation with vanilla JavaScript
- Designing clean UI with a calming color palette
- End-to-end full stack app structure

---

## 🙋‍♀️ Author

**Karina Kumari**  
💼 Aspiring Software Developer  
🔗 [LinkedIn](https://www.linkedin.com/in/karina-kumari026012/)


<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/d0f8ca27-1acc-4509-a603-b8c9e65d2cc0" />
