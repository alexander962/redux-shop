export default class BookstoreService {
  getBooks() {
    return [
      {
        id: 1,
        category: "reference",
        author: "Nigel Rees",
        title: "Sayings of the Century",
        price: 8.95
      },
      {
        id: 2,
        category: "fiction",
        author: "Evelyn Waugh",
        title: "Sword of Honour",
        price: 12.99,
      }
    ];
  }
}