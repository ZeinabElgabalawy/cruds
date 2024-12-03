// تعريف المتغيرات
let books = JSON.parse(localStorage.getItem('books')) || [];
let editingIndex = null;

// تحميل البيانات من localStorage عند تحميل الصفحة
window.onload = function() {
    renderBooks();
}

// إضافة أو تعديل كتاب
function addOrUpdateBook() {
    const bookName = document.getElementById('bookName').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const quantity = document.getElementById('quantity').value;

    if (editingIndex !== null) {
        // تعديل الكتاب
        books[editingIndex] = { bookName, author, year, quantity };
        editingIndex = null;
    } else {
        // إضافة كتاب جديد
        books.push({ bookName, author, year, quantity });
    }

    localStorage.setItem('books', JSON.stringify(books));
    renderBooks();
    clearForm();
}

// عرض الكتب
function renderBooks() {
    const tableBody = document.querySelector('#booksTable tbody');
    tableBody.innerHTML = '';

    books.forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${book.bookName}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.quantity}</td>
            <td>
                <button class="edit" onclick="editBook(${index})">تعديل</button>
                <button class="delete" onclick="deleteBook(${index})">حذف</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// تعديل الكتاب
function editBook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.bookName;
    document.getElementById('author').value = book.author;
    document.getElementById('year').value = book.year;
    document.getElementById('quantity').value = book.quantity;
    editingIndex = index;
}

// حذف الكتاب
function deleteBook(index) {
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    renderBooks();
}

// البحث
function searchBooks() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredBooks = books.filter(book => book.bookName.toLowerCase().includes(searchInput));
    
    const tableBody = document.querySelector('#booksTable tbody');
    tableBody.innerHTML = '';

    filteredBooks.forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${book.bookName}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.quantity}</td>
            <td>
                <button class="edit" onclick="editBook(${index})">تعديل</button>
                <button class="delete" onclick="deleteBook(${index})">حذف</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// مسح النموذج بعد إضافة الكتاب أو تعديله
function clearForm() {
    document.getElementById('bookName').value = '';
    document.getElementById('author').value = '';
    document.getElementById('year').value = '';
    document.getElementById('quantity').value = '';
}
function clearSearch() {
    document.getElementById('searchInput').value = '';
    renderBooks();  // لإعادة عرض جميع الكتب بعد مسح البحث
}
function addOrUpdateBook() {
    const bookName = document.getElementById('bookName').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const quantity = document.getElementById('quantity').value;
    const genre = document.getElementById('genre').value;  // الحصول على نوع الكتاب

    if (editingIndex !== null) {
        // تعديل الكتاب
        books[editingIndex] = { bookName, author, year, quantity, genre };
        editingIndex = null;
    } else {
        // إضافة كتاب جديد
        books.push({ bookName, author, year, quantity, genre });
    }

    localStorage.setItem('books', JSON.stringify(books));
    renderBooks();
    clearForm();
}
function renderBooks() {
    const tableBody = document.querySelector('#booksTable tbody');
    tableBody.innerHTML = '';

    books.forEach((book, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${book.bookName}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
            <td>${book.quantity}</td>
            <td>${book.genre}</td>  <!-- إضافة نوع الكتاب -->
            <td>
                <button class="edit" onclick="editBook(${index})">تعديل</button>
                <button class="delete" onclick="deleteBook(${index})">حذف</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}
