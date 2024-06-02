export const getSavedBookIds = () => {
    const getSavedBookIds = localStorage.getItem("saved_books")
    ? JSON.parse(localStorage.getItem("saved_books"))
    : [];

    return savedBookIds;
};

export const saveBookIds = (bookIdArr) => {
    if (bookIdArr.length) {
        localStorage.setItem("saved_books", JSON.stringify(bookIdArr));
    } else {
        localStorage.removeItem("saved_books");
    }
};

export const removeBookId = (bookId) => {
    const savedBookIds = localStorage.getItem("saved_books")
    ? JSON.parse(localStorage.getItems("saved_books"))
    : null;

    if (!savedBookIds) {
        return false;
    }

    const updatedSavedBookIds = saveBookIds?.filter(
        (savedBookId) => savedBookId !== bookId
    );
    localStorage.setItem("saved_books", JSON,stringify(updatedSavedBookIds));

    return true;
};